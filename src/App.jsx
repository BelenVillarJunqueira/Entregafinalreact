import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "../src/Containers/ItemListContainer";
import ItemDetailContainer from "../src/Containers/ItemDetailContainer";



const App = () => {
  return (
    <>
      <NavBar />
      <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 style={{ textAlign: "center" }}>404 - Página no encontrada</h2>} />
      </Routes>
      </main>
    </>
  );
};

export default App;
