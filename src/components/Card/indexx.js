import React from "react";
import { useQuery } from "react-query";
import Card from "../../components/Card";


function Cardy() {
    const { isLoading, error, data } = useQuery("products", () =>
     fetch("http://localhost:4000/product").then((res) =>
       res.json()
     )
   )
 
   if (isLoading) return 'Loading...';
 
   if (error) return 'An error has occurred: ' + error.message;
 console.log(data);
    return (
        <div >
            
                <div className="row">
           
            {data.map((item,key) => (<Card key={key} item={item} />
            ))}
           
                </div>
            </div>
     
    )
}
export default Cardy