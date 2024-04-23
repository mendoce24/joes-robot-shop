import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buyEvent = new EventEmitter()

  getImageUrl(product: IProduct): string{
    if (!product)return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getDiscountedClasses(product: IProduct): string[]{
    if (product.discount >0){
      return ['strikethrough'];
    }
    return [''];
  }

  buyBottonClicked(product: IProduct){
    this.buyEvent.emit();
  }
}
