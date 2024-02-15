import "../style/navbar.css"
import Logo from"../assets/organic-store-logo5.svg"
import user from"../assets/user.png"
import cart from"../assets/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi_copy-removebg-preview.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
const Navbar = () => {
    const [productName, setProductName] = useState('')
    let [subTotal,SetSubTotal] = useState(0)
    const [num, setNum] = useState(0)
    const check = ()=>{
        if(num !=1){
            productName && productName.slice(1).map((item, index)=>{
                SetSubTotal(subTotal += +(item.split(',')[4].slice(0,-1)))
                setNum(num+1)
                localStorage.setItem("cartTotal",subTotal)
            })
        }
    }
    const [number,setNumber] = useState(0) 
    const [total,setTotal] = useState(0)
    useEffect(()=>{
        if(localStorage.getItem("cartTotal")){
            setTotal(localStorage.getItem("cartTotal"))
        }
        if(localStorage.getItem("ProductsE")){
            setNumber((localStorage.getItem("ProductsE").split(",").slice(1).length)/5) 
        }
        if(localStorage.getItem('ProductsE')){
            setProductName(localStorage.getItem('ProductsE').split(',['))
        }
    },[])
    return (
        <div class="container-fluid1 sticky-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to={'/'}>
                <a class="navbar-brand" href="#"><img src={Logo} height="75"
                        alt="organic store logo"/></a>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="text-decoration-none" to={'/allproducts'}>
                            <a class="nav-link" href="#">Everything</a>
                            </Link>
                        </li>
                        <li class="nav-item" onChange={check()}>
                            <a class="nav-link" href="#">Groceries</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Juice</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item ">
                            <Link to={'/about'} className="text-decoration-none">
                            <a class="nav-link  " href="#">About</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/contact'} className="text-decoration-none">
                            <a class="nav-link" href="#">Contact</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" style={{fontSize:"15px"}} href="#">£{total}</a>
                        </li>
                        <li class="nav-item">
                            <Link to={'/cart'}>
                                <div className="position-relative">
                            <a class="nav-link mx-2" href="#">
                                
                                <img src={cart} height="25" alt="Cart"/>
                            </a>
                            <span className="badge  bg-danger position-absolute top-0">{number}</span>
                                </div>
                                </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>
    );
}

export default Navbar;