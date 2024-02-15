import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddProudct() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [catogery, setCatogery] = useState("")
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null);
  const [data,setData] = useState('')
  const navigate =useNavigate('/Dashboard')
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }
  const handleUpload = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description)
    formData.append('price', price);
    formData.append('catogery', catogery);

    axios.post('http://localhost:5000/upload', formData)
      .then((response) => {
        console.log(response.data);
        navigate('/Dashboard')
      })
      .catch((error) => {
        console.error(error);
      });
    };
    const getdata = ()=>{
      axios.get('http://localhost:5000/catogries').then(res=>{
        setData(res.data)
        console.log(data)
      }).catch(err=>{
        console.log(err)
      })
    }
    useEffect(()=>{
      if(!sessionStorage.getItem("adminName")){
        navigate('/Admin')
      }else{
        getdata()
      }
      
    },[])
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="fw-light">Add Product</h1>
      <form action="" encType="multipart/form-data">
      <label className="form-label">Title</label>
      <input type="text" name="title" className="form-control" onChange={(e) => {
          setTitle(e.target.value)
        }} />
        <label className="form-label">Description</label>
        <input type="text" name="description" className="form-control" onChange={(e) => {
          setDescription(e.target.value)
        }} />
        <label className="form-label">Price</label>
        <input type="number" name="price" className="form-control" onChange={(e) => {
          setPrice(e.target.value)
        }} />
        <label className="form-label">catogery</label>
        <select class="form-select" onChange={(e=>{
          setCatogery(e.target.value)
        })} aria-label="Default select example">
          <option selected>Select A catogery</option>
          {
            data && data.map(catogery1=>(
              <option value={catogery1.catogeries}>{catogery1.catogeries}</option>
            ))
          }
        </select>
      <input type="file" className=" form-control mt-3" onChange={handleFileChange} />
      <button className="btn btn-primary mt-4 w-100" onClick={handleUpload}>Add</button>
      </form>
    </div>
  );
}
export default AddProudct;
