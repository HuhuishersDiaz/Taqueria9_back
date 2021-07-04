import { Body, Controller, Post, Res, Get, HttpStatus,NotFoundException, Param } from '@nestjs/common';
import { TransfService } from './transf.service';
import { TransfDTO } from './dto/transf.dto';

@Controller('transf')
export class TransfController {
    constructor(private transfer:TransfService){}

    @Post('/create')
    async addTransfer(@Res() res, @Body() TransfDTO: TransfDTO){
        const lists = await this.transfer.create(TransfDTO);
        return res.status(HttpStatus.OK).json({
            message: "Post has been created successfully",
            lists
        });
    }

    @Get('/info/:id')
    async GetTransferInfo(@Res() Res, @Param('id') id:string){
        const transfer = await this.transfer.getInfo(id);
        if(!transfer) throw new NotFoundException('Transfer info not found !!!.');
        return Res.status(HttpStatus.OK).json(transfer);
    }

}
