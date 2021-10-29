import { Controller, Get } from "@nestjs/common";
import { DogecoreService } from "./dogecore.service";

@Controller('dogecore')
export class DogecoreController {
  constructor(
    private readonly dogecoreService:DogecoreService,
  ) {
  }

  @Get('info')
  async getInfo():Promise<any>{
    return this.dogecoreService.getInfo();
  }
}
