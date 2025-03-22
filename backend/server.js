require("dotenv").config();
const app = require("./src/app"); // ✅ Corrected path


app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
