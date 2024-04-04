import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [users,setUsers]=useState({});
    const getUsersData=(e)=>{
        setUsers({...users,[e.target.name]:e.target.value})
        console.log(users);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("users",users);
        dispatch( createUser(users))
        //here we will built a function which is created in the slice

        navigate('/read')
    }
  return (
    <div>
        <form className='w-50 mx-auto my-5'  onSubmit={handleSubmit}>

  <div className="mb-3">
    <label   className="form-label">Name</label>
    <input type="text" className="form-control" name="name"  onChange={getUsersData}  />
   </div> 

   <div className="mb-3">
    <label   className="form-label">Email address</label>
    <input type="text" className="form-control" name='email'  onChange={getUsersData}  />
   </div>

  <div className="mb-3">
    <label   className="form-label">age</label>
    <input type="text" className="form-control" name="age" onChange={getUsersData} />
  </div>
   


  <div className="mb-3 form-check">
    <input name="gender" type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label"  >male</label>
  </div> <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label  name="gender" className="form-check-label"  >female</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Create