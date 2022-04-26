import { admin } from './acess'

/* 
wzedL9qwuXzU67WiSXw1
ITOEAA62kslSoXbogMrf
 */
  const db = admin.firestore()

const cat = 'ITOEAA62kslSoXbogMrf'
const catRef = db.collection('categories').doc(cat)

const products = db.collection('products').where('category','array-contains',catRef).get()
products.then(snapshot => {
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