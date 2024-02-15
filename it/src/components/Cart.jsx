import "../style/Cart.css"
import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
const Cart = () => {
    const [productName, setProductName] = useState('')
    let [subTotal,SetSubTotal] = useState(0)
    let [num,setNum] = useState(0)
    const navigate = useNavigate('/')
    const check = ()=>{
        if(num !=1){
            productName && productName.slice(1).map((item, index)=>{
                SetSubTotal(subTotal += +(item.split(',')[4].slice(0,-1)))
                setNum(num+1)
                localStorage.setItem("cartTotal",subTotal)
            })
        }
    }
    useEffect(() => {
        if(localStorage.getItem('ProductsE')){
            setProductName(localStorage.getItem('ProductsE').split(',['))
        }else{
            Swal.fire({
                title: "Cart Page",
                text: "Canot go to Cart Page no product selected",
                icon: "question"
            });
            navigate('/')
        }
        // check()
    },[])

    return (
        <>
            <Navbar />
            <div className="container">
                <h4>Cart</h4>
                <div className="table" style={{ overflowX: 'auto' }}>
                    <table className="table table-hover mt-3 cart-table" >
                        <thead>
                            <tr className="head" >
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productName && productName.slice(1).map((item, index) => {
                                return (<tr className="data">
                                    <td className="colse-img-cell" >
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16" onClick={() => handleDeleteProduct(product.id)}>
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                        </svg> */}
                                        <img className="products-img" src={`http://localhost:5000/images/`+item.split(',')[2]} alt="product"></img>
                                    </td>
                                    <td className="product-title" >{item.split(',')[0]}</td>
                                    <td>£{item.split(',')[1]}</td>
                                    <td>
                                        <input
                                            className="form-control qty"
                                            type="number"
                                            name="qty"
                                            value={item.split(',')[3]}
                                        ></input>
                                    </td>
                                    <td><input onClick={(e)=>{
                                        // SetSubTotal( e.target.value)
                                        console.log(subTotal)
                                    }} type="number" className="form-control"  value={item.split(',')[4].slice(0,-1)}  /></td>
                                </tr>)
                            })}
                            <tr className="last-row">
                                <td colspan="3">
                                    <form method="post" action="#" className="coupon-cell">
                                        <input className="form-control code mr-3" name="code" ></input>
                                        <input className="green-btn" type="submit" value={"APPLY COUPON"}></input>
                                    </form>
                                </td>
                                <td colspan="2">
                                    <form  action="#">
                                        <input className="green-update-btn"  value={"update"}/>
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-xsm-9 col-md-6">
                        <div className="card p-3">
                            <h3 className="card-title" onChange={check()}>Cart totals</h3>
                            <hr></hr>
                            <span className="card-cell">
                                <p>Subtotal</p>
                                <p>£{localStorage.getItem("cartTotal")}</p>
                            </span>
                            <hr></hr>
                            <span className="card-cell">
                                <p>Total</p>
                                <p>£{localStorage.getItem("cartTotal")}</p>
                            </span>
                            <hr></hr>
                            <form method="post" action="#" className="coupon-cell">
                                <Link to={'/order'} className="green-check-btn w-100 text-center text-decoration-none">PROCEED TO CHECKOUT</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;