import cepApi from "../services/cepApi.js";

const cepController = {
    
    show: async (request, response) => {
        const { codigo } = request.params;
        const { data: endereco } = await cepApi.get(`/cep/v2/${codigo}`);

        response.json(endereco);
    },
}

module.exports = cepController;