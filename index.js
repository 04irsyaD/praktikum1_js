const express = require("express")//memmanggil library express js
const bodyParser = require("body-parser")// memanggil library body-parser
const cors = require("cors")//memanggil library cors
const app = express()//memanggil fungtion


//penggunaaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
//penggunaaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaaan cors agar end point dapat diakses oleh cross platfrom
app.use(cors())


// endpoint "/test" dengan method GET
app.get("/test",(req,res) =>{
    let response = {
        message: "ini end-point pertamaku",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)
})

app.listen(8000, () =>{
    console.log("server run on port 8000")
})

app.get("/profil/:name/:age", (req,res) => {
    let name = req.params.name
    let age = req.params.age
    let response = {
        nama:name,
        umur: age
    }

    res.json(response)
})


app.post("/bujur_sangkar", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    
    let luas = panjang * lebar
    let keliling = 2 * (panjang+lebar)

    let response ={
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    res.json(response)
})