import { createContext } from "react";

import data from '../../data.json'

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {



const getProduct = (id) => {
    return data.filter(product => product.id === id)
} 

return (
    <ProductsContext.Provider
      value={{
        getProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}