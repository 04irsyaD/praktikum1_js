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


// endpoint "/test" dengan method GET
app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    
    let luas = 2* (panjang * lebar + panjang * tinggi + lebar * tinggi)
    let volume = panjang * lebar * tinggi

    let response ={
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luasPermukaan: luas,
        volume: volume
        
    }

    res.json(response)
})


app.post("/kubus", (req,res) => {
    let sisi1 = Number(req.body.sisi1)
    

    let luas = 6 *sisi1*sisi1
    let volume = sisi1 * sisi1 * sisi1

    let response ={
        sisi: sisi1,
        //sisi2: sisi2,
        //sisi3: sisi3
        luasPermukaan: luas,
        volume: volume
        
    }

    res.json(response)
})

app.post("/tabung", (req,res) => {
    let tinggi = Number(req.body.tinggi)
    let jari = Number(req.body.jari)
    

    let luas = 2* 22/7*jari*(jari+tinggi)
    let volume = 22/7 * jari * jari * tinggi

    let response ={
        tinggi: tinggi,
        Jari_Jari:jari,
        luasPermukaan: luas,
        volume: volume
        
    }

    res.json(response)
})

app.post("/bola", (req,res) => {
    let jari = Number(req.body.jari)
    

    let luas = 4* 22/7*jari*jari
    let volume = 4/3 * 22/7 * jari * jari * jari

    let response ={
        tinggi: tinggi,
        Jari_Jari:jari,
        luasPermukaan: luas,
        volume: volume
        
    }

    res.json(response)
})

app.listen(8000, () =>{
    console.log("server run on port 8000")
})
