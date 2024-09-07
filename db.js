import mongoose from "mongoose";

function dbConnect(){
    mongoose.connect('mongodb://localhost:27017')
    .then(res=>console.log('Database Connected .....'))
    .catch(error=>console.log('Something error while connecting database....'))
}
export default dbConnect