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

//get all products

export const getAllProducts = async (req, res) => {
  try {
    const getProduct = await products.find();
    res
      .status(200)
      .json({ message: "Products Retrieved Successfully", data: getProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get product by id

export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const productDetail = await products.findById(productId);
    if (!productDetail) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res
      .status(200)
      .json({ message: "product retrieved successfully", data: productDetail });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update method

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, price } = req.body;
    const result = await products.findByIdAndUpdate(
      { _id: productId },
      { name, price },
      { new: true }
    );
    if (result.matchedCount == 0) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res
      .status(200)
      .json({ message: "Product Updated Successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//delete method

export const deleteProduct = async(req,res)=>{
    try {
        const productId = req.params.id;
        const result = await products.findByIdAndDelete({_id: productId})
        if(!result){
            return res.status(404).json({ message: "Product Not Found" }); 
        }
        const product = await products.find()
        res.status(200).json({message:"Product Deleted Successfully",data:product})
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}