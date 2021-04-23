import React, { createContext, useContext, useState, useCallback } from "react";

interface IContext {
  orderForm: IProduct[] | undefined;

  updateOrderForm: (product: IProduct) => void;
}

const OrderFormContext = createContext<IContext>({} as IContext);
// eslint-disable-next-line
export const OrderFormProvider: React.FC = ({ children }) => {
  const [orderForm, setOrderForm] = useState<IProduct[] | undefined>([]);
  console.log(orderForm);

  const updateOrderForm = useCallback(async (products) => {
    setOrderForm(products);
  }, []);

  return (
    <OrderFormContext.Provider value={{ orderForm, updateOrderForm }}>
      {children}
    </OrderFormContext.Provider>
  );
};
// eslint-disable-next-line
export const useOrderForm = () => {
  const context = useContext(OrderFormContext);
  return context;
};
