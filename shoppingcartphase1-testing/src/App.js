import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";
import { appContext } from "./Context/AppContext";
import { ShopCartContext } from "./Context/ShopCartContext";
import { ProtectedRoute } from "./ProtectedRoute";


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const [sortArray, setSortArray] = useState("");
  // const [titleFilter,setTitleFilter] = useState("");
  // const [filter, setFilter] = useState({
  //   brand: [],
  //   category: [],
  //   stock: true
  // })

  return (
    <div className="App">
      <ShopCartContext>
        <ProtectedRoute/>
      </ShopCartContext>
    </div>
  );
}

export default App;
