"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const create_order_dto_1 = require("../dto/create-order.dto");
const update_order_dto_1 = require("../dto/update-order.dto");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async createOrder(response, createOrdertDto) {
        try {
            const newOrder = await this.orderService.createOrder(createOrdertDto);
            return response
                .status(common_1.HttpStatus.CREATED)
                .json({ message: 'Order has been created successfully', newOrder });
        }
        catch {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error Order not created',
                error: 'Bad Request',
            });
        }
    }
    async getOrder(response) {
        try {
            const orderData = await this.orderService.getAllOrder();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Get all Order',
                orderData,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async updateOrder(response, ordertId, updateOrderDto) {
        try {
            const existingOrder = await this.orderService.updateOrder(ordertId, updateOrderDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Order Detail updated',
                existingOrder,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async deleteOrder(response, orderId) {
        try {
            const deleteOrder = await this.orderService.deleteOrder(orderId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Student deleted',
                deleteOrder,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getOrderById(response, orderId) {
        try {
            const existingOrder = await this.orderService.getOrder(orderId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Oder detail',
                existingOrder,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrder", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_order_dto_1.UpdateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrder", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "deleteOrder", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderById", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map