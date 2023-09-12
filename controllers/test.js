const datamodel = require('../model/datamodel')
const axios = require('axios');


exports.convert_currency = async (req, res) => {
    //console.log(req.query)
    const amount = req.query.amount
    const symbol = req.query.symbol
    const convert = req.query.convert
    let response = null;
    new Promise(async (resolve, reject) => {
        try {
            // response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD',
            response = await axios.get(`https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=${amount}&symbol=${symbol}&convert=${convert}`, {
                headers: {
                    'X-CMC_PRO_API_KEY': '96c48188-a72a-4ad8-83ed-32d7badcadba',
                },
            });
        } catch (err) {
            response = null;
            // error
            console.log(err);
            reject(err);
        }
        if (response) {
            // success
            const json = response.data;
            // console.log(json);
            res.send(json)
            try {
                const data1 = new datamodel({
                    id: json.data.id,
                    symbol: json.data.symbol,
                    name: json.data.name,
                    amount: json.data.amount,
                    USD: json.data.quote.USD.price
                })
                const data2 = await data1.save()
                //console.log("Data stored in database\t",data2);
            }catch(err){
                console.log(err)
            }
            resolve(json);
        }
    });
}
