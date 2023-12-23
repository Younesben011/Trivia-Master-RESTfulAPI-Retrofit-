// Mongoose setUp
import mongoose from "mongoose"

const PORT =process.env.PORT|| 6001
let mongodbConnection
const connectmongodb =()=>{
    if(!mongoose.connections.length>0){
         mongoose.connect(process.env.MONGO_URL).then(()=>{
          return mongoose.connection
      })
      .catch((err)=>{console.log(`${err} did not connect`)})
  }else{
    return  mongodbConnection = mongoose.connection
  }
}

export default connectmongodb
