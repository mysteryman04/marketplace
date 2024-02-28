import { useEffect, useState } from "react";
import axios from "axios";
import './ProductModalStyle.scss';

export default function MainProductModal(props) {
    const productId = props.productId;
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3000/product/${productId}`).then((res) => {
            if(res.data.status){
                setProduct(res.data.data);
            }else {
                alert(res.data.message);
            }
        }).catch((err) => {
            console.log(err);
        });
    }, [productId]); // Added chosenProduct as a dependency

    return (
        <div className="modal-window">
            <ProductModal product={product}/>
        </div>
    );
}


function ProductModal(props) {
    const product = props.product;
    console.log(product);
    const [image, setImage] = useState('');
    useEffect(() =>{
        axios.get(`http://localhost:3000/file/${product.imageUrls[0]}`,{responseType: 'blob'}).then((res) => {
            const imageUrl = URL.createObjectURL(res.data);
            setImage(imageUrl);
        }).catch((err) => {
            console.log(err);
        });
    },[product.imageUrls[0]]); // Added product.imageUrls[0] as a dependency
    return (
        <div className="modal-window">
            <div className="modal-content">
                <h1>{product.title}</h1>
                <img src={image} alt={product.title}/>
                <p>{product.description}</p>
                <p><strong>Price: </strong> {product.price.amount} {product.price.currency}</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
}