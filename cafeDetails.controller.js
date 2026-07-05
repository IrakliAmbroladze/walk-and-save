import {supabase} from '../config/supabase.js';

export const getCafeDetails = async (req, res) => {
  const { data, error } = await supabase.from("cafe_details").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
};

export const getCafeDetailsById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("cafe_details")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
};