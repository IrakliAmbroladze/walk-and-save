import bcrypt from "bcrypt";
import { supabase } from "../config/supabase.js";

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .maybeSingle();
    if (error) {
      throw error;
    }
    if (data) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const { error: hashError } = await supabase.from("users").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      password_hash: hashedPassword,
    });

    if (hashError) {
      throw hashError;
    }

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
