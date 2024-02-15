import "../style/product.css";
import "../style/decription.css"
import Description from './Description'
import product_img from "../assets/cashew-butter-500.jpg";
import ImageMagnifier from "./imageMagnifier"
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect ,useRef} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import ReactImageMagnify from 'react-image-magnify';
export default function Product() {
    const { id } = useParams();
    const [data, setData] = useState('')
    const [quantity, setQuantity] = useState('')
    const [disaple, setDisaple] = useState(true)
    const regQuantity = /(^\d{1,}$)/;
    const validation = () => {
        if (quantity <=0) {
            setDisaple(true)     
        } else if (regQuantity.test(quantity)) {
            setDisaple(false)    
        }
    }
    const navigate = useNavigate('/')
    let productsname = localStorage.getItem("ProductsE")
    let productsprice = localStorage.getItem("ProductsP")
    let productsimage = localStorage.getItem("ProductsI")
    const addToCart = (productName, productsPrice, productsImage, productsQuantity) => {
        // localStorage.setItem("ProductsE",["products",'ff'])
        let cost = productsPrice * productsQuantity
        productsname += `,[${productName},${productsPrice},${productsImage},${productsQuantity},${cost}]`
        localStorage.setItem("ProductsE", [productsname])
        productsprice += `,"price":${productsPrice}`
        localStorage.setItem("ProductsP", [productsprice])
        productsimage += `,${productsImage}`
        localStorage.setItem("ProductsI", [productsimage])
        // console.log(productsname)
        navigate('/')
    }
    useEffect(() => {
        axios.get("http://localhost:5000/fetch").then(
            (response) => {
                console.log(response.data);
                setData(response.data);
            }
        )
        validation()
    }, [quantity])
    return (
        <div>
            <Navbar />
            {
                data && data.filter((item) => item.id == id).map((item) => (

                    <div className="row container">
                        <div className="col-lg-6 col-sm-12" >
                            <span className="sale">Sale!</span>
                            <ImageMagnifier src={`http://localhost:5000/images/` + item.image} width="430px" height="400px" magnifierHeight="150" magnifieWidth="150" zoomLevel="1.5" />
                            {/* <img src={`http://localhost:5000/images/` + item.image} alt="cashew" className="product"></img> */}
                        </div>
                        <div className="col-lg-6 col-sm-12" >
                            <h2>{item.title}</h2>
                            <div class="price">
                                <h5 class="del"><del>£35.00</del></h5>
                                <h5>£{item.price}</h5>
                                <p> +Free Shipping</p>
                            </div>
                            <p>{item.description}</p>
                            <form className="form">
                                <input type="number" className="form-control quantity" placeholder="Quantity" onChange={(e) => {
                                    setQuantity(e.target.value)
                                }} ></input>
                                <input  className="submit"  value={"ADD TO CART"} type="button" disabled={disaple}  onClick={() => {
                                    addToCart(item.title, item.price, item.image, quantity)
                                }}></input>
                            </form>
                            <hr></hr>
                            <span class="categories">
                                <p>Category: </p><p className="green"> {item.catogery}</p>
                            </span>
                        </div>
                        <div className="">
                            <ul className="nav nav-tabs pt-3">
                                <li className="nav-item">
                                    <a className="nav-link active" style={{ color: 'green', background: "rgba(236, 236, 236, 0.658)" }} aria-current="page" href="#">Description</a>
                                </li>
                            </ul>
                            <br></br>
                            <p>
                                {item.description}
                            </p>
                            <h2>Related products</h2>
                            <div className="cardss p-3">
                                {
                                    data && data.filter((items) => (items.catogery == item.catogery) && (items.id != item.id)).slice(0, 3).map((item) => (
                                        <div>
                                            <div className="products">
                                                <Link to={'/product/' + item.id}>
                                                    <img className="product-img" src={`http://localhost:5000/images/` + item.image} alt="product"></img>
                                                </Link>
                                                <p className="gray">{item.title}</p>
                                                <h4>{item.description}</h4>
                                                <h6>£{item.price}</h6>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                    </div>
                ))
            }
        </div>
    )
}