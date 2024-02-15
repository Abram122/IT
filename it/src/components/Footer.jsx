import Logo from'../assets/organic-store-white-logo.png'
import playStore from'../assets/AdobeStock_386668700_Preview_Editorial_Use_Only.jpeg'
const Footer = () => {
    return (
        <div className="container-fluid1">
            <footer className="bg-dark text-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-logo">
                                <img src={Logo} height="130" alt="Organic Store Logo" className=" rounded-circle" />
                            </div><br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores voluptas, quasi, fuga quam laborum amet delectus libero ab inventore sequi voluptatibus voluptatum ex blanditiis ut tempora facilis nostrum dicta.</p>
                            <hr />
                            <p >Email: info@organicstore.com</p>
                            <p >Phone: +1 123 456 7890</p>
                        </div>
                        <div className="col-md-4 ">
                            <h5 className="display-6 ">Quick Links</h5>
                            <hr />
                            <ul className="list-unstyled  ">
                                <li><a href="#" className='text-decoration-none text-light'>Home</a></li>
                                <li><a href="#" className='text-decoration-none text-light' >Shop</a></li>
                                <li><a href="#" className='text-decoration-none text-light' >About Us</a></li>
                                <li><a href="#" className='text-decoration-none text-light' >Contact</a></li>
                            </ul>
                            <div className="col-md-6">
                                <h5 className="display-6" >Featured Products</h5>
                                <hr />
                                <ul className="list-unstyled">
                                    <li><a href="#" className='text-decoration-none text-light' >Product 1</a></li>
                                    <li><a href="#" className='text-decoration-none text-light' >Product 2</a></li>
                                    <li><a href="#" className='text-decoration-none text-light' >Product 3</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5 className="display-6">Connect With Us</h5>
                            <hr />
                            <a href="#" className='text-decoration-none text-light' ><i className="fab fa-facebook-f me-3" ></i></a>
                            <a href="#" className='text-decoration-none text-light' ><i className="fab fa-twitter me-3" ></i></a>
                            <a href="#" className='text-decoration-none text-light' ><i className="fab fa-instagram me-3" ></i></a>
                            <br />
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <h5 className="display-6 ">Site links</h5>
                                    <hr />
                                    <ul className="list-unstyled">
                                        <li><a href="#" className='text-decoration-none text-light' >Privacy Policy</a></li>
                                        <li><a href="#" className='text-decoration-none text-light' >Shipping Details</a></li>
                                        <li><a href="#" className='text-decoration-none text-light' >Offers Coupons</a></li>
                                        <li><a href="#" className='text-decoration-none text-light' >Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <hr/>

                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <p >&copy; 2024 Organic Store. All rights reserved.</p>
                                </div>
                            </div>
                    </div>
                    </div>
            </footer>
        </div>
    );
}

export default Footer;