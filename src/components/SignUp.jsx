import React from 'react'
import styles from '../styles/SignUp.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/Logo.png'

const SignUp = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.signUp}>
        <div className={styles.logo}>
          <img src={Logo} alt="" onClick={()=>navigate("/")}/>
        </div>
        <form className={styles.signUpForm}>
            <h1>Please Register your details!</h1>
            <input type="text" name="" id="" placeholder='Username'/>
            <input type="email" name="" id="" placeholder='Mail Address'/>
            <input type="tel" name="" id="" placeholder='Contact Number'/>
            <input type="password" name="" id="" placeholder='Password'/>
            <label htmlFor="">Select your role:</label>
        <select name="" id="">
            <option value="">Admin</option>
            <option value="">Viewer</option>
        </select>
            <button type="submit">Sign Up</button>
            <p>Already have an Account? <Link to="/login">Login</Link></p>
        </form>
    </div>
  )
}

export default SignUp