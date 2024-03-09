import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { db } from "./Firebase"

export async function creatUserProfile(userId, data){
    return setDoc(doc(db, "usuarios",userId), data);
}

export async function getUserProfile(email){
    const userQuery = query(collection(db, "usuarios"), where("email","==",email));

    const result = await getDocs(userQuery);

    if (result.size > 0){
        const users = result.docs.map((item) =>({
            ...item.data(),
            id: item.id,
        }));
        return users[0];
    } else {
        return null;
    }
}