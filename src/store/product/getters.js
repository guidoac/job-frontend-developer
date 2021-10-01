const getters = {
    getAllProducts: state => {
        return state.allProducts;
    },
    getProductById: state => id => {
        return state.allProducts.find(prod => prod.id == id);
    }
}

export default getters;