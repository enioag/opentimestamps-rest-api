import {Body, Controller, Post} from '@nestjs/common';
import {OtsService} from './ots.service';
import {CreateOtsDto} from './dto/create-ots.dto';
import {CreateOtsResultDto} from "./dto/create-ots-result.dto";
import {ApiParam, ApiResponse} from "@nestjs/swagger";
import {UpdateOtsDto} from "./dto/update-ots.dto";
import {UpdateOtsResultDto} from "./dto/update-ots-result.dto";

@Controller('ots')
export class OtsController {
    constructor(private readonly otsService: OtsService) {
    }

    @Post('create')
    @ApiResponse({status: 201, type: CreateOtsResultDto})
    async create(@Body() createOtsDto: CreateOtsDto): Promise<CreateOtsResultDto> {
        return this.otsService.create(createOtsDto);
    }

    @Post('update')
    @ApiResponse({status: 201, type: UpdateOtsResultDto})
    async update(@Body() updateOtsDto: UpdateOtsDto): Promise<UpdateOtsResultDto> {
        return this.otsService.update(updateOtsDto);
    }

}
