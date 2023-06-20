import React, { useEffect, useState } from 'react';
import HomeDishes from '../../components/HomeDishes/HomeDishes';
import axios from 'axios';
import CardsDishes from '../../components/CardsDishes/CardsDishes';
import { ContainerHeader } from '../../components/Header/styles';
import { Footer } from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { ContainerHomePage } from './styles';
import "./styles.css";

function Home({ admin }) {
  const [dataDishes, setDataDishes] = useState(['']);
  const [valueSearch, setValueSearch] = useState('');
  const navigate = useNavigate();

  const fetchApi = async () => {
    const { data } = await axios.get('http://localhost:3000/dishes/');
    setDataDishes(data);
    return data;
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const onChangeTarget = ({ target }) => {
    setValueSearch(target.value);
  };

  const teste = (valueSearch) => {
    if (valueSearch === '') {
      return dataDishes;
    }

    const result = dataDishes.filter(
      (e) =>
        e.name.toLowerCase().includes(valueSearch.toLowerCase()) ||
        e.ingredients.toLowerCase().includes(valueSearch.toLowerCase())
    );
    console.log(result);
    return result;
  };

  const result = teste(valueSearch);

  const searchDrink = () => {
    try {
      const resultbebidas = dataDishes.filter(
        (e) => e.category.toLowerCase() === 'bebidas'
      );
      return resultbebidas;
    } catch (error) {
      return '';
    }
  };

  const searchDessert = () => {
    try {
      const resultbebidas = dataDishes.filter(
        (e) => e.category.toLowerCase() === 'sobremesas'
      );
      return resultbebidas;
    } catch (error) {
      return '';
    }
  };

  const searchMeal = () => {
    try {
      const resultbebidas = dataDishes.filter(
        (e) => e.category.toLowerCase() === 'refeições'
      );
      return resultbebidas;
    } catch (error) {
      return '';
    }
  };

  const resultMeal = searchMeal();
  const resultDessert = searchDessert();

  const resultbebidas = searchDrink();

  const newDishe = (e) => {
    e.preventDefault();
    navigate('/add-dishes-post');
  };

  const exit = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      <ContainerHeader>
        <header className="header-container">
          <h2>food explorer</h2>

          <input
            value={valueSearch}
            onChange={onChangeTarget}
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
          {admin && (
            <button className="newdishe" onClick={newDishe} type="submit">
              Novo Prato
            </button>
          )}
          <button className="botaodesair" onClick={exit} type="submit">
            Sair
          </button>
        </header>
      </ContainerHeader>
      <ContainerHomePage>
        <div className="container-home">
          <div className="header">
            <div className="imghome">
              <img
                src="./src/assets/images/imagemhome.png"
                alt="Imagem de macarons"
              />
            </div>
            <div className="texthome">
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>
        </div>
        </ContainerHomePage>

      {dataDishes.length === 0 ? (
        <div>
          <h1>Nenhum prato cadastrado</h1>
        </div>
      ) : (
      
        <div>
          <h1 className="title">Todas</h1>
          <CardsDishes dishes={result} />
        </div>
        
      )}
      
      {
        <div>
          <h1 className="title">Refeições</h1>
          <CardsDishes dishes={resultMeal} />
        </div>
      }

      {
        <div>
          <h1 className="title">Bebidas</h1>
          <CardsDishes dishes={resultbebidas} />
        </div>
      }

      {
        <div>
          <h1 className="title">Sobremesas</h1>
          <CardsDishes dishes={resultDessert} />
        </div>
      
      }
      
      <Footer />
    </div>
  );
}

export default Home;
