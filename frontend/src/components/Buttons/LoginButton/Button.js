import {useNavigate} from "react-router-dom";

function Button(props){
    const navigate = useNavigate();
    return (
        <button style={{
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid #9aaab3',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px',
            width: '100px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '15px',
            outline: 'none',
            transition: '0.5s',
            ':hover': {
                backgroundColor: '#9aaab3',
                color: 'white'
            }
        }} onClick={() => navigate(`/${props.link}`)} >{props.text}</button>
    );
}


export default Button;