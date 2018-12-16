import { Customer } from './customer';
import { OrderLineItem } from './order-detail';

export class Order {
  id?: string;
  customer: String;
  order_detail: OrderLineItem[] =[];
  created_at?: Date;
  updated_at?: Date;
  due_date?:Date;
  shipping_mode?:String;
  notes?:String;
  advance_paid?:number;
  shipping_date?:Date;
  status?:String;
  shipment_cost?:number;
  order_type?:String;
}
