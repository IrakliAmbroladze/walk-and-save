import {supabase} from '../config/supabase.js'



export const getOffers = async (req, res) => {
  const { data, error } = await supabase.from("offers").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
};

export const getOffersById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("offers")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
};