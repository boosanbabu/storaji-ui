import { Product } from './product';

export class OrderLineItem {
  order_id?: string;
  product_id?: string;
  amount: number = 0;
  qty?:number;
  discount_amount?:number;
  product: Product = new Product();
}
