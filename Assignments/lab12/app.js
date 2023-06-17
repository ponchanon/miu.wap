const express = require("express");
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRoute');
const path = require('path');

const app = express();

app.enable("case sensitive routing");

app.use(express.static(path.join(__dirname)));


app.use("/products",productRouter);
app.use("/user",userRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use(function(err, req, res, next) {
  res.status(500).send('Internal Error');
});

app.listen(3000, () => console.log("Listening on 3000"));
