import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.utils.js";

// * USER REGISTRATION & SEND OTP**
const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if ([username, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({ email });
    if (existedUser) {
        throw new ApiError(409, "User with this email already exists");
    }

    const user = await User.create({
        username: username,
        email,
        password,
    });

    const payload = { user: {id: user._id,role: user.role} };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "60d" },(err, token) => {
        if(err) throw err;

        return res.status(201).json({
            user:{
                _id:user._id,
                username:user.username,
                email:user.email,
                role:user.role,
            },
            token,
        })
    });
});


// ** LOGIN USER (If already verified)**
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(401, "User is not registered");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid password");
    }

    const payload = { user: {id: user._id,role: user.role} };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "60d" },(err, token) => {
        if(err) throw err;

        return res.status(201).json({
            user:{
                _id:user._id,
                name:user.username,
                email:user.email,
                role:user.role,
            },
                token,
        })
    });
});

const profile = asyncHandler(async(req,res)=>{
    return res.json(req.user);
})

export {login, register, profile}