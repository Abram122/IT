import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const AllProducts = () => {
    const [data, setData] = useState('')
    const [data2, setData2] = useState('')
    const [catogery, setCatogery] = useState('')
    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')
    useEffect(() => {
        axios.get('http://localhost:5000/catogries').then(res => {
            setData2(res.data)
        }).catch(err => {
            console.log(err)
        })

        axios.get("http://localhost:5000/fetch").then(
            (response) => {
                console.log(response.data);
                setData(response.data);
                if (input2) {
                    setData(data && data.filter((items) => items.title == input2[0].toUpperCase() + input2.slice(1,)))
                }
                    else if (catogery) {
                        setData(data && data.filter((items) => items.catogery == catogery))
                    
                } else {
                    setData(response.data)
                }
            }
        )
    }, [input2,catogery])
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="filter ps-4 pe-4">
                <h3>Filters</h3>
                <input type="text" className="form-control w-25" placeholder="Search" placeHolder="Filter By Name" onChange={(e) => {
                    setInput(e.target.value)
                }} />
                <button className="btn btn-success w-25 mt-3" onClick={() => {
                    setInput2(input)
                }}>Search</button>
                <select class="form-select w-25 mt-3" onChange={(e => {
                    setCatogery(e.target.value)
                })} aria-label="Default select example">
                    <option selected>Select A catogery</option>
                    {
                        data2 && data2.map(catogery1 => (
                            <option value={catogery1.catogeries}>{catogery1.catogeries}</option>
                            ))
                        }
                </select>
                        <button className="btn btn-danger w-25 mt-3" onClick={() => {
                            setInput2('')
                            setCatogery('')
                        }}>Remove Filter</button>
            </div>
            <div className="items row p-3">
                {
                    data && data.map(item =>
                        <div className="col-lg-3 col-md-6 mt-5 col-sm-8 ">
                            <div className="card border-light text-center ">
                                <Link to={`/product/` + item.id}>
                                    <img className="card-img-top img-fluid" src={`http://localhost:5000/images/` + item.image} alt="Product" />
                                </Link>
                                <div className="card-body">
                                    <p className="card-text text-secondary">{item.title[0] + item.title.slice(1,)} ({item.catogery})</p>
                                    <h5 className="card-title fw-bold">{item.description.slice(0, 20)}</h5>
                                    <p className="card-text">${item.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default AllProducts;