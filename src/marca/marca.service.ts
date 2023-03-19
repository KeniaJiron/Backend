import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
const db = [
  {
    id: 1,
    name: 'Adidas',
  },
  {
    id: 2,
    name: 'Nike',
  },
  {
    id: 3,
    name: 'Prada',
  },
  {
    id: 4,
    name: 'Gucci',
  }
];

@Injectable()
export class MarcaService {
  create(createMarcaDto: CreateMarcaDto) {
    return 'This action adds a new marca';
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    return `This action returns a #${id} marca`;
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return `This action updates a #${id} marca`;
  }

  remove(id: number) {
    return `This action removes a #${id} marca`;
  }
}
