import React from 'react';
import '../Carousel/CarouselStyle.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../Product/Product";
import { productData, responsive } from "../../data";
const product = productData.map((item) => (
    <Product
        key={item.id}
        name={item.name}
        url={item.imageUrl}
        price={item.price}
        description={item.description}
    />
));
const ImageCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel responsive={responsive} showDots={true}>
                {product}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
