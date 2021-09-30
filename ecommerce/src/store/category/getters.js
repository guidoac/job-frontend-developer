const getters = {
    getAllCategories: state => {
        return state.allCategories;
    },
    getCurrentCategory: state => {
        return state.currentCategory;
    }
}

export default getters