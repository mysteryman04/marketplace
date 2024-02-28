import './LoginStyle.scss';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const url = 'http://localhost:3000/login';

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === '' || password === ''){
            alert('You are not fill some data')
            return;
        }
        axios.post(url, {
            username: username,
            password: password
        }).then((res) => {
            const data = res.data;
            if(data.status){
                localStorage.setItem('token', data.data);
                window.location.href = '/';
            }
            else {
                alert(data.message)
                setPassword('')
                setUsername('')
            }
        }).catch((err) => {
            setPassword('')
            setUsername('')
            alert('Server error')
        });
    }
    return (
        <div className="login-container" >
            <form>
                <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Username" required
                       onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required
                       onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Login</button>
                <p>Already not have account? <span onClick={() => navigate('/register')} >Register</span> </p>
            </form>
        </div>
    )
}

export default Login;