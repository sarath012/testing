import React, { useState } from 'react';
import { appContext } from "./AppContext";

export const ShopCartContext = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [sortArray, setSortArray] = useState("");
    const [titleFilter,setTitleFilter] = useState("");
    const [filter, setFilter] = useState({
      brand: [],
      category: [],
      stock: true
    })
  
    return (
        <appContext.Provider
          value={{
            isLoggedIn,
            setIsLoggedIn,
            selectedProduct,
            setSelectedProduct,
            sortArray,
            setSortArray,
            titleFilter,
            setTitleFilter,
            filter, 
            setFilter
          }}
        >
          {children}
        </appContext.Provider>
    );
}
