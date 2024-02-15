import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
const Orders = () => {
    const [data, setData] = useState('')
    const [filteData,setFilterData] = useState('sad')
    const getdata = () => {
        axios.get('http://localhost:5000/getorders')
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
    }
    const navigate = useNavigate('/Admin')
    useEffect(() => {
        if (!sessionStorage.getItem("adminName")) {
            navigate('/Admin')
        }else{
            getdata()
        }
    }, [])
    return (
        <div class="container-fluid  w-40">
            <Navbar />
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label  class="form-label">Search With Phone number</label>
                </div>
                <div class="col-auto">
                    <input type="number" onChange={(e)=>{
                        setFilterData(e.target.value)
                    }} placeholder="Enter phone number with out 0" class="form-control" aria-describedby="passwordHelpInline" />
                </div>
                {/* <div class="col-auto">
                    <button type="submit" class="btn btn-primary">serch</button>
                </div> */}
                {
                    data && data.filter((item)=>item.phone == filteData).map((items)=>(
                        <table class="table table-hover table-responsive text-center  table-active">
                    <tr class="table-success text-uppercase">
                        <th>name</th>
                        <th>e-mail</th>
                        <th>phone number</th>
                        <th>Address</th>
                        <th>products</th>
                        <th>total price</th>
                        <th>time</th>
                    </tr>
                    
                
                        <tr>
                            <td>{items.first_name} {items.last_name}</td>
                            <td>{items.email}</td>
                            <td>0{items.phone}</td>
                            <td>{items.address}</td>
                            <td>{items.products}</td>
                            <td>{items.total}</td>
                            <td>{items.created_at.slice(0,10)}</td>
                        </tr>
                    </table>
                    ))
                }
                
                <table class="table table-hover table-responsive text-center">
                    <tr class="table-success text-uppercase">
                        <th>name</th>
                        <th>e-mail</th>
                        <th>phone number</th>
                        <th>Address</th>
                        <th>products</th>
                        <th>total price</th>
                        <th>time</th>
                    </tr>
                    
                {
                    data && data.map((item)=>(
                        <tr>
                            <td>{item.first_name} {item.last_name}</td>
                            <td>{item.email}</td>
                            <td>0{item.phone}</td>
                            <td>{item.address}</td>
                            <td>{item.products}</td>
                            <td>{item.total}</td>
                            <td>{item.created_at.slice(0,10)}</td>
                        </tr>
                    ))
                }

                </table>
            </div>
        </div >
    );
}

export default Orders;