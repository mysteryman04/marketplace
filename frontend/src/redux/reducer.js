const initialState = {
    isOpen: false,
    selectedProductId: null
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'OPEN_PRODUCT_DETAIL':
            return {
                ...state,
                isOpen: true,
                selectedProductId: action.payload
            }
        case 'CLOSE_PRODUCT_DETAIL':
            return {
                ...state,
                isOpen: false,
                selectedProductId: null
            }
        default:
            return state
    }
}

export default productReducer