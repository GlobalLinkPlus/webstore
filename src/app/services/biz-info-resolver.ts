import {ApiService} from "./api.service";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from "@angular/core";
import { BizService } from "./biz.service";

@Injectable({ providedIn: 'root' })
export class BizInfoResolver implements Resolve<any> {
   constructor(
       public apiService: ApiService,
       public bizService: BizService

    ) { }

   resolve(route: ActivatedRouteSnapshot) {
      // if(this.bizService.get_company_id()==null){
         return this.apiService.getBizInfo(route.params.biz_id)
      // }else{
      //    return true
      // }
   }
}