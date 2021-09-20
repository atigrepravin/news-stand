const axios = require('axios');
const { OPTIONS } = require("../config");

const everything = async (req, res) => {
    try {
       const result = await axios.get(`${OPTIONS.API_HOST}/everything`, {
            params: {...req.query, apiKey: OPTIONS.API_KEY }
        })
        res.set('Cache-Control', 'private, max-age=900, stale-while-revalidate=900');
        return res.send(result.data);    
    } catch (error) {
        return res.send({message: 'Something went wrong'});            
    }
}

module.exports = {
    everything
}