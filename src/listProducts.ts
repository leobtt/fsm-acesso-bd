import { admin } from './acess'

const db = admin.firestore()

db.collection('products')
  .get()
  .then(snapshot => {
    snapshot.forEach(snap => {
      db.collection('products').doc(snap.id).collection('images').get()
        .then( imgSnapshot => {
          console.log(snap.id, snap.data())
          imgSnapshot.forEach( imgSnap => {
            console.log(`${imgSnap.id} ------------ ${imgSnap.data()}`)
          } )
        })
    })
  })