import products from "../Models/productSchema.js";

// create product / post method

export const createProduct = async (req, res) => {
    // const {name,price} = req.body
    // const newProd = {
    //     name:name,
    //     price:price
    // }
    // await newProd.save();
 
    try {
    const newProduct = new products(req.body); // req.body and assigning in a single line
    await newProduct.save(); //saving the details in mongodb
    res
      .status(200)
      .json({ message: "Product Added Successfully", data: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
