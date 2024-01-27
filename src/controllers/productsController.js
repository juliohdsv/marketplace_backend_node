import productsApi  from "../services/productsApi.js";

const productsController = {

    index: async (request, response) => {
        
        const { data } = await productsApi.get("/"); 
        if(!data){
            return response.status(400).json({err: "Loading data error"});
        };

        return response.json(data);
    },

    show: async (request, response) => {

        const { id } = request.params;
        const products = await productsApi.get(`/${id}`); 

        return response.json({products});
    },
}

export default productsController;