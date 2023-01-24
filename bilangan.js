const express= require("express")//memmanggil library express js
const bodyParser = require("body-parser")// memanggil library body-parser
const cors = require("cors")//memanggil library cors
const app = express()


//penggunaaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
//penggunaaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaaan cors agar end point dapat diakses oleh cross platfrom
app.use(cors())


app.post("/binary-to-decimal", (req, res) => {
    const binary = req.body.binary;
    let decimal = parseInt(binary, 2);
    let response = {
      binary: binary,
      decimal: decimal,
    };
    res.json(response);
  });

  app.listen(8000, () =>{
    console.log("server run on port 8000")
})
