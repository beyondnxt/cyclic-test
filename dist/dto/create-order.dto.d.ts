export declare class CreateOrderDto {
    readonly customerName: string;
    createdAt: Date;
    readonly address: string;
    readonly city: string;
    readonly country: string;
    readonly zipCode: number;
    readonly status: string;
    readonly product: product[];
}
declare class product {
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
}
export {};
