import { firebaseConfig } from "../confige";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function setData() {
  const user = { displayName: "sam" };
  const usersRef = collection(db, "users");
  await setDoc(doc(usersRef, "id-1234"), user);
}

export async function getData() {
  const docRef = doc(db, "users", "id-user");
  const docSnap = await getDoc(docRef);
  const user = docSnap.data();

  if (docSnap.exists()) console.log("user", user);
  else console.log("No such document!");
}

export const newUserDoc = async (user, additionalData) => {
  if (!user) return;
  console.log("user", user);

  let userRef = doc(db, "users", user.uid);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    try {
      await setDoc(userRef, {
        displayName: user.displayName,
        email: user.email,
        createAt: new Date(),
        ...additionalData,
      });
    } catch (error) {
      console.log("error:", error.message);
    }
  } else console.log("this user already exist", snapshot.exists());
};

// Exports
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then(async ({ user }) => {
      await newUserDoc(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });

provider.setCustomParameters({ prompt: "select_account" });
