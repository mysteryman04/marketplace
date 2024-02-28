import {useEffect, useState} from "react";
import axios from "axios";
import './LatestProductStyle.scss';
function LatestProduct(props) {
    const [image, setImage] = useState('');

    useEffect(() => {
        const getImageByName = async () => {
            const res = await axios.get(`http://localhost:3000/file/${props.product.imageUrls[0]}`,{responseType: 'blob'});
            const imageUrl = URL.createObjectURL(res.data);
            setImage(imageUrl);
        }
        getImageByName()
    }, [props.product.imageUrls[0]]);
    return (
        <div className="item">
            <img src={image} alt={props.product.title}/>
            <p>{props.product.title}</p>
            <p><strong>Price: </strong> {props.product.price.amount} {props.product.price.currency}</p>
            <button>Add to cart</button>
            <button>Details</button>
        </div>
    );
}

export default LatestProduct;