import { useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

function AddDishes() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('ingredients', ingredients);
    formData.append('price', price);
    formData.append('category', category);

    axios
      .post('http://localhost:3000/dishes/', formData)
      .then((response) => {
        console.log(response.data);

        setImage(null);
        setName('');
        setIngredients('');
        setPrice(0);
        setCategory('');
      })
      .catch((error) => {
        console.error(error);
      });
  };


    const backPage = (e) => {
      e.preventDefault()
      navigate(-1)
    }
  return (
    <Container>
      <section>
        <h1>Inserir novo prato</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="image">Imagem:</label>
          <input type="file" id="image" onChange={handleImageChange} />

          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="ingredients">Ingredientes:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />

          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label htmlFor="category">Categoria:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""></option>
            <option value="refeições">Refeições</option>
            <option value="bebidas">Bebidas</option>
            <option value="sobremesas">Sobremesas</option>
          </select>

          <button type="submit">Enviar</button>
          <button onClick={backPage} type="submit">
            Voltar
          </button>
        </form>
      </section>
    </Container>
  );
}

export default AddDishes;
