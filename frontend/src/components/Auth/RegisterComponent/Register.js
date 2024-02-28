import './RegisterStyle.scss';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const url = 'http://localhost:3000/register';
    const navigate = useNavigate();

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
                navigate('/login');
            }
            else {
                alert(data.message)
                setUsername('')
                setPassword('')
            }
        }).catch((err) => {
            alert('Server error')
            setUsername('')
            setPassword('')
        });
    }
    return (
        <div className="register-container" >
            <form>
                <h1>Registration</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Username" required
                       onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required
                       onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Register</button>
                <p>Already have account? <span onClick={() => navigate('/login')}>Login</span></p>
            </form>
        </div>
    )
}

export default Login;