import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';


const country = [
  {
    id: 1,
    name: 'Nicaragua',
  },
  {
    id: 2,
    name: 'Costa Rica',
  },
  {
    id: 3,
    name: 'Panama',
  },
  {
    id: 4,
    name: 'El Salvador',
  },
  {
    id: 5,
    name: 'Honduras',
  },
  {
    id: 6,
    name: 'Mexico',
  }
];
@Injectable()
export class CountrysService {
  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  findAll() {
    return country;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
