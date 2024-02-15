import '../style/Contact.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import leaf from "../assets/basil-leaf.png";
function Contact() {
    return (
        <div className='main'>
            <Navbar/>
            <div className='position-relative'>
                <div className='header d-flex justify-content-center align-items-center'>
                    <h1 className='text-center fw-bolder' id='h'>Get In Touch</h1>
                </div>
                <div className='position-absolute mt-5 top-50  translate-middle-x start-50 d'>
                    <img src={leaf} alt="" />
                </div>
            </div>
            <div className="contact-info ">
                <div className="card">
                    <i className="card-icon far fa-envelope">
                        <img src={icon1} style={{ marginTop: '30px' }} alt="" />
                    </i>
                    <p style={{ marginTop: '10px' }}>+123 456 7890<br />+123 456 7890</p>
                </div>

                <div className="card">
                    <i className="card-icon far fa-envelope">
                        <img src={icon2} style={{ marginTop: '30px' }} alt="" />
                    </i>
                    <p style={{ marginTop: '15px' }}>info@example.com<br />support@example.com</p>
                </div>

                <div className="card">
                    <i className="card-icon far fa-envelope">
                        <img src={icon3} alt="" srcSet="" style={{ marginTop: '30px' }} />
                    </i>
                    <p style={{ marginTop: '20px' }}>1569 Ave, New York,<br />NY 10028, USA</p>
                </div>
            </div>

            <div class="container row m-auto mt-4">
                <div class="text-center col-12">
                    <h1 class="d-4 ">Frequently Asked Question!</h1>
                </div>
                <div class="accordion row gap-5 m-5 text-center" id="accordionPanelsStayOpenExample">
                    <div class="col-5">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse "
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
                                    adds the appropriate classes that we use to style each element. These classes control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
                                    CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item  ">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
                                    CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-1 ">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
                                    adds the appropriate classes that we use to style each element. These classes control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
                                    CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="accordion-item mt-1 ">
                            <h2 class="accordion-header" id="panelsStayOpen-headingfour">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne">
                                    Accordion Item #4
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapsefour" class="accordion-collapse collapse "
                                aria-labelledby="panelsStayOpen-headingfour">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
                                    adds the appropriate classes that we use to style each element. These classes control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
                                    CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-1 ">
                            <h2 class="accordion-header" id="panelsStayOpen-heading5">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapse5">
                                    Accordion Item #5
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapse5" class="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-heading5">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
                                    CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mt-1 ">
                            <h2 class="accordion-header" id="panelsStayOpen-heading6">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapse6" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapse6">
                                    Accordion Item #6
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapse6" class="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
                                    adds the appropriate classes that we use to style each element. These classes control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
                                    CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Contact;
