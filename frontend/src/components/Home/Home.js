import Navbar from "../Navbar/Navbar";
import '../Home/HomeStyle.scss';
import ImageCarousel from "../Carousel/Carousel";
import {useEffect, useState} from "react";
import axios from "axios";
import LatestProduct from "../LatestProduct/LatestProduct";

function Home(){
    const [categories, setCategories] = useState([]);
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect( () => {
        axios.get(categoryUrl).then((res) =>{
            if(res.data.status){
                setCategories(res.data.data);
            }else {
                alert(res.data.message);
            }
        }).catch((err) => {
            console.log(err);
        });
        axios.get(latestProductsUrl,).then((res) => {
            if(res.data.status){
                setLatestProducts(res.data.data);
            }else {
                alert(res.data.message);
            }
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    const categoryUrl = 'http://localhost:3000/category/list';
    const latestProductsUrl = 'http://localhost:3000/product/list-latest';
    return (
        <div className="home">
            <Navbar/>
            <ImageCarousel/>
            <div className="latest-products">
                <h1>Latest Products</h1>
                <hr/>
                <div className="sortings">
                    {
                        categories.map((category) => {
                            return <p key={category._id} >{category.name}</p>
                        })
                    }
                </div>
                <div className="latest-products-items">
                    {
                        latestProducts.map((product) => {
                            return <LatestProduct key={product._id} product={product}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;