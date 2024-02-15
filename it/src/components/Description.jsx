import img1 from "../assets/orage-juice-kariz-300x300.jpg"
import img2 from "../assets/pulses-300x300.jpg"
import img3 from "../assets/orage-juice-kariz-300x300 (1).jpg"
import "../style/decription.css"
export default function Description() {
    return (
        <div className="">
            <ul className="nav nav-tabs pt-3">
                <li className="nav-item">
                    <a className="nav-link active" style={{color: 'green', background: "rgba(236, 236, 236, 0.658)"}} aria-current="page" href="#">Description</a>                    
                </li>
            </ul>
            <br></br>
            <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
            <h2>Related products</h2>
            <div className="cardss p-3">
            <div className="products">
                    <img className="product-img" src={img3} alt="product"></img>
                    <p className="gray">Juice</p>
                    <h4>Fresh Orange Juice</h4>
                    <h6>£18.00</h6>
                </div>
            <div className="products">
                    <img className="product-img" src={img2} alt="product"></img>
                    <p className="gray">Groceries</p>
                    <h4>Pulses From Organic Farm</h4>
                    <h6>£15.00</h6>
                </div>
                <div className="products">
                    <img className="product-img" src={img1} alt="product"></img>
                    <p className="gray">Groceries</p>
                    <h4>Handpicked Red Chillies</h4>
                    <h6>£19.00</h6>
                </div>
            </div>
        </div>
    )
}