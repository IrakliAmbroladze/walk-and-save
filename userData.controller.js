import {supabase} from '../config/supabase.js';

export const getUserData = async (req, res) => {
  const { data, error } = await supabase.from("user_data").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
};

export const getUserDataById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("user_data")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
};