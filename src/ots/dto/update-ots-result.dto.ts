import {OtsContainerDto} from "./ots-container.dto";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateOtsResultDto {
    @ApiProperty({
        description: '',
        example: [ ],
        isArray: true
    })
    OtsContainers: OtsContainerDto[];
}
