import admin from 'firebase-admin'

import serviceAccount from "../firestore.json"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

console.log('working...')

const db = admin.firestore()

const cat = 'ITOEAA62kslSoXbogMrf'
const catRef = db.collection('categories').doc(cat)



const products = db.collection('products').where('category','array-contains',catRef).get()
products.then(snapshot => {
  console.log('------------------ empty', snapshot.empty)
    snapshot.forEach(snap => {
      console.log( snap.data())
    })
  })


export { admin }