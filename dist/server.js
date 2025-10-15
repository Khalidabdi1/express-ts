import express from "express";
import { payment } from "./Types/type.js";
let app = express();
let name = {
    name: "khalid",
    age: 23
};
let cost = 0;
let re = 0;
if (cost === payment.price) {
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