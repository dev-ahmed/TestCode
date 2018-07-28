import magnetAPi from './MagentoAPI';
import { endpoints } from '../constants/endpoints';

const getAllProducts = () => magnetAPi.get(endpoints.products);

export default {
  getAllProducts,
};
