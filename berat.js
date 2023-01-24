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

app.post("/berat", (req,res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    
    let falue = berat / ( tinggi ** tinggi ) 

    if (falue >= 30.0) {
        aku = " kegemukan (Obesitas)";
    } else if (falue >= 25.2) {
        aku = "kelebihan berat badan .";
    }else if (falue >= 18.5) {
        aku = "Normal(ideal)."; 
    }  else {
        aku = "kekurangan berat badan";
    }

    let response ={
        tinggi: tinggi,
        berat: berat,
        beratBadan: falue,
        Status : aku
        
    }

    res.json(response)
})

app.listen(8000, () =>{
    console.log("server run on port 8000")
})