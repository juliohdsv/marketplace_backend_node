import productsApi  from "../services/productsApi.js";

const productsController = {

    index: async (request, response) => {
        
        const { data } = await productsApi.get("/"); 
        if(!data){
            return response.status(400).json({err: "Loading data error"});
        };

        return response.status(200).json(data);
    },

    show: async (request, response) => {

        const { id } = request.params;
        const { data } = await productsApi.get(`/${id}`); 

        if(!data){
            return response.status(400).json({err: "Loading data error"});
        };

        return response.status(200).json(data);
    },
}

export default productsController;