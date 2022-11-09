Create Table Customers
(CustomersId INTEGER Primary Key AutoIncrement, 
LastName Text, 
FirstName Text, 
Country Text,
`State` Text,
Town Text,
StreetNO INTEGER,
PhoneNo Text,
EmailAddress Text
);

CREATE TABLE Products(
    ProductsId INTEGER Primary Key AutoIncrement, 
    ProductName Text,
    Price INTEGER,
    ImgUrl Text
);