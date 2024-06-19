import axios from "axios";

const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api";

const getCountries = () => {
  const res = axios.get(`${BASE_URL}/all`);
  return res.then((res) => res.data);
};

export { getCountries };
