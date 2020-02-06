const axios = require('axios');
const url = `https://economia.awesomeapi.com.br/all/USD-BRL`;

const getCotacaoApi = (data) => axios.get(url);
const extractCotacao = res => res.data.USD.bid;
const getCotacao = async() => {
  try {
    const res = await getCotacaoApi('');
    const cotacao = extractCotacao(res);
    return cotacao;
  }catch(err){
    return ''
  }
};

module.exports = {
  getCotacao,
  extractCotacao
};