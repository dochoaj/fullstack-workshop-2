import FinancialAxios from './FinancialAxios'

const authentify = (token) => {
  const computedToken = `Bearer ${token}`;
  FinancialAxios.defaults.headers.common['AUTHORIZATION'] = computedToken;
  return FinancialAxios;
}

export default authentify;