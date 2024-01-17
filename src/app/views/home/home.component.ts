import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  section_one: any = {
    name: "",
    products: []
  };
  section_two: any = {
    name: "",
    products: []
  };

  loading = false;




  // arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  partners: any[] = [
    {
      "image": "assets/img/amazon.jpg",
      "name": "Amazon"
    },
    {
      "image": "assets/img/alibaba.png",
      "name": "Alibaba"
    },
    {
      "image": "assets/img/fedex.png",
      "name": "Fedex"
    },
    {
      "image": "assets/img/f6s.jpg",
      "name": "F6s"
    }

  ];
  totalCards: number = this.partners.length;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number;
  totalPages: number;
  overflowWidth: string;
  cardWidth: string;
  containerWidth: number;
  primarySliderIndex: number;
  // @ViewChild("container", { static: true, read: ElementRef })
  // container: ElementRef;
  // @HostListener("window:resize") windowResize() {
  //   let newCardsPerPage = this.getCardsPerPage();
  //   if (newCardsPerPage != this.cardsPerPage) {
  //     this.cardsPerPage = newCardsPerPage;
  //     this.initializeSlider();
  //     if (this.currentPage > this.totalPages) {
  //       this.currentPage = this.totalPages;
  //       this.populatePagePosition();
  //     }
  //   }
  // }



  sliders: any[]
  // images=[];
  images = [

    "https://picsum.photos/id/700/900/500",

    "https://picsum.photos/id/1011/900/500",

    "https://picsum.photos/id/984/900/500"

  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  sectionCarouselResponsiveOptions: any[];
  sectionOneProducts: any[];
  sectionTwoProducts: any[];

  constructor(
    private apiService: ApiService,
    public userInfoService: UserInfoService,
    public bizService: BizService,
    config: NgbCarouselConfig
  ) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = false;
    // config.wrap=false;
  }

  ngOnInit(): void {
    // this.cardsPerPage = this.getCardsPerPage();
    // this.initializeSlider();
    // this.getTopSellerProducts();

    // this.getTopProducts();

    this.getHomeSectionItems();
    this.sliders = JSON.parse(this.bizService.get_sliders());
    this.primarySliderIndex = this.sliders.findIndex(obj => obj.primary === "True");

    this.sectionCarouselResponsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 5,
        numScroll: 5
      },
      {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '550px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    // this.sliders.forEach(item => {
    //   this.images.push(item.image);
    // });
  }
  getHomeSectionItems() {
    this.loading = true;
    this.apiService.getHomeSectionItems(this.bizService.get_company_id()).subscribe(res => {
      this.loading = false;
      this.section_one = res.section_one;
      this.section_two = res.section_two;
      this.sectionOneProducts = res.section_one.products
      this.sectionTwoProducts = res.section_two.products
    }, err => {
      this.loading = false;
      console.log("[ERROR]>>>", err);
    });
  }
  getTopProducts() {
    this.loading = true;
    this.apiService.getTopProducts().subscribe(res => {
      this.loading = false;
      this.section_one.products = res;
      this.section_one.name = "Top Products";
      this.section_two.products = res;
      this.section_two.name = "Hot line";
    }, err => {
      this.loading = false;
      console.log("[ERROR]>>>", err);
    });

  }

  formatImageUrlToCss(src) {
    return 'url(' + src + ')';

  }


  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      40}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      40}px) / ${this.cardsPerPage})`;
  }

  // getCardsPerPage() {
  //   return Math.floor(this.container.nativeElement.offsetWidth / 400);
  // }

  changePage(incrementor: any) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${40 *
      (this.currentPage - 1)}px)`;
  }

}
