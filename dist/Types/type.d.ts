export interface person {
    name: string;
    age: number;
    email: string;
}
export declare enum payment {
    price = 0,
    last_price = 10
}
export interface personWithoutEmail extends Omit<person, "email"> {
}
export interface personNOage extends Pick<person, "age"> {
}
export interface personREQ extends Required<person> {
}
export interface personOPT extends Partial<person> {
}
//# sourceMappingURL=type.d.ts.map