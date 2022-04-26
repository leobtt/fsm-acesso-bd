/* u0yubfX0Bi1fHrdGuI5y */

import { admin } from "../access";

const db = admin.firestore()

const cat = 'syhlAIkAbLqfbuQNI8tI'
const catRef = db.collection('categories').doc(cat)

const doc = db.collection('products').doc('u0yubfX0Bi1fHrdGuI5y')
doc.update({
  product: 'Mouse gamer',
  price: 574,
  category: admin.firestore.FieldValue.arrayUnion(catRef),
  category1: admin.firestore.FieldValue.arrayUnion(cat) // adicionando um campo a mais ao array
}).then( snap => console.log(snap))