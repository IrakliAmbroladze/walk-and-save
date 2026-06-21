import { supabase } from "../config/supabase.js";
import { emailRegex } from "../constants.js";

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

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

    if (!data) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const code = Math.floor(1000 + Math.random() * 9000);
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    const { error: updateError } = await supabase
      .from("users")
      .update({
        recovery_code: code.toString(),
        recovery_code_expires_at: expiresAt,
      })
      .eq("email", email);

    if (updateError) {
      throw updateError;
    }

    return res.json({
      message: "Recovery code sent",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
