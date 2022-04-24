import { admin } from "./acess";

const db = admin.firestore()

const cat = 'wzedL9qwuXzU67WiSXw1'
const categoriesRef = db.collection('categories').doc(cat)

const doc = db.collection('products').doc()
doc.set({
  product: 'aqui 1',
  price: 2574,
  category: [categoriesRef],
  category1: [cat] 
}).then( snap => console.log(snap))