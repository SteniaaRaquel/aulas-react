import { useState } from "react";
import "./App.css";
import Banner from "./componentes/Banner/Banner";
import Card from "./componentes/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Banner imagem="https://irp.cdn-website.com/33406c6e/dms3rep/multi/cuscuz-e4bf1d4e.jpg" />
      <Banner
        imagem="https://receitanatureba.com/wp-content/uploads/2022/01/cuscus-com-ovo.jpg"
        legenda="Cuscuz com ovo"
      /> */}
      <Card/>
    </>
  );
}

export default App;
