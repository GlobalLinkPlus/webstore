import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BizService {
  constructor() { }

  public setBizId(id: string): void {
    sessionStorage.setItem("biz_id", id);
  }

  public getBizId(): string {
    return sessionStorage.getItem("biz_id");
  }

  public setBizName(name: string): void {
    sessionStorage.setItem("name", name);
  }

  public getBizName(): string {
    return sessionStorage.getItem("name");
  }

  public getBizType(): string {
    return sessionStorage.getItem("type");
  }

  public setBizDetail(data: any): void {
    sessionStorage.setItem("company_id", data.id);
    sessionStorage.setItem("company_logo", data.company_logo);
    sessionStorage.setItem("background_color", data.background_color);
    sessionStorage.setItem("left_header", data.left_header);
    sessionStorage.setItem("right_header", data.right_header);
    sessionStorage.setItem("left_link", data.left_link);
    sessionStorage.setItem("right_link", data.right_link);
    sessionStorage.setItem("meta_title", data.meta_title);
    sessionStorage.setItem("meta_description", data.meta_description);
    sessionStorage.setItem("mid_banner_image", data.mid_banner_image);
    sessionStorage.setItem("mid_banner_link", data.mid_banner_link);
    sessionStorage.setItem("mid_banner_first_line", data.mid_banner_first_line);
    sessionStorage.setItem("mid_banner_second_line", data.mid_banner_second_line);
    sessionStorage.setItem("name", data.name);
    sessionStorage.setItem("favicon_image", data.favicon_image);
    sessionStorage.setItem("webstore_link", data.webstore_link);
    sessionStorage.setItem("company", data.company);
    sessionStorage.setItem("sliders", JSON.stringify(data.sliders));
    if(data.type==="b2b") sessionStorage.setItem("type", "business");
    if(data.type==="b2c") sessionStorage.setItem("type", "customer");
    if(data.type==="catalogue") sessionStorage.setItem("type", "catalog");
  }

  public get_company_logo(): string {
    // return "assets/img/logo.png"
    // if(sessionStorage.getItem("company_logo")==null){
    //   return "assets/img/logo.png"
    // }
    return sessionStorage.getItem("company_logo");

  }
  public set_company_logo(logo: string): void {
    sessionStorage.setItem("company_logo", logo);
  }


  public get_background_color(): string {
    return sessionStorage.getItem("background_color");

  }


  public get_company_id(): string {
    return sessionStorage.getItem("company_id");

  }

  public get_left_header(): string {
    return sessionStorage.getItem("left_header");

  }
  public get_right_header(): string {
    return sessionStorage.getItem("right_header");

  }
  public get_left_link(): string {
    return sessionStorage.getItem("left_link");

  }
  public get_right_link(): string {
    return sessionStorage.getItem("right_link");

  }
  public get_meta_title(): string {
    return sessionStorage.getItem("meta_title");

  }
  public get_meta_description(): string {
    return sessionStorage.getItem("meta_description");

  }
  public get_mid_banner_image(): string {
    return sessionStorage.getItem("mid_banner_image");

  }
  public get_mid_banner_link(): string {
    return sessionStorage.getItem("mid_banner_link");

  }
  public get_mid_banner_second_line(): string {
    return sessionStorage.getItem("mid_banner_second_line");

  }
  public get_mid_banner_first_line(): string {
    return sessionStorage.getItem("mid_banner_first_line");

  }
  public get_name(): string {
    return sessionStorage.getItem("name");

  }
  public get_favicon_image(): string {
    return sessionStorage.getItem("favicon_image");

  }
  public get_webstore_link(): string {
    return sessionStorage.getItem("webstore_link");

  }


  public get_company(): string {
    return sessionStorage.getItem("company");

  }
  public get_sliders(): any {
    return JSON.parse(sessionStorage.getItem("sliders"));
  }

  


  

}