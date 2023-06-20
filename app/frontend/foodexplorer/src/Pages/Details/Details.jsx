import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Login/Login"
import Register from "../Register/Register"
import Home from "../HomeDishes/Home"
import UserDishes from "../Dishes/Dishes"
import { Container} from './styles'
import AddDishesPage from "../AddDishes/AddDishes"
import AddDishes from "../../components/AddDishes/AddDishes"

function Details() {
  
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dishes" element={<UserDishes />} />
          <Route path="/add-dishes" element={<AddDishesPage />} />
          <Route path="/add-dishes-post" element={<AddDishes />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default Details
