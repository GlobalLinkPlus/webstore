import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { SearchBarService } from 'src/app/services/search-bar.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products=[];
  categories=[];
  collections=[];
  sub_category=''
  category=''



  constructor(
    private apiService: ApiService,
    public  userInfoService: UserInfoService,
    private searchBarService: SearchBarService,
    private bizService: BizService,
    private route: ActivatedRoute
    ) {
    this.searchBarService.onSearch.subscribe({
      next: (query: string) => {

        this.searchProducts("?search="+query);
      }
    })
    }

    ngOnInit(): void {
      this.initialize()
      let partner_id=this.route.snapshot.params.partner_id;
      let collection=this.route.snapshot.params.collection;
      let category=this.route.snapshot.params.category;
      let subcategory=this.route.snapshot.params.subcategory;
      if(subcategory !=null){
        this.sub_category=subcategory;
        this.category=category;        
        this.searchProducts("?product__sub_category__name="+subcategory)
      }else if(category !=null){
        this.sub_category='';
        this.category=category;   
        this.searchProducts("?product__category__name="+category)
      }else if(partner_id !=null){
        this.sub_category='';
        this.category=''; 
        this.searchProducts("?partner="+partner_id)
      }else if(collection !=null){
        this.sub_category='';
        this.category=''; 
        this.searchProducts("?product__collection__name="+collection)
      }else{
        this.getProducts();
      }

    }
    initialize(){
      this.apiService.getProductCategory('').subscribe(
        res=>{
          this.categories=res;

        },
        err=>{}
      )
      this.apiService.getCollections('').subscribe(
        res=>{
          this.collections=res;

        },
        err=>{}
      )
    }


    getProducts(){
      this.apiService.getProducts('').subscribe(res=>{
        this.products=res;
      },err=>{});
    }
    searchProducts(q: string){
      
      this.apiService.getProducts(q).subscribe(res=>{
        this.products=res;
      },err=>{})
    }


}
