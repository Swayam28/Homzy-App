import './signin.css'
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <>
        <div className='scontainer'>
            <img src='../imgs/signin/2.jpg' alt='img' className='simg'></img>

            <div className='sform'>
                <h1>Login Here</h1>
                <div>
                    <i className='fa fa-user'></i>
                    <input placeholder='Username' className='inputE'/>
                </div>
                <div>
                    <i className='fa fa-lock'></i>
                    <input placeholder='Password' className='inputE'/>
                </div>
                <div>
                    <section>
                       <input type={"checkbox"}></input>
                        &nbsp;Remember Me?
                    </section>
                    <Link to='/home'><button >Log in</button></Link>
                </div>
                <p>Already not registered with us? <Link to='/register'><span>Click here</span></Link></p>
            </div>
        </div>
        </>
    )
}