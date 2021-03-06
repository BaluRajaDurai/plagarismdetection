import * as React from 'react';
import { Link } from "react-router-dom";
import undraw_studentlogin from '../Assets/undraw_studentlogin.svg';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import { useForm } from "react-hook-form";
import Divider from '@mui/material/Divider';

const StudentLogin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        console.log(data);
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:5000/studentdetail', requestOptions)
        .then((response) => response.json())
        .then((d) => {
          console.log(d)

        }).catch(function (error) {
          console.log(error);
      })
    } 
    // console.log(errors)


    return (

        <div class="container-fluid">
            <div class="row">
                <div class="col-6 mt-5" >
                    <img src={undraw_studentlogin} height={600} alt='welcome'/>
                </div>
                <div class="col-6 mt-5 ">
                    <div class="mt-5 " >   
                        <div className="App__form" >
                            <h1 class="fw-bolder mt-5 mb-4" style={{ color:'#6C63FF'}}>
                                Student Login
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField 
                                id="outlined-basic" 
                                name="name" 
                                label="Student Name" 
                                variant="outlined" 
                                fullWidth 
                                {...register("name", { required: "Student Name is required." })}
                                error={Boolean(errors.name)}
                                helperText={errors.name?.message}
                                />
                                
                                <TextField 
                                id="outlined-basic"
                                label="E-mail"
                                variant="outlined"
                                fullWidth
                                name="email"
                                {...register("email", { required: "E-mail Address is required.",pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "This is not a valid email",
                                    }, })}
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message}
                                />

                                <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                fullWidth
                                name="password"
                                {...register("password", { required: "Password is required." })}
                                error={Boolean(errors.password)}
                                helperText={errors.password?.message}
                                />
                    
                                <Button variant="contained" color="primary" type="submit" className="btns">
                                    Sign In
                                </Button>
                                <div class="mt-3">
                                    <Divider />
                                </div>   
                                <div class="mt-3 text-center">
                                    <Link to='/plagarismdetection/studentsignup'  style={{ color:'#6C63FF', textDecoration: 'none'}}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default StudentLogin;