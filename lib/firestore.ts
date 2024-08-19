// lib/firestore.ts
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addProperty = async (property: any) => {
  const docRef = await addDoc(collection(db, "properties"), property);
  return docRef.id;
};

export const getProperties = async () => {
  const querySnapshot = await getDocs(collection(db, "properties"));
  return querySnapshot.docs.map(doc => doc.data());
};
