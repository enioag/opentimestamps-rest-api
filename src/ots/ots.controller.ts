import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OtsService } from './ots.service';
import { CreateOtDto } from './dto/create-ot.dto';
import { UpdateOtDto } from './dto/update-ot.dto';

@Controller('ots')
export class OtsController {
  constructor(private readonly otsService: OtsService) {}

  @Post()
  create(@Body() createOtDto: CreateOtDto) {
    return this.otsService.create(createOtDto);
  }

}
