import express from "express";
let app = express();
app.get("/", (req, res) => {
    res.send("hello world");
});
app.listen(4000, () => {
    console.log("is work");
});
//# sourceMappingURL=server.js.map