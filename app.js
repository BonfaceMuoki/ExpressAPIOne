const express = require("express");
const { status } = require("express/lib/response");
const authRouter = require("./routes/authRoutes");

const app = express();
const PORT = process.env.  | 4000;

//specify routes here
app.use("/api/v1/auth", authRouter);
//close specifying routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
