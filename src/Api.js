import axios from "axios"

export const a= async()=>{
    const {data}=await axios.get('http://localhost:3000/product')
    return data;
}