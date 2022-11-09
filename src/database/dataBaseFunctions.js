import sqlite from "sqlite3";
const sqlite3 = sqlite.verbose();
import fs from "fs";
import path from "path";

let pathVar = "./src/database/E-commerceStore.sqlite";
// let newPath = "./src/database/database.sql";
// CreateDataBase();
// fs.readFileSync(newPath)
function CreateDataBase(){
  fs.existsSync(pathVar);
  if (fs.existsSync(pathVar) === false) {
    new sqlite3.Database(pathVar, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX, (err) => {
      if (err) {
        return console.error(err.message);
      }
      let readfile = fs.readFileSync(newPath)
      console.log(readfile);
      console.log("Created New DataBase ");
    });
  }
  console.log(fs.existsSync(pathVar));
};
let sql;


  const db = new sqlite3.Database(pathVar, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("opening file ");
  });
  console.log("hello");


// sql = 'Create Database Users(CustomersId INTEGER Primary Key AutoIncrement, LastName Text, FirstName Text, Address)';
// db.run(sql);
// sql = 'INSERT INTO Customers(LastName, FirstName, Country , `State`, Town,StreetNO, PhoneNo, EmailAddress) VALUES(?,?,?,?,?,?,?,?)';
// db.run(sql, ["Mikel", "Obi", "Canadian", "Lagos", "Lekki",26,"08182828333", "mikel122@gmail.com" ], (err)=> {
//     if(err) return console.error(err.message);

/**
 * @param {string} LastName
 * @param {string} FirstName
 * @param {string} Country
 * @param {string} State
 * @param {(err:string, rows:[]) => void} callback
 */
export const CreateTable = (LastName, FirstName, Country, State, callback) => {
  db.run(
    "Create Table Workers(CustomersId INTEGER Primary Key AutoIncrement,LastName,FirstName , Country ,`State`) VALUES(?,?,?,?)",
    [LastName, FirstName, Country, State, callback]
  );
};
// export const CreateTable =() =>{
//   db.run('CREATE Table ?' )
// }

/**
 * @param {string} ProductName
 * @param {string}Price
 * @param {string} ImgUrl
 * @param {(err:string, rows:[]) => void} callback
 */

export const addProducts = (ProductName, Price, ImgUrl, callback) => {
  db.run(
    "INSERT INTO Products(ProductName, Price, ImgUrl) VALUES(?,?,?)",
    [ProductName, Price, ImgUrl],
    callback
  );
};
/**
 *@param { string} ID 
 *@param {(err:string, rows:[]) => void} callback

 */
export const deleteProducts = (ID, callback) => {
  db.all("DELETE FROM products WHERE productsId = ?", [ID], callback);
};
export const updateProducts = (ID, ProductName, Price, ImgUrl, callback) => {
  db.all(
    "UPDATE products SET ProductName =?, Price = ?, ImgUrl =? WHERE ProductsId =?",
    [ProductName, Price, ImgUrl, ID],
    callback
  );
};
export const GetProducts = (callback) => {
  db.all("Select * from Products ", [], callback);
};
/**
 *@param { string} ID 
 *@param {(err:string, rows:[]) => void} callback

 */
export const GetProductsWitID = (ID, callback) => {
  db.all(" Select * from Products Where ProductsId = ?", [ID], callback);
};