import React, { useState, useEffect } from 'react';
// import './sign.css';
import { FiUserCheck } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';



const Sign = () => {
    const [data, setdata] = useState({
        name: "",
        email: "",
        number: "",
        password: ""
    })

    const [err, seterr] = useState(null)

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setdata(prev => {
            return (
                {
                    ...prev, [name]: value
                }
            )
        }
        )
        if(data.name === ''){
            seterr("plss enter name")
        }else if(data.name.length <= 3){
            seterr("name must be more than 3 character")
        }else{
            seterr("correct");
        }

    }

    



    return (
        <div className='bg'>
            <div className='container'>
                <div className='box'>
                    <h3>Signup</h3>
                    <form>
                        <div className='mt-3'>
                            <lable>Enter Name:</lable>
                            <div className="d-flex align-items-center">
                                <FiUserCheck className='icons-form' />
                                <input className="form-control" type="text" placeholder="enter name" autocomplete="off" name="name" value={data.name} onChange={(e) => handleChange(e)} />
                            </div>
                            <p className={err == "plss enter name" ? "text-danger" : err == "name must be more than 3 character" ? "text-danger" : "text-success"}>{err}</p>
                        </div>

                        <div className='mt-3'>
                            <lable>Enter email:</lable>
                            <div className="d-flex align-items-center">
                                <MdAlternateEmail className='icons-form' />
                                <input className="form-control" type="emai" placeholder="enter email" autocomplete="off" name="email" value={data.email} onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        <div className='mt-3'>
                            <lable>Enter contact number:</lable>
                            <div className="d-flex align-items-center">
                                <BsTelephone className='icons-form' />
                                <input className="form-control" type="phone" autocomplete="off" placeholder="enter number" name="number" value={data.number} onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        <div className='mt-3'>
                            <lable>Enter password:</lable>
                            <div className="d-flex align-items-center">
                                <RiLockPasswordLine className='icons-form' />
                                <input className="form-control" type="password" placeholder="enter password" autocomplete="off" name='password' value={data.password} onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        <div className='mt-3'>
                            <button type="submit" className='btn btn-primary' >Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}


export default Sign;