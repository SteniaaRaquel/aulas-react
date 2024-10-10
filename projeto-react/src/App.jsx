import "./App.css";
import Banner from "./componentes/Banner/Banner";
import Card from "./componentes/Card";
import Contador from "./componentes/Contador"
import Post from "./componentes/Post"
import { useState } from "react";

function App() {
  const [tema, setTema] = useState("white");
  
  function mudarTema(){
    setTema("gray")
  }

  return (
    <>
      {/* <Banner imagem="https://irp.cdn-website.com/33406c6e/dms3rep/multi/cuscuz-e4bf1d4e.jpg" />
      <Banner
        imagem="https://receitanatureba.com/wp-content/uploads/2022/01/cuscus-com-ovo.jpg"
        legenda="Cuscuz com ovo"
      />
      <Card/>  */}
      {/* <div style={{backgroundColor:tema, width:"100vw", height:"100vh"}}>
      <Contador mudarTema={mudarTema}/>
      </div> */}

      <Post/>
    </>
  );
}

export default App;
