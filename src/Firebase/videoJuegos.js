import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { db } from "./Firebase"
import React from 'react';


export async function getJuegos(titulo) {
    const userQuery = query(collection(db, "juegos"));
    const result = await getDocs(userQuery);

    if (result.size > 0) {
        const juegos = result.docs
            .filter(item => new RegExp(titulo, 'i').test(item.data().titulo))
            .map((item) => ({
                ...item.data(),
                id: item.id,
            }));
        return juegos;
    } else {
        return null;
    }
}

export async function getAllJuegos() {
    const userQuery = query(collection(db, "juegos"));
    const result = await getDocs(userQuery);

    if (result.size > 0) {
        const juegos = result.docs.map((item) => ({
            ...item.data(),
            id: item.id,
        }));
        return juegos;
    } else {
        return null;
    }
}