import { admin } from './acess'

const db = admin.firestore()
/* 
wzedL9qwuXzU67WiSXw1
ITOEAA62kslSoXbogMrf
 */
const cat = 'wzedL9qwuXzU67WiSXw1'
const categoriesRef = db.collection('categories').doc(cat)

db.collection('products')
  .where('categories', 'array-contains', categoriesRef)
  .get()
  .then(snapshot => {
    snapshot.forEach(snap => {
      db.collection('products').doc(snap.id).collection('images').get()
        .then( imgSnapshot => {
          console.log(snap.id, snap.data())
          imgSnapshot.forEach( imgSnap => {
            console.log(`${imgSnap.id} ------------ ${JSON.stringify(imgSnap.data(),null,2)}`)
          } )
        })
    })
  })