import { db } from "@/lib/firebase"
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"

export const getAlljobs = async () => {
    return await getDocs(collection(db, 'jobs')).then((snaps) => snaps.docs.map((d) => d.data()))
}

export const getAlljobsWithCategory = async (categoryId) => {
    const q = query(collection(db, 'jobs'), where('categoryId', '==', categoryId))
    return await getDocs(q).then((snaps) => snaps.docs.map((d) => d.data()))
}


export const getPost = async (id) => {
    return await getDoc(doc(db, `jobs/${id}`)).then((snap) => snap.data());
}
