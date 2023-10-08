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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrderService = class OrderService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async createOrder(createrderDto) {
        console.log('createrderDto::', JSON.stringify(createrderDto));
        const newOrder = await new this.orderModel(createrderDto);
        return newOrder.save();
    }
    async getAllOrder() {
        const orderData = await this.orderModel.find();
        if (!orderData || orderData.length == 0) {
            throw new common_1.NotFoundException('Order data not found');
        }
        return orderData;
    }
    async getOrder(orderId) {
        const existingOrder = await this.orderModel.findById(orderId);
        if (!existingOrder) {
            throw new common_1.NotFoundException('Order not found');
        }
        return existingOrder;
    }
    async deleteOrder(ordrId) {
        const deleteOrder = await this.orderModel.findByIdAndDelete(ordrId);
        if (!deleteOrder) {
            throw new common_1.NotFoundException(`Order ${ordrId} not found`);
        }
        return deleteOrder;
    }
    async updateOrder(orderId, updateOrder) {
        const existingOrder = this.orderModel.findByIdAndUpdate(orderId, updateOrder, { new: true });
        if (!existingOrder) {
            throw new common_1.NotFoundException(`Student ${orderId} not found`);
        }
        return existingOrder;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('order')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrderService);
//# sourceMappingURL=order.service.js.map