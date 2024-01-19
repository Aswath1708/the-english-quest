import React from 'react'
import styles from '../styles/Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className={styles.login}>
        <form className={styles.loginForm}>
        <h1>Welcome! Please Login.</h1>
        <input type="text" name="" id="" placeholder='Username'/>
        <input type="password" name="" id="" placeholder='Password'/>
        <label htmlFor="">Select your role:</label>
        <select name="" id="">
            <option value="">Admin</option>
            <option value="">Viewer</option>
        </select>
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/signup">Sign-Up</Link></p>
        </form>
    </div>
  )
}

export default Login