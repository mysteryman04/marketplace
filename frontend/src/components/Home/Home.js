import Navbar from "../Navbar/Navbar";
import '../Home/HomeStyle.scss';
import ImageCarousel from "../Carousel/Carousel";
import {useEffect, useState} from "react";
import axios from "axios";
import LatestProduct from "../LatestProduct/LatestProduct";
import {useSelector} from "react-redux";
import MainProductModal from "../ProductModal/ProductModal";

function Home(){
    const [categories, setCategories] = useState([]);
    const [latestProducts, setLatestProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const isProductDetailsOpen = useSelector((state) => state.products.isOpen);
    const selectedProductId = useSelector((state) => state.products.selectedProductId);
    console.log(isProductDetailsOpen);
    console.log(selectedProductId);
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
                            return <p onClick={() => setSelectedCategory(category._id) } key={category._id} >{category.name}</p>
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
            {
                isProductDetailsOpen ? <MainProductModal productId={selectedProductId}/> : null
            }
        </div>
    )
}

export default Home;