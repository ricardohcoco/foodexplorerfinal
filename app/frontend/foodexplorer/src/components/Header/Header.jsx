import { ContainerHeader } from "./styles";

export function HeaderComponent({dataDishes}) {
  return (
    <ContainerHeader>
      
      <div className="header-container">
        <h2>food explorer</h2>
      
          <input type="text" placeholder="Busque por pratos ou ingredientes" />

        <button className="newdishe" type="submit">Novo prato</button>
        <button className="botaodesair" type="submit">Sair</button>
      </div>  
      
    </ContainerHeader>
  );
}
