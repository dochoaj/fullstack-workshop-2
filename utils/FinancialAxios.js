import axios from 'axios'

const FinancialAxios = axios.create({
  baseURL: 'https://fintac-backend.herokuapp.com/api/v1/'
});

export default FinancialAxios