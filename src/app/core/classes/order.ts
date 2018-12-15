import { Customer } from './customer';
import { OrderLineItem } from './order-detail';

export class Order {
  id?: string;
  order_number?:number;
  customer_id?: string;
  customer: Customer = new Customer();
  order_detail: OrderLineItem = new OrderLineItem();
  created_at?: Date;
  updated_at?: Date;
  due_date?:Date;
  shipping_mode?:String;
  notes?:String;
  advance_paid?:number;
  shipping_date?:Date;
  order_status?:String;
  shipment_cost?:number;
  order_type?:String;
  order_total?:String;
}
