
import User from "../models/User.js";

//Update User CArtData: /api/cart/update


export const updateCart = async(req, res) =>{
    try {
        const { cartItems} = req.body;
        const userId = req.userId;
        console.log("userId:", userId);       // 👈 add this
        console.log("cartItems:", cartItems);
        await User.findByIdAndUpdate(userId, {cartItems})
        res.json({success: true, message: "Cart Updated"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}