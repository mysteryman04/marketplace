export const openProductDetail = (productId) => {
    return {
        type: 'OPEN_PRODUCT_DETAIL',
        payload: productId
    }
}

export const closeProductDetail = () => {
    return {
        type: 'CLOSE_PRODUCT_DETAIL'
    }
}