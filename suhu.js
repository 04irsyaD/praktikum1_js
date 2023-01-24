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

app.get("/convert/celcius/:number",(req,res) =>{
    let  number = req.params.number

    let response = {
        Celcius : number,
        Reamur : 4/5* number,
        Fahrenheit :9/5 *number + 32,
        kelvin :  number / number * number + 273,
        kelvinbug : number / 1 + 273


    }
    res.json(response)
})

app.get("/convert/Reamur/:number",(req,res) =>{
    let  number = req.params.number

    let response = {
        Reamur : number,
        Celcius: 5/4 * number, 
        Fahrenheit : (number *9/4)+ 32,
        kelvin : (number+5/4) + 32


    }
    res.json(response)
})

app.get("/convert/Fahrenheit/:number",(req,res) =>{
    let  number = req.params.number

    let response = {
        Fahrenheit : number,
        Celcius: (number - 32)* 5/9, 
        reamur : (number - 32)* 4/9,
        kelvin : (number - 32)* 5/9+273


    }
    res.json(response)
})
app.get("/convert/Kelvin/:number",(req,res) =>{
    let  number = req.params.number

    let response = {
        kelvin : number,
        Celcius: number-273, 
        reamur : (number - 273.15)* 4/5,
        Fahrenheit: (number - 273.15)* 9/5 +32


    }
    res.json(response)
})

app.listen(8000, () =>{
    console.log("server run on port 8000")
})