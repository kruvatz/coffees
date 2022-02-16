import { Module } from '@nestjs/common';
import { CoffeemachineController } from 'src/coffeemachine/coffeemachine.controller';
import { CoffeesService } from './coffees.service';

@Module({controllers: [CoffeemachineController], providers: [CoffeesService]})
export class CoffeesModule {}
