"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const type_1 = require("./Types/type");
let app = (0, express_1.default)();
let name = {
    name: "khalid",
    age: 23,
    email: "khalid@gamil.com"
};
let cost = 0;
let NoEmail = {
    name: "abdi",
    age: 23
};
let Noage = {
    age: 23
};
let opt = {
    name: "khalid"
};
function add(one, two) {
    return one + two;
}
let sum = (num1, num2) => {
    return num1 + num2;
};
console.log(sum(9, 9));
function sum3(num1, num2, num3) {
    return num1 + num2 + num3;
}
let obj = {
    name: "khalid"
};
obj.e = "e";
let req = {
    name: "khalid",
    age: 2,
    email: "khalid"
};
let re = 0;
console.log(type_1.payment.price);
if (cost === type_1.payment.price) {
    re = cost;
}
else {
    re = cost;
}
app.get("/", (req, res) => {
    res.send("re");
});
app.listen(4000, () => {
    console.log("is work");
});
//# sourceMappingURL=server.js.map