import { Component, Input, OnInit } from '@angular/core';
import { BizService } from 'src/app/services/biz.service';



@Component({
  selector: 'app-star-rate-bar',
  templateUrl: './star-rate-bar.component.html',
  styleUrls: ['./star-rate-bar.component.scss']
})
export class StarRateBarComponent implements OnInit{
  @Input() color: string="#f68b1e";
  @Input() rate: Number=0;
  @Input() stars: Number=5;
  @Input() label: string="";
  @Input() size: Number=24;
  
  ratedata: any[]=[{filled:false},{filled:false},{filled:false},{filled:false},{filled:false}]
  constructor(private bizService: BizService) {
    this.color=this.bizService.get_background_color();
   }
  ngOnInit(): void {
    this.ratedata=[]
    for (var i=0;i<this.stars;i++){
      if(i<this.rate){
      this.ratedata.push({filled:true})
      }else{
        this.ratedata.push({filled:false})
      }
    }
    
  }
  fillStyle(): any{
    return{
      "font-size":this.size.toString()+"px",
      "color":this.bizService.get_background_color()
  }

}
  emptyStyle(): any{
    return{
      "font-size": this.size.toString()+"px"
  }
}

}
