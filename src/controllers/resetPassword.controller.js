import { supabase } from "../config/supabase.js";
import bcrypt from "bcrypt";
import { emailRegex } from "../constants.js";

export const resetPassword = async (req, res) => {
  try {
    const { email, code, newPassword } = req.body;

    if (!code || !newPassword) {
      return res.status(400).json({
        message: "Code and new password are required",
      });
    }
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

    if (data.recovery_code !== code.toString()) {
      return res.status(404).json({ message: "not valid code" });
    }

    const expiryString = data.recovery_code_expires_at;
    const expiryDate =
      expiryString && !expiryString.endsWith("Z")
        ? new Date(`${expiryString}Z`)
        : new Date(expiryString);

    const timeHasExpired = !expiryString || Date.now() > expiryDate.getTime();

    if (timeHasExpired) {
      return res.status(400).json({ message: "time has expired" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const { error: updateError } = await supabase
      .from("users")
      .update({
        password_hash: hashedPassword,
        recovery_code: null,
        recovery_code_expires_at: null,
      })
      .eq("email", email);

    if (updateError) {
      throw updateError;
    }

    return res.json({
      message: "Password reset successful",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
