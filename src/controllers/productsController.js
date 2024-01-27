
import productsApi  from "../services/productsApi.js";

const productsController = {

    index: async (request, response) => {
        
        const { data } = await productsApi.get("/"); 
        if(!data){
            return response.status(400).json({err: "Não foi possível carregar os dados"});
        };

        return response.json(data);
    },

    show: async (request, response) => {
        const {idProducts} = request.params;
        const products = await productsApi.get(idProducts); 

        response.json({products});
    },
}

export default productsController;