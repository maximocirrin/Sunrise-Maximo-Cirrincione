import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/card/Card";


function App() {
  return (
    <div >

      <Navbar/>

      <Card
        titulo={"Hola soy componente"}
        descripcion={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta placeat veniam, quasi deserunt ipsam omnis excepturi qui amet laborum"
        }
        img={
          "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-10/GettyImages-1434610339%20%282%29.jpg?itok=Pher040Z"
        }
        btnText={"Ver mas"}
      />
      <Card
        titulo={"Otra card al pe"}
        descripcion={
          "Se me chingo todo, no me deja ver nada"
        }
        img={
          "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-10/GettyImages-1434610339%20%282%29.jpg?itok=Pher040Z"
        }
        btnText={"Ver mas"}
      />
    </div>
  );
}
export default App;
