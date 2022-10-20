import React,{useState,useEffect} from 'react';
// import * from bootstrap;
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import api from '../data';
import { Link } from 'react-router-dom';
const Users= ()=>{
    const [users,setUser]=useState([]);
    useEffect(()=>{
      loadUsers();
    },[]);
    const loadUsers=async()=>{
        const res = await api.get("/data");
        // const result=await axios.get("http://localhost:3003/users");
        setUser(res.data);
    };
    return(
        <>
        <table class="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      {/* <th scope="col">Name</th> */}
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
  {users.map((user,index)=>(
    <tr>
        <th scope="row">{index+1}</th>
        {/* <td>{user.name}</td> */}
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          {/* <Link className='btn btn-primary' to='/users/:id'>View</Link> */}
          <Link className='btn btn-outline-primary' to={`/users/edit/:${user.id}`}>Update</Link>
          <Link className='btn btn-danger'>Delete</Link>

        </td>
    </tr>
  ))}
  </tbody>
</table>
        </>
    )
}

export default Users;