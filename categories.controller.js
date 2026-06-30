import {supabase} from '../config/supabase.js';

export const getCategories = async (req, res) => {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
};
