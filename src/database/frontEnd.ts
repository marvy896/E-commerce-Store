type Callback =  (rows: any) => void;

export const GetProducts = async (callback:Callback) => {
  await fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then(callback)
};
