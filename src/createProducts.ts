import { admin } from "./acess";

const db = admin.firestore()

const cat = 'ITOEAA62kslSoXbogMrf'
const categoriesRef = db.collection('categories').doc(cat)

const doc = db.collection('products').doc()
doc.set({
  product: 'criada via código',
  price: 2574,
  category: [categoriesRef],
  category1: [cat] 
}).then( snap => console.log(snap))