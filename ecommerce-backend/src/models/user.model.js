import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
      minLength: 6,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = function () {
  if (!process.env.JWT_SECRET) {
    console.error("FATAL ERROR: JWT_SECRET is not defined.");
  }

  const payload = {
    _id: this._id,
    email: this.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  return token;
};

export const User = mongoose.model("User", userSchema);
