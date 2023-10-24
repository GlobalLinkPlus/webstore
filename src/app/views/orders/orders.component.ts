import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {


  public ordersPending:any[]=[]
  public ordersProgress:any[]=[]
  public ordersCompleted:any[]=[]
  initChecked=false;

  selected_item;

  constructor(
    private apiService: ApiService,
    private userInfoService: UserInfoService,
    public bizService: BizService
  ) { }

  ngOnInit(): void {

    this.apiService.getOrders({"status":"Pending","customer":this.userInfoService.getCustomerId()}).subscribe(res=>{
      this.ordersPending=res;
    },err=>{});

    this.apiService.getOrders({"status":"Acknowledged","customer":this.userInfoService.getCustomerId()}).subscribe(res=>{
      this.ordersProgress=res;
    },err=>{});

    this.apiService.getOrders({"status":"Completed","customer":this.userInfoService.getCustomerId()}).subscribe(res=>{
     this.ordersCompleted=res;
    },err=>{});
  }

  getProductsTotalPrice(price,quantity){
    return Math.round((parseFloat(price))*(parseFloat(quantity))).toFixed(2)
  }


  changeBorderColor(){
    
  }
  selectItem(id){
    if(this.selected_item==id){
      this.selected_item="";
    }else{
      this.selected_item=id;
    }
  }


  toString(i:number): string{
    return i.toString()
  }
  shippingItemsFormat(items: any[]){
    if(items.length>1){
      return "("+(items.length).toString()+") Items"
    }else if(items.length==1){
      return items[0].product
    }else{
      return "(0) Items"
    }
  }

  selectAll(initChecked:boolean,items){
    if(!initChecked){
      items.forEach((f:any)=>{
        f.isSelected=true
      })
    }else{
      items.forEach((f:any)=>{
        f.isSelected=false
      })
    }
  }
}
