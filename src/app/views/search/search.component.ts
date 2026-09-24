import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  products = [];
  categories = [];
  collections = [];
  nextPageUrl: string | null = null;
  loadingMore = false;
  sub_category = ''
  type='';
  category = ''
  customer = "customer";
  business = "business";
  catalog = "catalog";
  color = ''
  colors = [
    { label: 'Grey', value: 'Grey', selected: false },
    { label: 'Brown', value: 'Brown', selected: false },
    { label: 'Black', value: 'Black', selected: false },
    { label: 'White', value: 'White', selected: false },
    { label: 'Blue', value: 'Blue', selected: false },
    { label: 'Green', value: 'Green', selected: false },
    { label: 'Pink', value: 'Pink', selected: false },
    { label: 'Yellow', value: 'Yellow', selected: false },
    { label: 'Gold', value: 'Gold', selected: false },
    { label: 'Red', value: 'Red', selected: false },
    { label: 'Orange', value: 'Orange', selected: false },
    { label: 'Silver', value: 'Silver', selected: false },
    { label: 'Cream', value: 'Cream', selected: false },
    { label: 'Purple', value: 'Purple', selected: false },
  ];
  private routeSubscription: Subscription;
  // latest product list request; cancelled when a newer one starts so a slow, older response can't overwrite it
  private productsSub: Subscription;
  // last unfiltered product list; static so it survives the component being re-created on navigation
  private static unfilteredCache: { key: string; results: any[]; next: string } | null = null;



  constructor(
    private apiService: ApiService,
    public userInfoService: UserInfoService,
    private bizService: BizService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    this.initialize()
    this.type = this.bizService.getBizType();
    this.routeSubscription = this.route.params.subscribe(() => {
      this.searchFilter();
    });
  }

  searchFilter() {
    let partner_id = this.route.snapshot.params.partner_id;
    let collection = this.route.snapshot.params.collection;
    let category = this.route.snapshot.params.category;
    let subcategory = this.route.snapshot.params.subcategory;

    if (subcategory != null) {
      this.sub_category = subcategory;
      this.category = category;
      this.searchProducts("sub_category=" + subcategory)
    } else if (category != null) {
      this.sub_category = '';
      this.category = category;
      this.searchProducts("category=" + category)
    } else if (partner_id != null) {
      this.sub_category = '';
      this.category = '';
      this.searchProducts("partner=" + partner_id)
    } else if (collection != null) {
      this.sub_category = '';
      this.category = '';
      this.searchProducts("collection=" + collection)
    } else {
      this.getProducts();
    }
  }

  clearFilters() {
    this.color = '';
    this.colors.forEach(option => option.selected = false);
    this.category = '';
    this.sub_category = '';
    const target = "/" + this.bizService.getBizName() + "/products";
    if (this.router.url.split('?')[0] === target) {
      // already on /products: navigation is a no-op and the route subscription won't fire
      this.getProducts();
    } else {
      // navigating changes the route params, and the route subscription in ngOnInit
      // calls searchFilter() -> getProducts(); fetching here too would request twice
      this.router.navigateByUrl(target);
    }
  }

  changeCategory(category) {
    this.color = ''
    this.router.navigateByUrl("/" + this.bizService.getBizName() + "/products/" + category)
    // this.ngAfterViewInit();
  }

  selectProduct(product) {
    const url = `/${this.bizService.getBizName()}/product/${product}`;

    // Navigate to the product URL
    this.router.navigateByUrl(url);
  }

  // selectProduct(product){
  //   // console.log("/" + this.bizService.getBizName() + "/product/" + product);
  //   this.router.navigateByUrl("/" + this.bizService.getBizName() + "/product/" + product)
  //   // const navigationEndSubscription = this.router.events
  //   //   .pipe(filter((event) => event instanceof NavigationEnd), take(1))
  //   //   .subscribe((event: NavigationEnd) => {

  //   //     // Call your method when the URL changes
  //   //     // this.ngAfterViewInit();
  //   //     this.selectProduct(product);
  //   //     if (navigationEndSubscription) {
  //   //       navigationEndSubscription.unsubscribe();
  //   //     }
  //   //   });
  //   // this.ngAfterViewInit();
  // }

  setColor(color) {
    this.colors.forEach(option => {
      if (option !== color) {
        option.selected = false;
      }
    });
    this.color = color.value;
    if (!color.selected) this.color = "";

    // if(!this.color)return

    let partner_id = this.route.snapshot.params.partner_id;
    let collection = this.route.snapshot.params.collection;
    let category = this.route.snapshot.params.category;
    let subcategory = this.route.snapshot.params.subcategory;

    if (!category) {
      this.searchProducts("");
      return;
    }

    if (subcategory != null) {
      this.sub_category = subcategory;
      this.category = category;
      this.searchProducts("sub_category=" + subcategory)
    } else if (category != null) {
      this.sub_category = '';
      this.category = category;
      this.searchProducts("category=" + category)
    } else if (partner_id != null) {
      this.sub_category = '';
      this.category = '';
      this.searchProducts("partner=" + partner_id)
    } else if (collection != null) {
      this.sub_category = '';
      this.category = '';
      this.searchProducts("collection=" + collection)
    } else {
      this.getProducts();
    }
  }

  initialize() {
    this.apiService.getProductCategory('').subscribe(
      res => {
        this.categories = res;
      },
      err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load categories' });
      }
    )
    this.apiService.getCollections('').subscribe(
      res => {
        this.collections = res;

      },
      err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load collections' });
      }
    )
  }

  // ngAfterViewInit() {
  //   // Subscribe to NavigationEnd event to ensure navigation is complete
  //   this.router.events
  //     .pipe(
  //       filter((event) => event instanceof NavigationEnd),
  //       take(1) // Take only the first NavigationEnd event
  //     )
  //     .subscribe(() => {
  //       // Execute logic after navigation is complete
  //       this.searchFilter();
  //       this.cdr.detectChanges();
  //     });
  // }

  getProducts() {
    // let q;
    // this.color? q='&?color=' + this.color:'';
    const channel = this.bizService.get_channel();
    const applyChannel = (results: any[]) =>
      this.type === this.business && channel ? results.filter(product => product.channel === channel) : results;
    const cacheKey = this.bizService.get_company_id() + '|' + channel;

    // stale-while-revalidate: show the last unfiltered list right away, then refresh it
    const cached = SearchComponent.unfilteredCache;
    if (cached && cached.key === cacheKey) {
      this.products = applyChannel(cached.results);
      this.nextPageUrl = cached.next;
    }

    this.productsSub?.unsubscribe();
    this.productsSub = this.apiService.getProducts('').subscribe(res => {
      SearchComponent.unfilteredCache = { key: cacheKey, results: res.results, next: res.next };
      this.products = applyChannel(res.results);
      this.nextPageUrl = res.next;
    }, err => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load products' });
    });
  }
  searchProducts(q: string) {
    if (this.color && q) q = 'color=' + this.color + '&' + q;
    if (this.color && !q) q = 'color=' + this.color;

    // this.color ? q = 'color=' + this.color + '&' + q : q;

    this.productsSub?.unsubscribe();
    this.productsSub = this.apiService.getProducts('?' + q).subscribe(res => {
      this.products = res.results;
      this.nextPageUrl = res.next;
    }, err => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load products' });
    })
  }

  loadMore() {
    if (!this.nextPageUrl || this.loadingMore) return;

    this.loadingMore = true;
    this.apiService.getProductsPage(this.nextPageUrl).subscribe(res => {
      this.loadingMore = false;
      let newProducts = res.results;
      const channel = this.bizService.get_channel();
      if (this.type === this.business && channel) {
        newProducts = newProducts.filter(product => product.channel === channel);
      }
      this.products = [...this.products, ...newProducts];
      this.nextPageUrl = res.next;
    }, err => {
      this.loadingMore = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load more products' });
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    this.productsSub?.unsubscribe();
  }

}
