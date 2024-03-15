import axios from "axios";

const fetchProducts = async (query: string) => {
  const response = axios
    .get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((res) => {
      return res.data.results;
    });

  return response;
};

export default fetchProducts;
