// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import "../style/About.css"
import Navbar from "./Navbar";
import imageabout from "../assets/about.jpg"
import leaf from "../assets/basil-leaf.png";
const About = () => {
    return (
        <div className="">
            <Navbar />
            <div className='position-relative'>
                <div className='header d-flex justify-content-center align-items-center'>
                    <h1 className='text-center fw-bolder' id='h'>About US</h1>
                </div>
                <div className='position-absolute mt-5 top-50  translate-middle-x start-50 d'>
                    <img src={leaf} alt="" />
                </div>
            </div>
            <div className="part-one  bg-light text-dark mb-5 mt-5">
                <div className="row container justify-content-between m-auto">
                    <div className="col-lg-6">
                        <h1>We Are Your Favourite Store.</h1>
                        <p>Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae.
                            Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur
                            numqu.
                            Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere.
                            Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.
                        </p>
                    </div>
                    <div className="col-lg-5 text-center">
                        <img src={imageabout} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="number  text-light">
                <div className="container-fluid d-flex flex-wrap justify-content-center gap-4 pt-5 pb-5 m-auto">
                    <div style={{width:"300px"}} > <h5 className="text-center">Numbers Speak For <br/> Themselves!</h5> </div>
                    <div style={{width:"300px"}} > <h5 className="text-center">5,000+ <br /> Curated Products</h5> </div>
                    <div style={{width:"300px"}} > <h5 className="text-center">800+ <br /> Curated Products</h5></div>
                    <div style={{width:"300px"}} > <h5 className="text-center">40+ <br /> Product Categories</h5></div>
                </div>
            </div>
        </div>
    );
}

export default About;