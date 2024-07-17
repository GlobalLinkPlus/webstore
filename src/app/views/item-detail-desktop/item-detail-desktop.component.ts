import { Route } from '@angular/compiler/src/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { NgbRatingModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

interface Material {
  primary_material: string;
}

interface Dimension {
  name: string;
  value: string;
  dimension_class: string;
}

interface Weight {
  weight: string;
  weight_class: string;
}

interface ShippingRow {
  cube: string;
  girth: string;
  width: string;
  height: string;
  length: string;
  weight: string;
  quantity: string;
  freight_Class: string;
  dollar_per_cube: string;
}

interface Collection {
  name: string;
  status: string;
  id: string;
}

interface Partner {
  name: string;
  id: string;
}

// interface Product {
//   origin: string | null;
//   MOQ: string | null;
//   color: string | null;
//   style: string | null;
//   id: string;
//   name: string;
//   sku: string;
//   upc: string;
//   brand: string;
//   quantity: string;
//   category: string;
//   sub_category: string;
//   date_added: string;
//   dimensions: Dimension[];
//   weights: Weight;
//   rating: number;
//   material: Material | null;
//   reviews: number;
//   tax: string;
//   collection: Collection;
//   shipping: {
//       rows: ShippingRow[];
//   };
// }
interface Image {
  name: string,
  url: string,
}

interface Features {
  feature_1: string;
  feature_2: string;
  feature_3: string;
  feature_4: string;
  feature_5: string;
  customFields: any[]; // You may need to specify the type of customFields
}

interface PricingDetails {
  profit: string;
  total_cost: string;
  cost_of_good: string;
  ocean_freight: string;
  inland_freight: string;
  tariff_duty_dump: string;
  margin_markup_value: string;
  margin_markup_formula: string;
  margin_markup_percentage: string;
}

interface CategoryDetails {
  name: string;
  id: string
}
interface SubCategoryDetails {
  name: string;
  id: string
}
interface Product {
  partner_details: Partner;
  product_count: number;
  wood_type: any;
  category_details: CategoryDetails;
  sub_category_details: SubCategoryDetails;
  group: string;
  style: string;
  MOQ: string;
  origin: string;
  serial_number: string;
  asin: string;
  model_id: string;
  manufacture_id: string;
  description: string;
  minimum_order_qty: string;
  country: string;
  id: string;
  name: string;
  sku: string;
  upc: string;
  brand: string;
  quantity: string;
  category: string;
  sub_category: string;
  date_added: string;
  dimensions: Dimension[];
  weights: Weight;
  rating: number;
  reviews: number;
  tax: string;
  collection: string | Collection[]; // Collection can be an array
  image_urls: Image[];
  consigned: boolean | null;
  features: Features;
  channel: string;
  pricing: {
    return_percentage: number | null;
    warehouse_cost: string;
    retail_cost: string;
    msrp: string;
    marketplace_fee: number | null;
    global_link_fee: string;
    freight_cost: string;
    first_cost: string;
    wholesale_cost: string;
    marketing: string;
    overhead: string;
    pricing_details: PricingDetails;
  };
  assembly: {
    assembly_required: boolean;
    assembly_required_level: string;
    assembly_instructions_url: string;
  };
  lead_time: {
    supplier_lead_time: string | null;
    replacement_lead_time: string | null;
  };
  recommended: {
    recommended_use: string;
    recommended_room: string;
    recommended_location: string;
  };
  is_powered: boolean;
  power_type: string;
  number_of_pieces: string;
  seat_back_style: string;
  accent_color: string;
  fabric: {
    fabric_color: string;
    fabric_material: string;
    fabric_care_instructions: string;
    fabric_material_percentage: number | null;
  };
  theme: string;
  shape: string;
  seating_capacity: string;
  home_decor_style: string;
  age_group: string;
  size: string;
  color: string;
  finish: string;
  material: {
    primary_material: string;
    secondary_material: string;
  };
}

@Component({
  selector: 'app-item-detail-desktop',
  templateUrl: './item-detail-desktop.component.html',
  styleUrls: ['./item-detail-desktop.component.scss'],
  providers: [NgbRatingConfig]
})
export class ItemDetailDesktopComponent implements OnInit {




  category;
  subcategory;
  show_features = false;
  customer = "customer";
  business = "business";
  catalog = "catalog";
  type: string;


  item_detail = {
    retail_cost: '',
    first_cost: ''
  }

  videos = [];

  variations = [];
  selectedVariation = "";
  product: Product;
  //   brand: "",
  //   id: '1',
  //   name: "",
  //   image_urls: [],
  //   price: "",
  //   rating: "",
  //   reviews: "",
  //   sku: "",
  //   stock_status: "",
  //   product_count: 1,
  //   description: "",
  //   dimensions: [],
  //   weights: {
  //     weight: '',
  //     weight_class: ''
  //   },
  //   features: {}
  // }
  msrp = "";
  featuresArray = [];
  images: any[];


  channel_detail = {
    name: '',
    id: ''
  };

  current_image: string = "";
  current_image_index: Number = 0;
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
  attributeArray;
  autoPlay = false;
  activeIndex = 0;
  productRating = 0;

  @ViewChild("container", { static: true, read: ElementRef })
  container: ElementRef;
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

  images1 = [

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

  imageContainerStyle = {
    "padding-left": '0px',
    "padding-right": '0px'
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    public bizService: BizService,
    public userInfoService: UserInfoService,
    public rateConfig: NgbRatingConfig
  ) {
    rateConfig.max = 5
    rateConfig.readonly = !userInfoService.isLoggedIn()
  }

  setShowFeatures() {
    if (this.show_features === false) {
      this.show_features = true;
    } else {
      this.show_features = false;
    }
  }

  getImageContainerStyle() {
    return this.imageContainerStyle;
  }

  onImageLoad(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    const naturalWidth = imgElement.naturalWidth;
    const naturalHeight = imgElement.naturalHeight;
    var width = this.imageContainer.nativeElement.offsetWidth;

    const aspectRatio = naturalWidth / naturalHeight;
    const newWidth = 600 * aspectRatio;

    // imgElement.style.width = `${newWidth}px`;
    // imgElement.style.height = '600px';
    var imageContainerStyle_padding = (width - newWidth) / 2
    this.imageContainerStyle = {
      "padding-left": `${imageContainerStyle_padding}px`,
      "padding-right": `${imageContainerStyle_padding}px`
    }


  }

  onBaseComboChange(selectedBaseCombo: string): void {
    if(!selectedBaseCombo) {
      this.ngOnInit();
      return;
    };
    const variation = this.variations.find(
      (v) => v.additional_features.base_combo === selectedBaseCombo
    );
    console.log(variation);
    this.selectedVariation = variation || null;

    if (variation) {
      console.log(variation);
      this.images = [];
      this.updateProductDetails(variation);
    }
  }

  async setActiveIndex(images: any) {
    this.activeIndex = await Math.floor(Math.random() * (images.length-1));
  }
  ngOnInit() {

    // this.cardsPerPage = this.getCardsPerPage();
    // this.initializeSlider();

    this.apiService.getChannelsDetails(this.route.snapshot.params.id).subscribe(
      res => {
        this.channel_detail = res[0];
      },
      err => { }

    )

    this.apiService.getProductDetail(this.route.snapshot.params.id).subscribe(res => {
      this.product = res.product;
      this.msrp = res.msrp;
      this.item_detail = res;
      this.images = res.product.image_urls;
      this.productRating = res.product.rating || 0;
      this.product["product_count"] = 1;
      this.totalCards = 14;
      this.current_image = this.product.image_urls[0].url;
      this.setActiveIndex(this.images);
      this.featuresArray = Object.values(res.product.features).filter(value => {
        return (Array.isArray(value) && value.length > 0) || (typeof value === 'string' && value.trim() !== '');
      });;
      this.attributeArray = this.generateAttributeArray(res.product);

      this.apiService.getProductVariations(this.product.id).subscribe(
        res => {
          this.variations = res;
        },
        err => { }

      )

      // this.apiService.getProductVideo("?product=" + this.product.id).subscribe(
      //   res => {
      //     this.videos = res;
      //   },
      //   err => { }

      // )


      try {
        let p: any = this.product;
        this.category = p.category_details.name;
      } catch (err) { }
      try {
        let p: any = this.product;
        this.subcategory = p.sub_category_details.name;
      } catch (err) { }

    }, err => {
      console.log("[ERROR]>>>", err);

    });


    this.type = this.bizService.getBizType();

  }

  mapCollectionToString(data) {
    if (Array.isArray(data)) {
      const names: string[] = data.map((item) => item.name);
      return names.join(", ");
    }

    if (typeof data === "string") {
      return data
    }

  }
  async updateProductDetails(variation: any) {
    if (this.product) {
      this.msrp = variation.additional_features.details.variation_msrp.toString();
      this.images = variation.additional_features.images;
      this.product = {
        ...this.product,
        name: variation.additional_features.details.variation_product_name,
        description: variation.additional_features.details.variation_description,
        sku: variation.additional_features.details.variation_sku,
        upc: variation.additional_features.details.variation_upc,
        asin: variation.additional_features.details.variation_asin,
        image_urls: variation.additional_features.images,
        pricing: {
          ...this.product.pricing,
          retail_cost: variation.additional_features.details.variation_retail_price.toString(),
          msrp: variation.additional_features.details.variation_msrp.toString(),
        },
        weights: {
          ...this.product.weights,
          weight: variation.additional_features.shipping.lines[0].weight,
        },
      };
    }
    this.attributeArray = await this.generateAttributeArray(this.product);
    this.activeIndex = await Math.floor(Math.random() * (this.images.length-1));
    // this.activeIndex = 1;
  }

  generateAttributeArray(product: Product): { name: string, value: string, unit?: string }[] {
    const attributes = [

      { name: 'Length', value: product.dimensions.find(d => d.name === 'length')?.value || '', unit: 'in' },
      { name: 'Width', value: product.dimensions.find(d => d.name === 'width')?.value || '', unit: 'in' },
      { name: 'Height', value: product.dimensions.find(d => d.name === 'height')?.value || '', unit: 'in' },
      { name: 'Weight', value: product.weights.weight, unit: product.weights.weight_class },
      { name: 'Brand', value: product.brand },
      { name: 'Origin', value: product.origin || '' },
      { name: 'MOQ', value: product.minimum_order_qty || '' },
      { name: 'Size', value: product.size || '' },
      { name: 'Shape', value: product.shape || '' },
      { name: 'Color', value: product.color || '' },
      { name: 'Primary Material', value: product.material.primary_material || '' },
      { name: 'Style', value: product.style || '' },
      { name: 'Name', value: product.name },
      { name: 'SKU', value: product.sku },
      { name: 'UPC', value: product.upc },
      { name: 'Quantity', value: product.quantity },
      { name: 'Partner', value: product.partner_details.name }, // Add partner information if available
      { name: 'Country', value: product.country }, // Add country information if available
      { name: 'Category', value: product.category_details.name },
      { name: 'Sub Category', value: product.sub_category_details.name },
      { name: 'Rating', value: product.rating?.toString() || '' },
      { name: 'Reviews', value: product.reviews?.toString() || '' },
      { name: 'Tax', value: product.tax },
      { name: 'Date Added', value: product.date_added },
      { name: 'Collection', value: this.mapCollectionToString(product.collection) },
      { name: 'Number of Pieces', value: product.number_of_pieces },
      { name: 'Is Powered', value: product.is_powered?.toString() || '' },
      { name: 'Wood Type', value: product.wood_type },

      { name: 'Serial Number', value: product.serial_number || '' },
      { name: 'ASIN', value: product.asin || '' },
      { name: 'Model ID', value: product.model_id || '' },
      { name: 'Manufacture ID', value: product.manufacture_id || '' },
      { name: 'Group', value: product.group }, // Add group information if available
      { name: 'Taxes', value: product.tax },
      { name: 'Supplier Lead Time', value: product.lead_time.supplier_lead_time || '' },
      { name: 'Replacement Lead Time', value: product.lead_time.replacement_lead_time || '' },
      { name: 'Color', value: product.color },
      { name: 'Finish', value: product.finish },
      { name: 'Primary Material', value: product.material.primary_material },
      { name: 'Secondary Material', value: product.material.secondary_material },
      { name: 'Assembly Required', value: product.assembly.assembly_required?.toString() || '' },
      { name: 'Assembly Required Level', value: product.assembly.assembly_required_level },
      { name: 'Assembly Instructions URL', value: product.assembly.assembly_instructions_url },
      { name: 'Recommended Use', value: product.recommended.recommended_use },
      { name: 'Recommended Room', value: product.recommended.recommended_room },
      { name: 'Recommended Location', value: product.recommended.recommended_location },

    ];

    return attributes;
  }

  checkout() {
    this.router.navigateByUrl("/" + this.bizService.getBizId() + "/cart");
  }
  addProductToCart() {
    const product = { ...this.product, pricing: { ...this.item_detail, product: this.product.id } };
    this.userInfoService.addItemCart(product);
  }
  removeItemToCart() {
    this.userInfoService.removeItemCart(this.product);
  }
  reduceProductCount() {
    if (this.product.product_count > 1) {
      this.product.product_count = this.product.product_count - 1;
      if (this.userInfoService.isItemInCart(this.product)) {
        this.userInfoService.updateItemCart(this.product);
      }
    }
  }
  increaseProductCount() {
    this.product.product_count = this.product.product_count + 1;
    if (this.userInfoService.isItemInCart(this.product)) {
      this.userInfoService.updateItemCart(this.product);
    }
  }
  imageClicked(img: any, index: Number) {

    this.current_image = img.image;

    this.current_image_index = index;
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
