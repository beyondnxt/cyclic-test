import { OrderService } from './order.service';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { UpdateOrderDto } from 'src/dto/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(response: any, createOrdertDto: CreateOrderDto): Promise<any>;
    getOrder(response: any): Promise<any>;
    updateOrder(response: any, ordertId: string, updateOrderDto: UpdateOrderDto): Promise<any>;
    deleteOrder(response: any, orderId: string): Promise<any>;
    getOrderById(response: any, orderId: string): Promise<any>;
}
