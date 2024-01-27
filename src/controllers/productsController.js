
import productApi from "../services/productApi.js";

const productsController = {

    index: async (request, response) => {
        const products = await productApi.get(); 

        response.json({products});
    },

    show: async (request, response) => {
        const {idProducts} = request.params;
        const products = await productApi.get(idProducts); 

        response.json({products});
    },
}

module.exports = productsController;