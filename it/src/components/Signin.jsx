import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; import "../style/form.css";
import { useNavigate } from 'react-router-dom'
function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const navigate = useNavigate("/")
    const send = (e) => {
        e.preventDefault()
        console.log(email,password)
        axios.post("http://localhost:5000/login", {
            email, password
        }).then((res) => {
            if (res.data.Status == "Success") {
                alert(res)
            } else {
                alert(res.data.user.name)
                localStorage.setItem("name", res.data.user.name)
                localStorage.setItem("email", res.data.user.email)
                alert("setted")
                navigate('/')
            }
        }).catch(err => {
            alert("error")
            alert(err)
            setErr(err)
            console.log(err)
        })


    }
    return (
        <div className="container-fluid">
            <div className=" text-dark divfrom">
                <div className="row">
                    {/* <div className="col-4 ima ">
                        <img src={img} alt="" className="imgform img-fluid" />
                    </div> */}
                    <div className="col-lg-12 ">
                        <div className="d-flex justify-content-between mt-3 container">
                            <div>
                                <Link to={'/signup'} className="btn btn-dark">SignUp</Link>
                            </div>
                            <div>
                                <Link to={'/signin'} className="btn btn-dark">Sign In</Link>
                            </div>
                        </div>
                        <div className="row mt-5 text-center">
                            <div className="col-12">
                                <h4 className="fw-bolder">Fill the form to become part of the team</h4>
                            </div>
                            <div className="col-12">
                                <form action="">
                                    <div className="from-div mt-5 ">
                                        <input type="email" className="form-control  d-inline w-50" name="email" placeholder='Email Address' onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                    </div>
                                    <div className="from-div mt-5 ">
                                        <input type="password" className="form-control  d-inline w-50" name="password" placeholder='Your Password' onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} />
                                    </div>
                                    <div className="from-div mt-5 ">
                                        <input type="submit" className="btn btn-dark w-50" value={"Signin"} onClick={send} />
                                        <p className='text-danger error'></p>
                                    </div>
                                    <div className="mt-3 text-start">
                                        <h6 className="text-dark">If You Donot Already have an account  <Link to={'/signup'}>Sign up</Link> </h6>
                                    </div>
                                    <div className="line">
                                    </div>
                                    {/* <div className="social mt-3 d-flex justify-content-around">
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                        </svg>
                                        </div>
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" className="bi bi-wikipedia" viewBox="0 0 16 16">
                                            <path d="M8.835 3.003c.828-.006 2.688 0 2.688 0l.033.03v.288c0 .08-.045.12-.133.12-.433.02-.522.063-.68.29-.087.126-.258.393-.435.694l-1.52 2.843-.043.089 1.858 3.801.113.031 2.926-6.946c.102-.28.086-.478-.044-.595-.132-.114-.224-.18-.563-.195l-.275-.014a.161.161 0 0 1-.096-.035.1.1 0 0 1-.046-.084v-.289l.042-.03h3.306l.034.03v.29c0 .078-.045.117-.133.117-.433.02-.754.113-.962.281a1.64 1.64 0 0 0-.488.704s-2.691 6.16-3.612 8.208c-.353.672-.7.61-1.004-.019A224.05 224.05 0 0 1 8.044 8.81c-.623 1.285-1.475 3.026-1.898 3.81-.411.715-.75.622-1.02.019-.45-1.065-1.131-2.519-1.817-3.982-.735-1.569-1.475-3.149-1.943-4.272-.167-.4-.293-.657-.412-.759-.12-.1-.368-.16-.746-.18C.069 3.429 0 3.395 0 3.341v-.303l.034-.03c.615-.003 3.594 0 3.594 0l.034.03v.288c0 .08-.05.118-.15.118l-.375.016c-.322.013-.483.11-.483.288 0 .083.034.217.109.4.72 1.753 3.207 6.998 3.207 6.998l.091.023 1.603-3.197-.32-.71L6.24 5.095s-.213-.433-.286-.577l-.098-.196c-.387-.77-.411-.82-.865-.88-.137-.017-.208-.035-.208-.102v-.304l.041-.03h2.853l.075.024v.303c0 .069-.05.104-.15.104l-.206.03c-.523.04-.438.254-.09.946l1.057 2.163 1.17-2.332c.195-.427.155-.534.074-.633-.046-.055-.202-.144-.54-.158l-.133-.015a.159.159 0 0 1-.096-.034.099.099 0 0 1-.045-.085v-.288l.041-.03Z" />
                                        </svg>
                                        </div>
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" className="bi bi-twitter" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                                        </svg>
                                        </div>
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" className="bi bi-google" viewBox="0 0 16 16">
                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                        </svg>
                                        </div>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;