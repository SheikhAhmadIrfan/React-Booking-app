import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Login from '../login/Login'
import './register.css'
import Email from '../../components/email/Email'

const Register = () => {
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="logincontainer">
                <div className="loginwrapper">
                    <form>
                        <div className="emailopt">
                            <label htmlFor="text" className='labellogin'>Enter First-Name</label>
                            <input className="linp loginemail" type="text" name="text" placeholder='' />
                        </div>
                        <div className="emailopt">
                            <label htmlFor="text" className='labellogin'>Enter Last-Name</label>
                            <input className="linp loginemail" type="text" name="text" placeholder='' />
                        </div>
                        <div className="emailopt">
                            <label htmlFor="email" className='labellogin'>Email</label>
                            <input className="linp loginemail" type="email" name="email" placeholder='your@gmail.com' />
                        </div>
                        <div className="emailpass">
                            <label htmlFor='password' className='labellogin'>Password</label>
                            <input className="linp loginpassword" type="password" name="password" placeholder='******' />
                        </div>
                        <div className="emailpass">
                            <label htmlFor='password' className='labellogin'>Re-Enter Password</label>
                            <input className="linp loginpassword" type="password" name="password" placeholder='******' />
                        </div>
                        <div className="emailbtn">
                            <button className="loginbtn">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <Email />
        </div>
    )
}

export default Register