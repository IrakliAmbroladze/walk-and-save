import "dotenv/config";
import app from "./app.js";
import { supabase } from "./src/config/supabase.js";

app.get("/api/categories", async (req, res) => {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
});

app.get("/api/offers", async (req, res) => {
  const { data, error } = await supabase.from("offers").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
});

app.get("/api/offers/:id", async (req, res) => {
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
});

app.get("/api/cafe-details", async (req, res) => {
  const { data, error } = await supabase.from("cafe_details").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
});

app.get("/api/cafe-details/:id", async (req, res) => {
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
});

app.get("/api/user-info", async (req, res) => {
  const { data, error } = await supabase.from("user_info").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
});

app.get("/api/user-info/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("user_info")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
});

app.get("/api/my-wallet", async (req, res) => {
  const { data, error } = await supabase.from("my_wallet").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
  }
  res.json(data);
});

app.get("/api/my-wallet/:id", async (req, res) => {
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
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
