import { Injectable, NotFoundException } from "@nestjs/common";
import * as RpcClient from 'dogecoind-rpc';

@Injectable()
export class DogecoreService {
  client = new RpcClient({
    host: 'pf.barexbit.com',
    port: 22555,
    user: 'ali',
    password: 'fvRDvuF9md1liVSuST-RhRikVZWY_WUYHSk3QplwZqg=',
    protocol: 'http',
  });

  async getInfo():Promise<any>{
    this.client.getInfo((err,res)=>{
      if(err){
        throw new NotFoundException(err)
      }
      return res
    })
  }

}
