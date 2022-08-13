import { IProduct } from '@redux/slices/product/products.interface';

const calcTotalPrice = (items: IProduct[]) => {
  return items.reduce((sum, obj) => Number(obj.price) + Number(sum), 0);
};

export default calcTotalPrice
