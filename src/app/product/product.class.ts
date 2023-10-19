import { Vendor } from "../vendor/vendor.class";

export class Product {
    id: number = 0;
    partNbr: string = "";
    name: string = "";
    price!: number;
    unit: string = "";
    photoPath: string = "";
    vendorId: number = 0;
    vendor: Vendor | null = null;
}