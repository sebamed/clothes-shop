import { Component, OnInit, OnDestroy } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../model/product.interface';

@Component({
  selector: 'pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public carouselOne: NguCarousel;

  latestProducts: IProduct[] = [];

  constructor(private _user: UserService, private _product: ProductService) {

  }

  ngOnInit() {
    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 700,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: false,
      custom: 'banner'
    };
    this.setLatestProducts();
  }

  setLatestProducts() {
    this._product.getAllProducts().subscribe((res: IProduct[]) => {
      this.latestProducts = res;
    }, error => console.log(error),
      () => {
        if (this.latestProducts.length > 5) {
          this.latestProducts = this.latestProducts.slice(Math.max(this.latestProducts.length - 5, 1));
          console.log(this.latestProducts);
        }
      });
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }


  ngOnDestroy() {

  }
}