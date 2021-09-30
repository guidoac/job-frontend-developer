const mutations = {
    changeAllCategories (state, categories) {
        state.allCategories = categories
    },
    changeProductsInCategory (state, products) {
        state.currentCategory.products = products
    },
    changeCurrentCategory (state, categoryId) {
        state.currentCategory.title = categoryId
    }
}

export default mutations;