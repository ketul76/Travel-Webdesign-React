import React, { useState } from 'react';

function Forms() {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [tableData, setTableData] = useState([{}]);


  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    // tableData.push(userData);
    setTableData(userData);
    console.log("UserData" ,userData);
    console.log("TableData" ,tableData);
  };
  
  return (
    <>
      <div className='container-fluid p-5'>
        <div className='container'>
          <form onSubmit={submitHandle} className='text-center'>
            <h3>Contact Form</h3><br />
            <label>First Name:</label> &nbsp;
            <input className='w-50 p-1' type="text" placeholder="Enter Your First-Name" name="fname" value={userData.fname} onChange={changeHandler} />
            <br /><br />
            <label>Last Name:</label> &nbsp;
            <input className='w-50 p-1' type="text" placeholder="Enter Your Last-Name" name="lname" value={userData.lname} onChange={changeHandler} />
            <br /><br />
            <label >E-Mail:</label> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='w-50 p-1' type="email" placeholder="Enter Your Email" name="email" value={userData.email} onChange={changeHandler} />
            <br /><br />
            <label>Password:</label> &nbsp;
            <input className='w-50 p-1' type="password" placeholder="Enter Your Password" name="password" value={userData.password} onChange={changeHandler} /><br /><br />
            <input type="submit" value="Submit" />
            <br />
          </form>
        </div>
      </div>
      <table className='table text-center'>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>E-Mail</th>
          <th>Password</th>
        </tr>
        {tableData.map((item) => 
          {
            console.log("items" , item);
          <tr>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
          </tr>
          })}  
      </table>
    </>
  );
}

export default Forms;