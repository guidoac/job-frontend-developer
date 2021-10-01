const getters = {
    getAllCategories: state => {
        return state.allCategories;
    },
    getCurrentCategory: state => {
        return state.currentCategory;
    },
    getCurrentCategoryProducts: state => {
        return state.currentProductsInCategory;
    }
}

export default getters