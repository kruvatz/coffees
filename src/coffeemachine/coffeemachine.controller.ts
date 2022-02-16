import { Controller, Get, Param, Res, Post, Body, HttpCode, HttpStatus, Query, HttpException, NotFoundException, Patch } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto';
import { UpdateCoffeeDto } from 'src/coffees/dto/update-coffee.dto';

@Controller('coffeemachine')
export class CoffeemachineController {

    constructor(private readonly coffeesServices: CoffeesService) {}

    @Get() // coffeemachine path'ine bakıyor
    findAll(){
        return 'Coffe Machine is here!';
    }

    // @Get(':id') // coffeemachine/{dynamical} path'ine bakıyor
    // findIt(@Param() params){ // @Param('id') id: string    for specific access of parameter
    //     return `Coffe id is ${params.id}!`; // ````````
    // }

    @Get('types') // coffeemachine/types path'ine bakıyor // yukarıdaki dynamical path buranın çalışmasını engelliyor
    findTypes(){
        return 'Coffe Type is suspicious...';
    }

    @Post()  // POST /coffeemachine
    getDemand(@Body() body){
        return body;
    }

    @Post('oldstuff')  // POST /coffeemachine/oldstuff
    @HttpCode(HttpStatus.GONE)
    getOldDemand(@Body() body){
        return body;
    }

    @Post('ResTest')  // Get /coffeemachine/ResTest
    getResTest(@Res() response){
        response.status(200).send('uh oh! response is working and statuc code is 200!');  // bu kullanım, nest'in alt layerlarından besleniyor, nest ile compatibility problemleri oluşturuyor
        // kullanma!
    }

    @Get('TestQuery') // coffeemachine path'ine bakıyor
    getFiltered(@Query() queries){ 
        const {count, type} = queries;
        return `Count is: ${count} and type is: ${type}`; // http://localhost:3000/coffeemachine/TestQuery?count=1&type=aaa
    }

    @Get('TestServices')
    findAllCoffees() {
        return this.coffeesServices.findAllCoffees();
    }

    @Post('TestServices')
    InsertNewCoffee(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeesServices.InsertNewCoffee(createCoffeeDto);
    }

    @Patch('TestServices/:id')
    UpdateCoffee(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        console.log(typeof id);
        return this.coffeesServices.UpdateCoffee('' + id, updateCoffeeDto);
    }


    @Get('TestException')
    TestException() {
        throw ' X module crashed!';
        return 1;
    }
    
    @Get('TestHttpException')
    TestHttpException() {
        throw new HttpException('Bla Bla Car', HttpStatus.NOT_FOUND);
        return 1;
    }

    @Get('TestShortHandException')
    TestShortHandException() {
        throw new NotFoundException('Flu Flu');
        return 1;
    }


}

