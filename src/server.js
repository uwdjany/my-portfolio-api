import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();
app.use(bodyParser.json());
const database = process.env.myDb;
mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Well connected");
  });
const port = process.env.PORT || 4040;

app.use('/', (req,res)=>{
    res.send("welcome to my brand api")

})
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });
  app.use("/", (res,req)=>{
    res.send("welcome to our brand")
  })
}

export default app
