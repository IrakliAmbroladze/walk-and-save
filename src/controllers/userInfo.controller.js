import { supabase } from "../config/supabase.js";

export const userInfo = async (req, res) => {
  try {
    const { userId } = req.body;

    const { data, error } = await supabase
      .from("user_info")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();
    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(401).json({
        message: "no data",
      });
    }

    return res.status(200).json({
      message: "success",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
