import bcrypt from "bcrypt";
import supabase from "../config/supabase.js";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "passwords do not match" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
