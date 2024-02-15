import { useEffect, useState, usestate } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const HomeControl = () => {
    const [data, setData] = useState('')
    const [data2, setData2] = useState('')
    const [catogery, setCatogery] = useState('')
    const [catogery2, setCatogery2] = useState('')
    const [catogery3, setCatogery3] = useState('')
    const navigate = useNavigate('/Admin')
    const getdata2 = () => {
        axios.get('http://localhost:5000/catogries').then(res => {
            setData2(res.data)
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }
    const getdata = () => {
        axios.get('http://localhost:5000/gethomecontrol').then(res => {
            setData(res.data)
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }
    const send = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/updatehomecontrol',{catogery,catogery2,catogery3}).then(res=>{
            console.log(res.data)
            if(!catogery&&!catogery2&&!catogery3){
                alert("please Fill Data")
            }else{
                navigate('/')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(() => {
        if (!sessionStorage.getItem("adminName")) {
            navigate('/Admin')
        } else {
            getdata()
            getdata2()
        }
    }, [])
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: "90vh" }}>
            <h3>Choose Your Categories For Home Page</h3>
            <p>Select Categories By Order</p>
            <form action="" className="w-50">
                <div className="form-div">
                    <label className="form-label">First category</label>
                    <select class="form-select" onChange={(e => {
                        setCatogery(e.target.value)
                    })} aria-label="Default select example">
                        {
                            data && data.map(catogery1 => (
                                <div>
                                    <option selected value={catogery1.cat1}>{catogery1.cat1}</option>
                                </div>
                            ))
                        }
                        {
                            data2 && data2.map(catogery1 => (
                                <option value={catogery1.catogeries}>{catogery1.catogeries}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-div">
                    <label className="form-label">Second category</label>
                    <select class="form-select" onChange={(e => {
                        setCatogery2(e.target.value)
                    })} aria-label="Default select example">
                        {
                            data && data.map(catogery1 => (
                                <option selected value={catogery1.cat2}>{catogery1.cat2}</option>
                            ))
                        }
                        {
                            data2 && data2.map(catogery1 => (
                                <option value={catogery1.catogeries}>{catogery1.catogeries}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-div">
                    <label className="form-label">Third category</label>
                    <select class="form-select" onChange={(e => {
                        setCatogery3(e.target.value)
                    })} aria-label="Default select example">
                        {
                            data && data.map(catogery1 => (
                                <option selected value={catogery1.cat3}>{catogery1.cat3}</option>
                            ))
                        }
                        {
                            data2 && data2.map(catogery1 => (
                                <option value={catogery1.catogeries}>{catogery1.catogeries}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary w-100 mt-4" onClick={send} >Submit</button>
                </div>
            </form>
        </div>
    );
}

export default HomeControl;