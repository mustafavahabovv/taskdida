import mongoose from "mongoose";



const productSchema = mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
}, {timestamp:true})



const ProductModel = mongoose.model("Aranoz", productSchema)

export default ProductModel