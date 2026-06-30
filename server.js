import "dotenv/config";
import app from "./app.js";
import { supabase } from "./src/config/supabase.js";


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
