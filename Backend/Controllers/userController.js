import { User } from "../models/userModal.js";
import bcrypt from "bcryptjs";

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
    const  maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const  femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = await User.create({
      fullName,
      username,
      password: hashPassword,
      profilePhoto : gender === "male" ? maleProfilePhoto : femaleProfilePhoto, 
      gender,
    });

    return res.status(201).json({
        message :"Account Created sucessfully",
        success : true 
    })
  } catch (error) {
    console.log(error);
    
  }
};
