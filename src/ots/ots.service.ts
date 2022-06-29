import {BadRequestException, Injectable} from '@nestjs/common';
import {CreateOtsDto} from './dto/create-ots.dto';
import {UpdateOtsDto} from './dto/update-ots.dto';
import {OtsContainerDto} from "./dto/ots-container.dto";
import {CreateOtsResultDto} from "./dto/create-ots-result.dto";
import {UpdateOtsResultDto} from "./dto/update-ots-result.dto";

const OpenTimestamps = require('opentimestamps');

@Injectable()
export class OtsService {
    async create(createOtsDto: CreateOtsDto): Promise<CreateOtsResultDto> {
        let hashes: string[] = createOtsDto.Hashes;

        if (!hashes || hashes.length === 0) {
            throw new BadRequestException('No hash values provided');
        }

        const detaches: DetachedHashContainer[] = [];
        hashes.forEach(hash => {
            const buffer = Buffer.from(hash, 'hex');
            const det = OpenTimestamps.DetachedTimestampFile.fromHash(new OpenTimestamps.Ops.OpSHA256(), buffer);
            const container = new DetachedHashContainer();
            container.Detached = det;
            container.Hash = hash;
            detaches.push(container);
        });

        await OpenTimestamps.stamp(detaches.map(cont => cont.Detached));
        var createOtsResultDto = new CreateOtsResultDto();
        createOtsResultDto.OtsContainers = [];
        detaches.forEach(cont => {
            const timeStampFile = cont.Detached.serializeToBytes();
            const buffer = Buffer.from(timeStampFile);
            const base64String = buffer.toString('base64');
            const newContainer = new OtsContainerDto();
            newContainer.OtsFileBase64 = base64String;
            newContainer.InfoResult = OpenTimestamps.info(cont.Detached);
            newContainer.Hash = cont.Hash;
            createOtsResultDto.OtsContainers.push(newContainer);
        });

        return createOtsResultDto;

    }

    async update(updateOtsDto: UpdateOtsDto): Promise<UpdateOtsResultDto> {
        var updateOtsResultDto = new UpdateOtsResultDto();
        updateOtsResultDto.OtsContainers = [];
        for (const cont of updateOtsDto.OtsContainers) {
            var updatedContainer = new OtsContainerDto();
            updatedContainer.Hash = cont.Hash;

            try {

                const myBuffer = Buffer.from(cont.OtsFileBase64, 'base64');
                const detached = OpenTimestamps.DetachedTimestampFile.deserialize(myBuffer);


                let changed = await OpenTimestamps.upgrade(detached);

                if (changed) {
                    // OTS file has changed
                    const timeStampFile = detached.serializeToBytes();
                    const buffer = Buffer.from(timeStampFile);
                    updatedContainer.OtsFileBase64 = buffer.toString('base64');
                    updatedContainer.OtsFileUpdated = true;
                } else {
                    // OTS file has not changed
                    updatedContainer.OtsFileBase64 = cont.OtsFileBase64;
                    updatedContainer.OtsFileUpdated = false;
                }


                let options: any = {};
                // options.ignoreBitcoinNode - Ignore verification with bitcoin node
                options.ignoreBitcoinNode = false;
                // options.timeout - Adjust the request timeout (default: 1000)
                options.timeout = 2000;

                const buffer = Buffer.from(cont.Hash, 'hex');
                const detachedHash = OpenTimestamps.DetachedTimestampFile.fromHash(new OpenTimestamps.Ops.OpSHA256(), buffer);

                let verifyResult = await OpenTimestamps.verify(detached, detachedHash, options);

                if (verifyResult && verifyResult.bitcoin) {
                    updatedContainer.IsVerified = true;
                    updatedContainer.UnixTimeOfVerfication = verifyResult.bitcoin.timestamp;
                } else {
                    updatedContainer.IsVerified = false;
                    updatedContainer.UnixTimeOfVerfication = undefined;
                }


                updatedContainer.InfoResult = OpenTimestamps.info(detached);
            } catch (e) {
                console.log(`Exception while handling '${updatedContainer.Hash}'`, e);
                updatedContainer.ExceptionMsg = e.message;
            }

            updateOtsResultDto.OtsContainers.push(updatedContainer);
        }

        return updateOtsResultDto;
    }

}

export class DetachedHashContainer {
    Hash: string;
    Detached: any;
}
