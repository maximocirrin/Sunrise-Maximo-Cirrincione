import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/card/Card";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";


function App() {
  return (
    <Router >

      <Navbar/>
      <ItemListContainer/>

      <Card
        titulo={"Jordan 1 x Travis Scott"}
        descripcion={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta placeat veniam, quasi deserunt ipsam omnis excepturi qui amet laborum"
        }
        img={
          "http://d2r9epyceweg5n.cloudfront.net/stores/001/492/394/products/b4370dbc1-5a7a883285946ecee416228632320066-640-0.jpg"
        }
        btnText={"Ver mas"}
      />
      <Card
        titulo={"Yeezy 350 Beluga v2"}
        descripcion={
          "Creadas por keanye West, las beluga v2 son uno de los pares mas vendidos de la linea yeezy"
        }
        img={
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F11%2Fadidas-originals-yeezy-boost-350-v2-beluga-2-0-hbx-raffle-01.jpg?q=75&w=800&cbr=1&fit=max"
        }
        btnText={"Ver mas"}
      />

      <Routes>
        <Route path="/item/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>

      </Routes>
    </Router>
  );
}
export default App;

