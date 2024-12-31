
import express from "express"
import cors from "cors"
import Connection from "./database/db.js";
import router from "./routes/route.js";
import 'dotenv/config';

const app=express();
const port= process.env.PORT || 2020;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",router);

app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
})

Connection();