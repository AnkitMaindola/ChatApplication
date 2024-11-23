import mongoose from "moongoose";

const connectDb = async ()=>{
    await mongoose.connect(process.env.MONGO_url).then(()=>{
        console.log("database conneced");
        
    }).catch((err)=>{
        console.log(err,"error");
        
    })
}

export default connectDb;