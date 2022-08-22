import { ICart } from "@interfaces/cart.interface";
import { IOrder, IProductOrder } from "@interfaces/order.interface";
import { IProduct } from "@interfaces/product.interface";

export const addFieldCounterCart = (products: IProduct[], cartDB: ICart[]) => {
  const productsArrayWithCounter = products.map((product) => {
    const counterProductId = cartDB.filter(
      (cart) => cart.product_id === product.id
    )[0].counter;
    if (cartDB.find((cart) => cart.product_id === product.id)) {
      return {
        ...product,
        counter: counterProductId,
      };
    }
  });
  return productsArrayWithCounter;
};

export const addFieldCounterOrder = (
  products: IProduct[],
  orderDB: IOrder[] | IOrder
) => {
  if (Array.isArray(orderDB)) {
    const productOrderArray = orderDB.map((order) => order.products);

    const productsArrayWithCounter = productOrderArray.map((productOrderArr) =>
      productOrderArr.map((productOrder) => {
        const { id } = productOrder;
        const product = products.filter((product) => product.id === id)[0];
        return {
          ...product,
          counter: productOrder.counter,
        };
      })
    );
    return productsArrayWithCounter;
  }

  const productOrderArray = orderDB.products;
  const productsArrayWithCounter = productOrderArray.map((productOrder) => {
    const { id } = productOrder;
    const product = products.filter((product) => product.id === id)[0];
    return {
      ...product,
      counter: productOrder.counter,
    };
  });

  return productsArrayWithCounter;
};
