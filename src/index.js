import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import {getFirestore, getDocs, collection} from 'firebase/firestore'

const fbConfig = {
  apiKey: "AIzaSyDceZPqtU5rkLAUtmTJxJhxSUJ67NMOpAg",

  authDomain: "fir-demo-1c78e.firebaseapp.com",

  projectId: "fir-demo-1c78e",

  storageBucket: "fir-demo-1c78e.appspot.com",

  messagingSenderId: "123019802831",

  appId: "1:123019802831:web:25595d8293b381667b5fba"

}
const app = initializeApp(fbConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const todosCol = collection(db, 'todos')

async function signin(){
  var provider = new GoogleAuthProvider
  await signInWithPopup(auth,provider)
}
signin()
onAuthStateChanged(auth, user => {
  if(user==null){
    console.log('No user')
  }else{
    console.log('logged in!')
  }
})