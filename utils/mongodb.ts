import { MongoClient } from "mongodb";
// MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://tmohlatlole@gmail.com:${encodeURIComponent(
  "d_P&MUHY7z-zQ6?*"
)}@portfolio.jjxlm.mongodb.net/portfolio?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err: any) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// module.exports = {
//   client
// }