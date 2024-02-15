import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AddCategory = () => {
    const [category,setCategory] = useState('')
    const navigate = useNavigate('/Dashboard')
    const navigate2 = useNavigate('/Admin')
    const handleUpload = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/addcategory',{
            category
        }).then(res=>{
            console.log("added")
            navigate('/Dashboard')
        })
    }
    useEffect(()=>{
        if(!sessionStorage.getItem("adminName")){
            navigate2('/Admin')
        }
    },[])
    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className="fw-light">Add Product</h1>
            <form action="" className="w-50">
                <label className="form-label">Catogery Name</label>
                <input type="text" name="Catogery" className="form-control" placeholder={'please be carefull we adding new category'} onChange={(e) => {
                    setCategory(e.target.value)
                }} />
                <button className="btn btn-primary mt-4 w-100" onClick={handleUpload}>Add</button>
            </form>
        </div>
    );
}

export default AddCategory;