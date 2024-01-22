import React, { useEffect, useState } from "react";
import Home from "./components/pages/Home";
import "./App.css";
import { Auth } from "./components/Auth";
import { db, auth, storage } from "./config/firebase";
import { 
  getDocs, 
  collection, 
  addDoc, 
  deleteDoc, 
  updateDoc,
  doc,
} from 'firebase/firestore';
import { ref, uploadBytes } from "firebase/storage";

function App() {
  const [ProductList, setProductList] = useState([]);

  // New product State
  const [newProductName, setNewProductName] = useState("")
  const [newProductReference, setNewProductReference] = useState("")
  const [newProductCategory, setNewProductCategory] = useState("")
  const [newProductPrice, setNewProductPrice] = useState("")
  const [newProductQuantity, setNewProductQuantity] = useState("")
  const [newProductLocation, setNewProductLocation] = useState("")

  // Update Name State
  const [updatedName, setUpdatedName] = useState("")

  // File Upload State
  const [fileUpload, setFileUpload] = useState(null)

  const productCollectionRef = collection(db, "products");

  const getProductList = async () => {
    try {
      const data = await getDocs(productCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id,
      }));
      setProductList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const uploadFile = async () => {
    if (!fileUpload) return;
    const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
    try {
      await uploadBytes(filesFolderRef, fileUpload);
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);
  
  const onSubmitProduct = async () => {
    try {
      await addDoc(productCollectionRef, {
        name: newProductName, 
        referenceNumber: newProductReference, 
        category: newProductCategory, 
        price: newProductPrice, 
        quantity: newProductQuantity,
        location: newProductLocation,
        userId: auth?.currentUser?.uid,
      });
      
      getProductList();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);

    getProductList();
  }

  const updateProductName = async (id) => {
    const productDoc = doc(db, "products", id);
    await updateDoc(productDoc, { name: updatedName });

    getProductList();
  }


  return (
    <div className="App">
      <Auth/> 

      <div>
        <input 
          placeholder="Nom du produit..." 
          onChange={(e) => setNewProductName(e.target.value)} 
        />
        <input 
          placeholder="Référence..."
          onChange={(e) => setNewProductReference(e.target.value)} 
        />
        <input 
          placeholder="Catégorie..." 
          onChange={(e) => setNewProductCategory(e.target.value)} 
        />
        <input 
          placeholder="Prix..." type="number" 
          onChange={(e) => setNewProductPrice(e.target.value)} 
        />
        <input 
          placeholder="Quantité..." 
          onChange={(e) => setNewProductQuantity(e.target.value)} 
        />
        <input 
          placeholder="Location..." 
          onChange={(e) => setNewProductLocation(e.target.value)} 
        />
        <button onClick={onSubmitProduct}> Soumettre le produit</button>
      </div>
      <div>
        {ProductList.map((product) => (
          <div>
            <h1> {product.name} </h1>
            <p> Référence: {product.referenceNumber} </p>
            <p> Catégorie: {product.category} </p>
            <p> Prix: {product.price} </p>
            <p> Quantité: {product.quantity} </p>
            <p> Location: {product.location} </p>
          
            <button onClick={() => deleteProduct(product.id)}> Supprimer Produit</button>

            <input 
              placeholder="nouveau nom..." 
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <button onClick={() => updateProductName(product.id)}> Mettre à jour le nom</button>
          </div>
        ))}
      </div>

      <div>
        <input 
          type="file" 
          onChange={(e) => setFileUpload(e.target.files[0])} 
        />
        <button onClick={uploadFile}> Ajouter Image</button>
      </div>
    </div>
      
  );
};


export default App;
