import { signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { auth, googleProvider } from "./Firebase"
import { creatUserProfile } from "./users";

export const singInWithGoogle = async () => {
    
    try{
        const result = await signInWithPopup(auth, googleProvider);
        await creatUserProfile(result.user.uid,{email:result.user.email, name: result.user.displayName, userName: '', fav: '', membresias: []})
    } catch (error){

    }
}

export const registerWithEmailAndPassword = async (email, password, extraData) => {
    try{
        const result = await createUserWithEmailAndPassword(auth, email, password )
        await creatUserProfile(result.user.uid,{
            email,
            ...extraData,
        })
    } catch (error){
        console.log(error)

    }
};

export const loginWithEmailAndPassword = async (email, password) => {
    try{
        const result = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error)
    }
};
export const logout = async () => {
    try{
        await signOut(auth);
    } catch (error) {
        console.log(error)
    }
};