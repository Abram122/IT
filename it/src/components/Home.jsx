import "../style/home.css";
import Navbar from "./Navbar";
import img2 from "../assets/organic-products-hero.png"
import img5 from "../assets/logo-leaf-new.png"
import img6 from "../assets/first.jpg"
import img7 from "../assets/sec.jpg"
import img8 from "../assets/thir.jpg"
import man1 from "../assets/man-1.jpg"
import man2 from "../assets/man-2.jpg"
import man3 from "../assets/man-3.jpg"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
const Home = () => {
    const [data, setData] = useState('')
    const [data2, setData2] = useState('')
    const getdata = () => {
        axios.get('http://localhost:5000/gethomecontrol').then(res => {
            setData2(res.data)
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        axios.get("http://localhost:5000/fetch").then(
            (response) => {
                console.log(response.data);
                setData(response.data);
            }
        )
        getdata()
    }, [])
    return (
        <div className="container-fluid1">
            <Navbar />
            <div className="container-fluid p-5">
                <div className="container">
                    <div className=" mt-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <img className="img-fluid" src={img2} alt="" />
                            </div>
                            <div className="col-lg-6">
                                <img className="" src={img5} alt="" />
                                <p className="mt-4 fw-bold">Best Quality Products</p>
                                <h2 className="display-3 fw-bold ">Join The Organic Movement!</h2>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum iusto nostrum
                                    repellat
                                    amet fuga beatae assumenda tempore. Qui, sit similique. Vel dolorem quam expedita accusamus
                                    dignissimos est animi ipsam.</p>
                                <button className=" btn shop ps-4 pe-4 btn-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-cart" viewBox="2 0 16 20">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                    Shop Now
                                    </button>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
            </div>
            <div className="cards  p-5">
                <div className="container-fluid">
                    <div className="d-flex gap-4 justify-content-center flex-wrap">
                        <div className="sss   p-4   ">
                            <div className="card-body">
                                <h4 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#90EE90
" class="bi bi-truck" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                </svg> Free Shipping</h4>
                                <p className="card-text">Above only 5$</p>
                            </div>
                        </div>
                        <div className=" sss p-4   ">
                            <div className="card-body">
                                <h4 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#90EE90
" class="bi bi-person-rolodex" viewBox="0 0 16 16">
                                    <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                    <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
                                </svg> Certified Organic</h4>
                                <p className="card-text">100% Guarantee</p>
                            </div>
                        </div>
                        <div className=" sss p-4   ">
                            <div className="card-body">
                                <h4 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#90EE90
" class="bi bi-cash" viewBox="0 0 16 16">
                                    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                                    <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                                </svg> Huge Savings</h4>
                                <p className="card-text">At Lowest Price</p>
                            </div>
                        </div>
                        <div className=" sss p-4   ">
                            <div className="card-body">
                                <h4 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#90EE90
" class="bi bi-recycle" viewBox="0 0 16 16">
                                    <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z" />
                                </svg> Easy Returns</h4>
                                <p className="card-text">No Questions Asked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br />

            <div className="container-fluid">
                <div className="container mt-5">
                    <h2 className="text-center display-4">Best Selling Products</h2>
                    {
                        data2 && data2.map((cat)=>(
                            <div>
                                <h6 className="text-center display-4">{cat.cat1}</h6>
                    <br />
                    <center>
                        <img className="" src={img5} alt="" />
                    </center><br /><br />

                    <div className="row items">
                        {
                            data&&data.filter(item => item.catogery == cat.cat1).slice(0,4).map(item => 
                        <div className="col-lg-3 col-md-6 mt-5 col-sm-8 ">
                            <div className="card border-light text-center ">
                                <Link to={`/product/`+item.id}>
                                <img className="card-img-top img-fluid" src={`http://localhost:5000/images/`+item.image} alt="Product" />
                                </Link>
                                <div className="card-body">
                                    <p className="card-text text-secondary">{item.title}</p>
                                    <h5 className="card-title fw-bold">{item.description.slice(0,20)}</h5>
                                    <p className="card-text">${item.price}</p>
                                </div>
                            </div>
                        </div>
                            )
                        }
                        


                    </div>
                            </div>
                        ))
                    }
                    

                </div>
            </div>

            <div className="container-fluid">
                <div className="container mt-5">
                    <h2 className="text-center display-4">Best Selling Products</h2>
                    {
                        data2 && data2.map((cat)=>(
                            <div>
                                <h6 className="text-center display-4">{cat.cat2}</h6>
                    <br />
                    <center>
                        <img className="" src={img5} alt="" />
                    </center><br /><br />

                    <div className="row items">
                        {
                            data&&data.filter(item => item.catogery == cat.cat2).slice(0,4).map(item => 
                        <div className="col-lg-3 col-md-6 mt-5 col-sm-8 ">
                            <div className="card border-light text-center ">
                                <Link to={`/product/`+item.id}>
                                <img className="card-img-top img-fluid" src={`http://localhost:5000/images/`+item.image} alt="Product" />
                                </Link>
                                <div className="card-body">
                                    <p className="card-text text-secondary">{item.title}</p>
                                    <h5 className="card-title fw-bold">{item.description.slice(0,20)}</h5>
                                    <p className="card-text">${item.price}</p>
                                </div>
                            </div>
                        </div>
                            )
                        }
                        


                    </div>
                            </div>
                        ))
                    }

                </div>
            </div>

            <div className="container-fluid">
                <div className="container mt-5">
                    <h2 className="text-center display-4">Best Selling Products</h2>
                    {
                        data2 && data2.map((cat)=>(
                            <div>
                                <h6 className="text-center display-4">{cat.cat3}</h6>
                    <br />
                    <center>
                        <img className="" src={img5} alt="" />
                    </center><br /><br />

                    <div className="row items">
                        {
                            data&&data.filter(item => item.catogery == cat.cat3).slice(0,4).map(item => 
                        <div className="col-lg-3 col-md-6 mt-5 col-sm-8 ">
                            <div className="card border-light text-center ">
                                <Link to={`/product/`+item.id}>
                                <img className="card-img-top img-fluid" src={`http://localhost:5000/images/`+item.image} alt="Product" />
                                </Link>
                                <div className="card-body">
                                    <p className="card-text text-secondary">{item.title}</p>
                                    <h5 className="card-title fw-bold">{item.description.slice(0,20)}</h5>
                                    <p className="card-text">${item.price}</p>
                                </div>
                            </div>
                        </div>
                            )
                        }
                        


                    </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            {/* <div className="container-fluid mt-5 hh">
                <div className="dis d-flex justify-content-around">
                    <h1 className="text-light p-5">Get 25% off on your First Purchase!</h1>
                    <div className="my-auto">
                        <button className="btn btn-success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-cart" viewBox="2 0 16 20">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                            Shop Now</button>
                    </div>
                </div>
                <h3 className="text-center  m-4 p-4 fw-bold">Try It For Free. No Registration Needed.</h3>
            </div>
            <br /><br /><br />

            <div className="container-fluid">
                <div className="container mt-5">
                    <h2 className="text-center display-4">Trending Products</h2>
                    <br />
                    <center>
                        <img className="" src={img5} alt="" />
                    </center><br /><br />

                    <div className="row items">
                        <div className="col-lg-3 col-md-6 mt-5 col-sm-8 ">
                            <div className="card border-light text-center">
                                <img className="card-img-top" src={img6} alt="Title" />
                                <div className="card-body">
                                    <p className="card-text text-secondary">Groceries</p>
                                    <h5 className="card-title fw-bold">Assorted Coffee</h5>
                                    <p className="card-text">$500</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 col-sm-8 ">
                            <div className="card text-center border-light">
                                <img className="card-img-top" src={img7} alt="Title" />
                                <div className="card-body">
                                    <p className="card-text text-secondary">Groceries</p>
                                    <h5 className="card-title">Hand Sanitizer</h5>
                                    <p className="card-text">$100</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 col-sm-8 ">
                            <div className="card text-center border-light">
                                <img className="card-img-top" src={img8} alt="Title" />
                                <div className="card-body">
                                    <p className="card-text text-secondary">Groceries</p>
                                    <h5 className="card-title">Handpicked Red Chilliese</h5>
                                    <p className="card-text">$250</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 col-sm-8 ">
                            <div className="card border-light text-center">
                                <img className="card-img-top" src={img6} alt="Title" />
                                <div className="card-body">
                                    <p className="card-text text-secondary">Groceries</p>
                                    <h5 className="card-title fw-bold">Assorted Coffee</h5>
                                    <p className="card-text">$200</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div><br /><br /><br /> */}


            <div className="container-fluid">
                <div className="container mt-5">
                    <h2 className="text-center display-4">Customers Reviews</h2>
                    <br />
                    <center>
                        <img className="" src={img5} alt="" />
                    </center><br /><br />
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card p-4">
                                <div className="card-body">
                                    <div className="stars text-center">
                                        <span className="fa fa-star checked text-warning text-center"></span>
                                        <span className="fa fa-star checked text-warning text-center"></span>
                                        <span className="fa fa-star checked text-warning text-center"></span>
                                        <span className="fa fa-star text-warning text-center"></span>
                                        <span className="fa fa-star text-warning text-center"></span>
                                    </div>
                                    <div className="text-center">
                                        <img src={man3} alt="" className="img-fluid img-review" />
                                    </div>
                                    <h6 className="card-text text-center  p-3"> Click edit button to change this text. Lorem ipsum
                                        dolor sit
                                        amet, <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
                                            omnis!</span> consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                                        mattis, pulvinar dapibus leo.</h6>
                                    <h6 className="text-center">John </h6>

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="card p-4">
                                <div className="card-body">
                                    <div className="stars text-center">
                                        <span className="fa fa-star checked text-warning text-center"></span>
                                        <span className="fa fa-star checked text-warning text-center"></span>
                                        <span className="fa fa-star checked text-warning text-center"></span>
                                        <span className="fa fa-star text-warning text-center"></span>
                                        <span className="fa fa-star text-warning text-center"></span>
                                    </div>
                                    <div className="text-center">
                                        <img src={man2} alt="" className="img-fluid img-review" />
                                    </div>
                                    <h6 className="card-text text-center  p-3">Click edit button to change this text. Lorem ipsum
                                        dolor sit
                                        amet, <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
                                            omnis!</span> consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                                        mattis, pulvinar dapibus leo.</h6>
                                    <h6 className="text-center">Zizo</h6>

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="card p-4">
                                <div className="card-body">
                                    <div className="stars text-center">
                                        <span className="fa fa-star checked text-warning text-center"></span>
                                        <span className="fa fa-star checked text-warning text-center"></span>
                                        <span className="fa fa-star checked text-warning text-center"></span>
                                        <span className="fa fa-star text-warning text-center"></span>
                                        <span className="fa fa-star text-warning text-center"></span>
                                    </div>
                                    <div className="text-center">
                                        <img src={man1} alt="" className="img-fluid img-review" />
                                    </div>
                                    <h6 className="card-text text-center  p-3">Click edit button to change this text. Lorem ipsum
                                        dolor sit
                                        amet, <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
                                            omnis!</span> consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                                        mattis, pulvinar dapibus leo.</h6>
                                    <h6 className="text-center">Abraham</h6>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div><br /><br /><br /><br />
            <div className="my-0">


            </div>
            <Footer/>
        </div>
    );
}

export default Home;