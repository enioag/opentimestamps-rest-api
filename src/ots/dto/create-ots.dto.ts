import {ApiProperty} from "@nestjs/swagger";

export class CreateOtsDto {

    @ApiProperty({
        description: 'String array of SHA-256 hashes for creating new timestamps',
        example: ["699aaaef4a32f32a53a25caad4f71d8dbf7743f66f6f401c4ab55a1cb70ecc1f", "870a977a72228936f3da58203b3392420cd1f18e77be5183036cb1b8112f1413"],
        isArray: true
    })
    Hashes: string[];
}
