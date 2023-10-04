// import { createServer } from 'http';
import express, { response } from "express";
import sqlite from 'sqlite3';
import { GetProducts, GetProductsWitID, addProducts, updateProducts, deleteProducts, CreateTable } from "./dataBaseFunctions.js";
const sqlite3 = sqlite.verbose();

const app = express()
app.use(express.static('dist'))
const port = 3000
app.use(express.json({extended: false}));
app.use('/productCard', express.static('dist'))
app.use('/cartpage', express.static('dist'))
app.use('/home', express.static('dist'))
app.use('/checkout', express.static('dist'))
app.use('/admin', express.static('dist'))
app.use('/login', express.static('dist'))
app.use('/productCard/imagepage', express.static('images'))



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.post('/newTable',(req, res) => {
 // let create = res.send(CreateTable)
  let validateName = req.body.LastName;
  let validateFname = req.body.FirstName;
  let validateCountry = req.body.Country;
  let validateState = req.body.State;
  if ( toString(validateName, validateFname,validateCountry,validateState)){
  CreateTable(validateName, validateFname , validateCountry ,validateState,(err, rows)=>{
    if(err) return console.error(err.message);
        res.status(200).json({rows: rows});
  })
  console.log(req.body)
  }
  else{
    res.status(400).json({error: 'Invalid Name, First Name, Last Name, Country, State'}).end();
  }
})
app.post('/validateLogin', (req, res) => {
 let validateUser = req.body.name;
 let validatePass = req.body.password;
 if (validateUser == "marvel" && validatePass == 1234){
  res.sendStatus(200);
 } else{
  res.sendStatus(400);
 }
})

app.get('/products', (req, res) => {
    GetProducts( ( err, rows)=> {
        if(err) return console.error(err.message);
        res.status(200).json({rows: rows});
    })
    
  })
  
app.get('/product/:ID', (req, res) => {
    let validate =req.params.ID;
    if(parseInt (validate) ){
        GetProductsWitID(validate, (err, rows) =>{
            if(err) return console.error(err.message);
            res.status(200).json({rows: rows});
        })
    }
    else{
        res.status(400).end();
    }
  })

app.post('/add', (req, res) => {
  console.log(req.body)
  let validateName = req.body.ProductName
  let validatePrice = req.body.Price
  let validateImg = req.body.ImgUrl;
  if (( validateName && typeof validateName =='string') && (validatePrice != undefined && typeof validatePrice == "number")  && validateImg!= undefined){
    addProducts(validateName, validatePrice, validateImg,  (err, rows) =>{
      if(err) return console.error(err.message);
      res.status(200).json({rows: rows});
  })
  console.log(req.body)
}
else{
  res.status(400).end()
}
})

app.post('/updateProducts',(req, res) => {
  let validateName = req.body.ProductName
  let validatePrice = req.body.Price
  let validateImg = req.body.ImgUrl;
  let validate = req.body.ProductsId;
  if((typeof validate === "number") && ( validateName && typeof validateName =='string') && (validatePrice != undefined && typeof validatePrice == "number")  && validateImg!= undefined ){
    updateProducts(validate, validateName, validatePrice, validateImg,  (err, rows) =>{
      if(err) return console.error(err.message);
      res.status(200).json({rows: rows});
  })
}
  else{  
    res.status(400)
    res.end()
}
})

app.post('/deleteProducts',(req, res) => {
  let validate = req.body.ProductsId
  if(typeof validate === "number"){
    deleteProducts(validate,(err, rows) =>{
      if(err) return console.error(err.message);
      res.status(200).json({rows: rows});
    })
  }
  else{  
    res.status(400)
    res.end()
}
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
