import {supabase} from "../config/supabase.js";

export const getcontactUs = async (req, res) => {   
    const { data, error } = await supabase.from("contact_us").select("*");
    if (error) {
      res.status(500).json({ error: error.message });
    }

    res.json(data);
};
