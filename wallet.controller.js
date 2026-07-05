import {supabase} from '../config/supabase.js';

export const getWallet = async (req, res) => {
  const { data, error } = await supabase.from("my_wallet").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
};

export const getWalletById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("my_wallet")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
};