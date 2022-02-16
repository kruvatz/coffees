import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private uid: number = 2;
    private coffees: Coffee[] = [ 
        {
            id: 1,
            name: 'Moccha',
            brand: 'Starbucks',
            flavors: ['vanilla']
        },
     ];

     private incrementUID() {
        this.uid += 1;
     }

     findAllCoffees() {
         return this.coffees;
     }

     InsertNewCoffee(body: CreateCoffeeDto) {
        var cof = new Coffee();
        cof.brand = body.brand;
        cof.flavors = body.flavors;
        cof.name = body.name;
        cof.id = this.uid;
        this.coffees.push(cof);

        this.incrementUID();
     }

     UpdateCoffee(id: string, body: UpdateCoffeeDto) {
         this.coffees.forEach(cof => {
             if(cof.id === Number(id)){
                 cof.brand = body.name;
                 cof.flavors = body.flavors;
                 cof.name = body.name;
             }
         });
     }

}
