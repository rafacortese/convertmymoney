const axios = require('axios');
const url = `https://economia.awesomeapi.com.br/all/USD-BRL`;

const getCotacaoApi = (data) => axios.get(url);
const extractCotacao = res => res.data.USD.ask;
const getCotacao = async() => {
  const res = await getCotacaoApi('');
  const cotacao = extractCotacao(res);
  return cotacao;
};

module.exports = {
  getCotacao,
  extractCotacao
};