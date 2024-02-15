// import logo from './logo.svg';
import '../style/dash.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
function Dashboard() {
  const [data, setData] = useState([]);
  const navigate =useNavigate('/Dashboard')
  const handleDelete = (id)=>{
    axios.post('http://localhost:5000/delete',{id})
    .then((response) => {
      navigate('/Dashboard')
    })
  }
  useEffect(()=>{
    if(!sessionStorage.getItem("adminName")){
      navigate('/Admin')
    }
    axios.get("http://localhost:5000/fetch").then(
      (response) => {
        console.log(response.data);
        setData(response.data);
      }
    )
  },[data])
  return (
    <div>
      <Navbar/>

      <div className='container-fluid dash' >
        <h3 className='display-6 text-center mb-3' > Our Dasboard For Products</h3>
        <div className='text-center'>
      <Link className='btn btn-primary me-3' to={'/AddProudct'}>Add Product</Link>
      <Link className='btn btn-primary me-3' to={'/AddCategory'}>Add Category</Link>
      <Link className='btn btn-primary me-3' to={'/orders'}>Check Orders</Link>
      <Link className='btn btn-primary me-3' to={'/homecontrol'}>Home Categories control</Link>
      </div>
        <table className="table table-hover table-responsive">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Catogery</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      data && data.map((product)=>{
        return(<><tr>
        <td><img className='image' src={`http://localhost:5000/images/`+product.image}></img></td>
        <td>{product.title}</td>
        <td>{product.price}$</td>
        <td>{product.description.slice(0.60)}</td>
        <td>{product.catogery}</td>
        <td className='btns' >  <button className='btn btn-danger mr-2' onClick={()=>{
          handleDelete(product.id)
        }} >Delete</button></td>
      </tr>
      </>)
      })
    }
  </tbody>
</table>
      </div>
    </div>
  );
}

export default Dashboard;
