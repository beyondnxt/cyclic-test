import { Model } from 'mongoose';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { UpdateOrderDto } from 'src/dto/update-order.dto';
import { IOrder } from 'src/interface/order.interface';
export declare class OrderService {
    private orderModel;
    constructor(orderModel: Model<IOrder>);
    createOrder(createrderDto: CreateOrderDto): Promise<IOrder>;
    getAllOrder(): Promise<IOrder[]>;
    getOrder(orderId: string): Promise<IOrder>;
    deleteOrder(ordrId: string): Promise<IOrder>;
    updateOrder(orderId: string, updateOrder: UpdateOrderDto): Promise<IOrder>;
}
