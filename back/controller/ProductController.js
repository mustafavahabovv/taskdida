import ProductModel from "../model/ProductModel.js";

const getProduct = async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.json(products)
    } catch (error) {
        res.json(error)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id)
        res.json(product)
    } catch (error) {
        res.json(error)
    }
}

const postProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body)
        res.json(product)
    } catch (error) {
        res.json(error)
    }
}

export { getProduct, postProduct, deleteProduct };