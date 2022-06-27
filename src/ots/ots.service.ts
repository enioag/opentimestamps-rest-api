import { Injectable } from '@nestjs/common';
import { CreateOtDto } from './dto/create-ot.dto';
import { UpdateOtDto } from './dto/update-ot.dto';

@Injectable()
export class OtsService {
  create(createOtDto: CreateOtDto) {
    return 'This action adds a new ot';
  }

  update(id: number, updateOtDto: UpdateOtDto) {
    return `This action updates a #${id} ot`;
  }

}
