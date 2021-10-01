const mutations = {
    changeAllCategories (state, categories) {
        state.allCategories = categories
    },
    changeProductsInCategory (state, products) {
        state.currentProductsInCategory = products
    },
    changeCurrentCategory (state, categoryId) {
        state.currentCategory = categoryId
    }
}

export default mutations;