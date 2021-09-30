import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4000;
const listening = () => { console.log(`✅ Server listening on port https://localhost:${PORT} 🚀`) };
app.listen(PORT, listening);
