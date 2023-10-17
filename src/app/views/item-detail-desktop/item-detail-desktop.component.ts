import { Route } from '@angular/compiler/src/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-item-detail-desktop',
  templateUrl: './item-detail-desktop.component.html',
  styleUrls: ['./item-detail-desktop.component.scss']
})
export class ItemDetailDesktopComponent implements OnInit {
  



  category;
  subcategory;

  
  item_detail={
    retail_cost:'',
    first_cost:''
  }

  videos=[];

  variations=[];
  product= {
    id:'1',
    name: "",
    images: [],
    price: "",
    rating: "",
    reviews: "",
    sku:"",
    stock_status:"",
    product_count:1,
    description:"",
    dimensions:[],
    weights:{
      weight:'',
      weight_class:''
    }
  }
  msrp="";


  channel_detail={
      name:'',
      id:''
  };
  
  current_image: string="";
  current_image_index: Number=0;
  totalCards: number = 14;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number;
  totalPages: number;
  overflowWidth: string;
  cardWidth: string;
  containerWidth: number;
  @ViewChild("imageContainer", { static: true, read: ElementRef })
  imageContainer: ElementRef;

  @ViewChild("container", { static: true, read: ElementRef })
  container: ElementRef;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }

  imageContainerStyle={
    "padding-left":'0px',
    "padding-right":'0px'
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    public bizService: BizService,
    public userInfoService: UserInfoService,
    ){

  }
  getImageContainerStyle(){
    return this.imageContainerStyle;
  }
  
  onImageLoad(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    const naturalWidth = imgElement.naturalWidth;
    const naturalHeight = imgElement.naturalHeight;
    var width= this.imageContainer.nativeElement.offsetWidth;
   
      const aspectRatio = naturalWidth / naturalHeight;
      const newWidth = 600 * aspectRatio;

      // imgElement.style.width = `${newWidth}px`;
      // imgElement.style.height = '600px';
      var imageContainerStyle_padding=(width-newWidth)/2
      this.imageContainerStyle={
        "padding-left":`${imageContainerStyle_padding}px`,
        "padding-right":`${imageContainerStyle_padding}px`
      }
    

  }
  ngOnInit() {
    


 
   
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
   
    this.apiService.getChannelsDetails(this.route.snapshot.params.id).subscribe(
      res=>{
        this.channel_detail=res[0];
      },
      err=>{}

    )

    this.apiService.getProductDetail(this.route.snapshot.params.id).subscribe(res=>{
      this.product=res.product;
      this.msrp=res.msrp;
      this.item_detail=res;
      this.product["product_count"]=1;
      this.totalCards= 14;
      this.current_image=this.product.images[0].image;
   

      this.apiService.getVariations("?product="+this.product.id).subscribe(
        res=>{
          this.variations=res;
        },
        err=>{}

      )

      this.apiService.getProductVideo("?product="+this.product.id).subscribe(
        res=>{
          this.videos=res;
        },
        err=>{}

      )


      try{
        let p: any=this.product;
          this.category=p.category_details.name;
      }catch(err){}
      try{
        let p: any=this.product;
        this.subcategory=p.sub_category_details.name;
    }catch(err){}

    },err=>{
      console.log("[ERROR]>>>",err);

    });
    

  
    
  }

  checkout(){
    this.router.navigateByUrl("/"+this.bizService.getBizId()+"/cart");
  }
  addItemToCart(){
    var p=this.product;
    var pricing=this.item_detail;
    pricing["product"]=p.id
    p["pricing"]=pricing;
    this.userInfoService.addItemCart(p);       
  }
  removeItemToCart(){
    this.userInfoService.removeItemCart(this.product);  
  }
  reduceProductCount(){
    if(this.product.product_count>1){
      this.product.product_count=this.product.product_count-1;
      if(this.userInfoService.isItemInCart(this.product)){
        this.userInfoService.updateItemCart(this.product);
      }
    }
  }
  increaseProductCount(){
      this.product.product_count=this.product.product_count+1;
      if(this.userInfoService.isItemInCart(this.product)){
        this.userInfoService.updateItemCart(this.product);
      }
  }
  imageClicked(img: any,index: Number){  

    this.current_image=img.image;
    
    this.current_image_index=index;
  }
  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 100);
  }

  changePage(incrementor: any) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }
    
}
