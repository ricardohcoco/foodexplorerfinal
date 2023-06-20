import React from "react"
import { ContainerHome } from "./styles"
import { ContainerHeader } from "../Header/styles"
import { ContainerFooter } from "../Footer/styles"
import { HeaderComponent } from "../Header/Header"

function HomeDishes() {
  return (
    <ContainerHome>
    <div className="container-home">
      <div className="header">
        <div className="imghome">
          <img 
            src="./src/assets/images/imagemhome.png" 
            alt="Imagem de macarons"/>
        </div>
        <div className="texthome">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </div>
    </div>
    <ContainerFooter />
    </ContainerHome>

  ) 
}
  
export default HomeDishes