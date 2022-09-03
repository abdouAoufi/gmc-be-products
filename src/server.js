import express from "express"; // no more require thanks to nodeJS
import { INFO } from "./utils/utils.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(userRouter);

// launch the webserver...
app.listen(INFO.port, () => {
  console.log(`Server start at =============== ${INFO.port}`);
});
