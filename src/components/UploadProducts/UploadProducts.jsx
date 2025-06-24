import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { productos } from "../../Data/products";

const UploadProducts = () => {
const upload = async () => {
    const productosRef = collection(db, "Productos"); 

    for (let prod of productos) {
      const { id, ...productData } = prod; // Excluye el id si lo hay

    try {
        await addDoc(productosRef, productData);
        console.log("Producto subido:", productData.nombre);
    } catch (error) {
        console.error("Error subiendo", productData.nombre, error);
    }
    }
};

return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
    <button onClick={upload}>Subir productos a Firestore</button>
    </div>
);
};

export default UploadProducts;