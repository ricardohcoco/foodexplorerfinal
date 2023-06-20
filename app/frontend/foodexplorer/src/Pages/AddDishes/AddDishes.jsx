import Home from '../HomeDishes/Home';

function AddDishesPage() {
  const admin = true;

  return (
    <div>
      <Home admin={admin} />
    </div>
  );
}

export default AddDishesPage;
