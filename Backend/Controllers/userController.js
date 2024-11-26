import { User } from "../models/userModal.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ message: "All feilds are required" });
    }
    if (password != confirmPassword) {
      return res.status(400).json({
        message: "password do not match",
      });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await User.create({
      fullName,
      username,
      password: hashPassword,
      profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
      gender,
    });

    return res.status(201).json({
      message: "Account Created sucessfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        message: "incorrect username and password",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log(isPasswordMatch, "isPasswordMatch");

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "incorrect username and password",
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        id: user._id,
        username: user.username,
        fullname: user.fullName,
        profilePhoto: user.profilePhoto,
      });
  } catch (error) {
    console.log(error, "error");
  }
};

export const logout = (req, res) => {
  try {
    return res.status(201).cookie("token", "", { maxAge: 0 }).json({
      message: "Logout successfullly",
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getOtherUser = async (req, res)=> {
try {
  const loggdInId = req.id
  const othetUser = await User.find({_id : {$ne :loggdInId }}).select("-password");
  return res.status(201).json(othetUser)
} catch (error) {
  console.log(error, "error");
}
}
