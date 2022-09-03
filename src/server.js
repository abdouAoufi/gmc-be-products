import express from "express"; // no more require thanks to nodeJS
import { INFO } from "./utils/utils.js";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";

const app = express();

app.use(userRouter);
app.use(productRouter)

// launch the webserver...
app.listen(INFO.port, () => {
  console.log(`Server start at =============== ${INFO.port}`);
});
