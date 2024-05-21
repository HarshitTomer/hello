import { db, storage } from "@/lib/firebase";
import { Timestamp, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createNewCategory = async ({ data }) => {
    if (!data?.name) {
        throw new Error("Name is undefined");
    }
    if (!data?.slug) {
        throw new Error("Slug is undefined");
    }
   
    const firestoreRef = doc(db, `categories/${data?.slug}`)
    await setDoc(firestoreRef, {
        ...data,
        id: data?.slug,
        timestamp: Timestamp.now(),
    });
}

export const updateCategory = async ({ data, image }) => {
    if (!data?.name) {
        throw new Error("Name is undefined");
    }
    if (!data?.slug) {
        throw new Error("Slug is undefined");
    }

   
    const firestoreRef = doc(db, `categories/${data?.id}`);

    await updateDoc(firestoreRef, {
        ...data,
        timestamp: Timestamp.now(),
    });
}

export const deleteCategory = async (id) => {
    if (!id) {
        throw new Error("Id is required");
    }
    await deleteDoc(doc(db, `categories/${id}`));
}