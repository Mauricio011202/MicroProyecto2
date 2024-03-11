import { collection, getDocs,query, where } from "firebase/firestore"
import { db } from "./Firebase"



export async function getClubes() {
    const userQuery = query(collection(db, "clubes"));
    const result = await getDocs(userQuery);

    if (result.size > 0) {
        const clubes = result.docs.map((item) => ({
            ...item.data(),
            id: item.id,
        }));
        return clubes;
    } else {
        return null;
    }
}

export async function getClub() {
    const userQuery = query(collection(db, "clubes"));
    const result = await getDocs(userQuery);

    if (result.size > 0) {
        const club = result.docs
            .filter(item => new RegExp(id, 'i').test(item.data().id))
            .map((item) => ({
                ...item.data(),
                id: item.id,
            }));
        return club;
    } else {
        return null;
    }
}

export async function getoneClub(ID){
    const userQuery = query(collection(db, "clubes"), where("ID","==",ID));

    const result = await getDocs(userQuery);

    if (result.size > 0){
        const club = result.docs.map((item) =>({
            ...item.data(),
            id: item.id,
        }));
        return club;
    } else {
        return null;
    }
}