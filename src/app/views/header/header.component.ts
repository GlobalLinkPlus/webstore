import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { SearchBarService } from 'src/app/services/search-bar.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(SearchComponent) searchComponent: SearchComponent;
  searchForm: FormGroup;
  categories: any[]=[];
  sub_categories: any[]=[];
  search_input: string="";
  isSticky: boolean = false;
  products=[];
  url='/'+this.bizService.getBizId()

  user_info: any={
    name:"User",
    email:"",
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    console.log(window.pageXOffset);
    this.isSticky = window.pageYOffset >= 40;
  }


  hovered_cat_id="";
  hovered_cart_menu=false;
  hovered_user_menu=false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public  userInfoService: UserInfoService,
    private searchBarService: SearchBarService,
    public bizService: BizService,
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.user_info= this.userInfoService.getUserInfo();
    
    this.searchForm=this.formBuilder.group({
      search:[''],
    });

    this.apiService.getProducts('').subscribe(res=>{
      this.products=res;
    },err=>{
      
    });

    this.apiService.getProductCategory('').subscribe(res=>{
      if(res)
      this.categories=res.splice(0,7);
    },err=>{});
    this.apiService.getProductSubCategory('').subscribe(res=>{
      this.sub_categories=res;
    },err=>{});

  }

  changeCategory(category) {
    this.router.navigateByUrl("/" + this.bizService.getBizName() + "/products/" + category)
    this.searchComponent.color = ''
    // this.ngAfterViewInit();
    // if(this.searchComponent){
    //   this.searchComponent.ngAfterViewInit();
    // }
  }
  

  searchClick(){
    if(!(this.router.url.split('/')[2]==='products')){
      this.router.navigateByUrl(this.bizService.getBizId()+"/products");
    }
    this.searchBarService.search(this.searchForm.value.search)
    
  }

  logout(){
    this.userInfoService.signOut();
    this.router.navigateByUrl(this.bizService.getBizId());

  }


  login(){
    this.router.navigateByUrl(this.bizService.getBizId()+"/login"); 
  }

  navbarCategoryFormat(title: string){
    // return title.toLowerCase().replace(/(^|\s)\S/g,(firstLetter)=>firstLetter.toUpperCase())
    // console.log(title.charAt(0).toUpperCase() + title.slice(1).toLowerCase());
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    // if(title.length<10){
    //   return title
    // }else{

    //   if(title.indexOf("room")>-1){
    //     title=title.replace("room","rm")
    //     return this.navbarCategoryFormat(title)
    //   }

    //   if(title.indexOf("electonics")>-1){
    //     title=title.replace("electonics","elec")
    //     return this.navbarCategoryFormat(title)
    //   }
    //   if(title.indexOf("electonic")>-1){
    //     title=title.replace("electonic","elec")
    //     return this.navbarCategoryFormat(title)
    //   }
    //   if(title.indexOf("appliances")>-1){
    //     title=title.replace("appliances","appl")
    //     return this.navbarCategoryFormat(title)
    //   }

    //   if(title.indexOf("appliance")>-1){
    //     title=title.replace("appliance","appl")
    //     return this.navbarCategoryFormat(title)
    //   }


    //   if(title.indexOf("machinery")>-1){
    //     title=title.replace("machinery","mach")
    //     return this.navbarCategoryFormat(title)
    //   }
    //   title=title.substring(0, 10);
    //   var l=title.split(' ');
    //   if(l.length>1){
    //     var item =l[l.length-1];
    //     if (item.length<2){
    //       title=title.replace(" "+item,"..");
    //     }
    //     if (item.length==2 && item!="rm"){
    //       title=title.replace(item,"..");
    //     }

    //   }
    // return title.substring(0, 10);
    
  
  //}
  

  }


  onMouseEnterTopMenu(id){
    this.hovered_cat_id=id;

  }
  onMouseLeaveTopMenu(){
    this.hovered_cat_id=""
  }
  getTopMenuHoverStyle(id){
    if(id==this.hovered_cat_id){
      return {
        color:this.bizService.get_background_color()
      }
    }else{
      return {
        color:'black'
      }
    }
  }

  getCartMenuHoverStyle(){
    if(this.hovered_cart_menu){
      return {
        color:this.bizService.get_background_color()
      }
    }else{
      return {}
    }
  }

  getUserMenuHoverStyle(){
    if(this.hovered_user_menu){
      return {
        color:this.bizService.get_background_color()
      }
    }else{
      return {}
    }

}

getBackgroundStyle(){
    return {
      'background-color':this.bizService.get_background_color()
    }
 

}




  onMouseEnterCartMenu(){
    this.hovered_cart_menu=true;

  }
  onMouseLeaveCartMenu(){
    this.hovered_cart_menu=false;
  }

  onMouseEnterUserMenu(){
    this.hovered_user_menu=true;

  }
  onMouseLeaveUserMenu(){
    this.hovered_user_menu=false;
  }


}
