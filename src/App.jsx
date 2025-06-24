import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/CheckOutFrom/CheckoutForm";
import UploadProducts from "./components/UploadProducts/UploadProducts";
import { CartProvider } from "./Context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/admin/upload" element={<UploadProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2 style={{ textAlign: "center" }}>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </CartProvider>
  );
};

export default App;
