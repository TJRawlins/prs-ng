import { Requestline } from "../requestline/requestline.class";
import { User } from "../user/user.class";

export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason: string = "";
    deliveryMode: string = "Pickup";
    status: string = "New";
    total!: number;
    userId!: number;
    User: User | null = null;
    requestLines: Requestline[] | null = null;
}