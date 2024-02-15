import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import "../style/order.css"
import axios from "axios";
export default function Order() {
  const navigate = useNavigate('/');
  let [subTotal, SetSubTotal] = useState(0)
  const [productName, setProductName] = useState('')
  let [num, setNum] = useState(0)
  // Input Data 
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [company_name, setCompany_name] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [phone, setPhone] = useState(0)
  const [email, setEmail] = useState('')
  let   [products, setProducts] = useState('')
  const totalProducts= ()=>{
    if(localStorage.getItem('ProductsE')){
      productName && productName.slice(1).map((item, index)=>{
      setProducts(products += (item.split(',')[0]))
      })
    }
  }
  // Input Errors 
  const [errorfirstName, setErrorFirstName] = useState('Enter first name')
  const [errorlastName, setErrorLastName] = useState('Enter last name')
  const [errorcompanyName, setErrorCompanyName] = useState('Enter company name')
  const [erroraddress, setErrorAddress] = useState('Enter your address')
  const [errorstate, setErrorState] = useState('Enter your state')
  const [errorzip, setErrorZip] = useState('Enter your Zip code')
  const [errorphone, setErrorPhone] = useState('Enter your phone number')
  const [erroremail, setErrorEmail] = useState('Enter your email addreess')
  // validation 
  const regName = /^[a-zA-Z]+$/;
  const regZip = /(^\d{5,}$)/;
  const regPhone = /^0\d{10}$/;
  const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const validation = () => {
    if (first_name == '') {
      setErrorFirstName('First Name is required')
    } else if (regName.test(first_name)) {
      setErrorFirstName('')
    } else {
      setErrorFirstName('Invalid First Name')
    }
    if (last_name == '') {
      setErrorLastName('Last Name is required')
    } else if (regName.test(last_name)) {
      setErrorLastName('')
    } else {
      setErrorLastName('Invalid Last Name')
    }
    if (company_name == '') {
      setErrorCompanyName('Company Name is required')
    } else if (regName.test(company_name)) {
      setErrorCompanyName('')
    } else {
      setErrorCompanyName('Invalid Company Name')
    }
    if (address == '') {
      setErrorAddress('Address is required')
    } else {
      setErrorAddress('')
    }
    if (state == '') {
      setErrorState('State is required')
    } else if (regName.test(state)) {
      setErrorState('')
    } else {
      setErrorState('Invalid State')
      }
      if (zip == '') {
        setErrorZip('Zip is required')
      } else if (regZip.test(zip)) {
        setErrorZip('')
      } else {
        setErrorZip('Invalid Zip')
      }
      if (phone == '') {
        setErrorPhone('Phone is required')
      } else if (regPhone.test(phone)) {
        setErrorPhone('')
      } else {
        setErrorPhone('Invalid Phone')
      }
      if (email == '') {
        setErrorEmail('Email is required')
      } else if (regEmail.test(email)) {
        setErrorEmail('')
      } else {
        setErrorEmail('Invalid Email')
    
        }
        if (errorfirstName == '' && errorlastName == '' && errorcompanyName == ''  && erroraddress == '' && errorstate == '' && errorzip == '' && errorphone == '' && erroremail == '') {
          totalProducts()
          axios.post("http://localhost:5000/order",{
            first_name: first_name,
            last_name: last_name,
            company_name: company_name,
            addrees: address,
            state: state,
            zip: zip,
            phone: phone,
            email: email,
            products: products,
            total:localStorage.getItem("cartTotal")
          }).then((res)=>{
            if(res.data=="added"){
              navigate("/")
              localStorage.clear()
            }else{
              alert("sds")
            }
          }).catch((err)=>{
            alert("error")
            console.log(err)
          })
        }
  }
  useEffect(() => {
    // totalProducts()
    if(!localStorage.getItem('ProductsE')){
      Swal.fire({
        title: "Order Page",
        text: "Canot go to order page no products selected",
        icon: "question"
      });
      navigate('/')
  }else{
    setProductName(localStorage.getItem('ProductsE').split(',['))
  }
  }, [])
  return (
    <div>
      <div>
        <br />
        <div className="container">
          <h3 className="display-3" >Check Out</h3>
          <br />
          <div className="green-line"></div>
          <br />
          <p>
            Have a Promo code?
            <a className="text" href="#">
              <Link className="text-decoration-none text-success" to={'/cart'}>
                Click Here to enter your code
              </Link>
            </a>
          </p>
          <div className="row">
            <div className="col-6">
              <h4>Billing Details</h4>
              <hr />
              <br />
              <form >
                <div className="row">
                  <div className="col-6">
                    <label className="fw-bold">First Name *</label>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      onChange={(e) => {
                        setFirst_name(e.target.value)
                      }}
                    />
                    <p className="text-danger">{errorfirstName}</p>
                  </div>
                  <div className="col-6">
                    <label className="fw-bold">Last Name *</label>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      onChange={(e) => {
                        setLast_name(e.target.value)
                      }}
                    />
                    <p className="text-danger">{errorlastName}</p>
                  </div>
                </div>

                <label className="fw-bold">Company Name (Optional)</label>
                <input
                  type="text"
                  name="companyname"
                  className="form-control"
                  onChange={(e) => {
                    setCompany_name(e.target.value)
                  }}
                />
                <p className="text-danger">{errorcompanyName}</p>
                <label className="fw-bold">Street Address *</label>
                <input
                  type="text"
                  placeholder="House number and street name"
                  name="street"
                  className="form-control"
                  onChange={(e) => {
                    setAddress(e.target.value)
                  }}
                />
                <p className="text-danger">{erroraddress}</p>
                <label className="fw-bold">ٍState *</label>
                <input type="text" name="state" className="form-control" onChange={(e) => {
                  setState(e.target.value)
                }} />
                <p className="text-danger">{errorstate}</p>
                <label className="fw-bold">Post Code/ZIP *</label>
                <input type="number" name="zip" className="form-control" onChange={(e) => {
                  setZip(e.target.value)
                }} />
                <p className="text-danger">{errorzip}</p>
                <label className="fw-bold">Phone *</label>
                <input type="number" name="phone" className="form-control" onChange={(e) => {
                  setPhone(e.target.value)
                }} />
                <p className="text-danger">{errorphone}</p>
                <label className="fw-bold">Email *</label>
                <input type="email" name="email" className="form-control" onChange={(e) => {
                  setEmail(e.target.value)
                }} />
                <p className="text-danger">{erroremail}</p>
                <br />
                <input
                  type="button"
                  value="submit"
                  className="btn btn-md btn-success"
                  onClick={validation}
                />
              </form>
              <br />
            </div>
            <div className="col-6 border-dark border-solid p-5">
              <h4>Your order</h4>
              <br />
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {productName && productName.slice(1).map((item, index) => {
                    return (<tr className="data">

                      <td className="product-title" >{item.split(',')[0]} *{item.split(',')[3]}</td>
                      <td>£{(item.split(',')[1]) * (item.split(',')[3])}</td>
                      <td>
                      </td>

                    </tr>)
                  })}
                  <tr>
                    <td>Subtotal</td>
                    <td>
                      <p>£
                        {localStorage.getItem("cartTotal")}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>
                      <p>£
                        {localStorage.getItem("cartTotal")}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <form action="" method="post">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                  />
                  <label className="form-check-label" for="">
                    {" "}
                    Check Payments
                  </label>
                </div>
                <br />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                  />
                  <label className="form-check-label" for="">
                    Cash On Delivery
                  </label>
                </div>
                <br />
                <button className="w-100 btn btn-success">PLACE ORDER</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
