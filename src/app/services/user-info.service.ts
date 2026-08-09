import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
 constructor() { }

  public signOut(): void {
    sessionStorage.removeItem("user_info");
  }


  public saveUserInfo(user: any): void {
    sessionStorage.setItem("user_info", JSON.stringify(user));
  }


  public getUserId(): string {
    const user = sessionStorage.getItem("user_info");
    if (user) {
      var info=JSON.parse(user);
       return  info.id
    }

  }

  public getCustomerId(): string {
    const user = sessionStorage.getItem("user_info");
    if (user) {
      var info=JSON.parse(user);
       return  info.customer
    }
  }

  

  public getUserInfo(): any {
    const user = sessionStorage.getItem("user_info");
    if (user) {
      return JSON.parse(user);
    }

    return {name:"",email:""};
  }
  public isLoggedIn(): boolean {
    const user = sessionStorage.getItem("user_info");
    if (user) {
      var user_data= JSON.parse(user);
      if(user_data["token"]){
        return true;
      }else{
        return false;
      }
    }

    return false;
  }

  public addItemCart(item: any): void {
    const cart = sessionStorage.getItem("cart");
    if (cart) {
       let items: any[]=JSON.parse(cart);    
       items.push(item);
       sessionStorage.setItem("cart",JSON.stringify(items));

    }else{
      let items: any[]=[];
      items.push(item);
      sessionStorage.setItem("cart",JSON.stringify(items));

    }
  }

  public getCartItems(): any {
    const cart = sessionStorage.getItem("cart");
    if (cart) {
       return JSON.parse(cart);
    }else{
      return []
    }
  }

  public clearCartItems() {
    sessionStorage.setItem("cart","[]");
 
  }
  public updateItemCart(item: any): void {
    const cart = sessionStorage.getItem("cart");
    if (cart) {
       let temp: any[]=JSON.parse(cart);
       var items: any[]=[]
       for(var i=0;i<temp.length;i++){
         if(temp[i].id==item.id){
           items.push(item);
         }else{
           items.push(temp[i])
         }
       }    
       sessionStorage.setItem("cart",JSON.stringify(items));

    }else{
      let items: any[]=[];
      items.push(item);
      sessionStorage.setItem("cart",JSON.stringify(items));

    }
  }
  public isItemInCart(item: any): boolean {
    const cart = sessionStorage.getItem("cart");
    if (cart) {
       let items: any[]=JSON.parse(cart);
       for(var i=0;i<items.length;i++){
         if(items[i].id==item?.id){
           return true;
         }
       }       
     return false;
    }else{
      return  false;
    }
  }


  public removeItemCart(item: any): void {
    const cart = sessionStorage.getItem("cart");
    if (cart) {
      let temp: any[]=JSON.parse(cart);
      var items: any[]=[]
      for(var i=0;i<temp.length;i++){
        if(temp[i].id==item.id){
        }else{
          items.push(temp[i])
        }
      }  
       sessionStorage.setItem("cart",JSON.stringify(items));

    }else{
      let items: any[]=[];
      sessionStorage.setItem("cart",JSON.stringify(items));

    }
  }

}