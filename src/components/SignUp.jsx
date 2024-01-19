import React from 'react'
import styles from '../styles/SignUp.module.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className={styles.signUp}>
        <form className={styles.signUpForm}>
            <h1>Please Register you details!</h1>
            <input type="text" name="" id="" placeholder='Username'/>
            <input type="email" name="" id="" placeholder='Mail Address'/>
            <input type="tel" name="" id="" placeholder='Contact Number'/>
            <input type="password" name="" id="" placeholder='Password'/>
            <button type="submit">Sign Up</button>
            <p>Already have an Account? <Link to="/login">Login</Link></p>
        </form>
    </div>
  )
}

export default SignUp