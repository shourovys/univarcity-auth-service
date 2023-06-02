import mongoose from "mongoose";
import app from "./app";
import confirm from "./config/index";

const port = 3000;

async function main() {
  try {
    await mongoose.connect(confirm.database_url as string);
    console.log("DB connect successful");

    app.listen(confirm.port, () => {
      console.log(`Application listening on port ${confirm.port}`);
    });
  } catch (error) {
    console.log("DB not connected", error);
  }
}
main();
