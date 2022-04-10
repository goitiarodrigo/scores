import mongoose from "mongoose"

mongoose.connect(process.env.MONGODB!, )
.then(()=> console.log('Database is connected'))
.catch((error) => console.log(error.message))