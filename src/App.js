import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/card/Card";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div >

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
          "Se me chingo todo, no me deja ver nada"
        }
        img={
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F11%2Fadidas-originals-yeezy-boost-350-v2-beluga-2-0-hbx-raffle-01.jpg?q=75&w=800&cbr=1&fit=max"
        }
        btnText={"Ver mas"}
      />
    </div>
  );
}
export default App;
