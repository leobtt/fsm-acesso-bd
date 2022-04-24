import { admin } from './acess'

const db = admin.firestore()

db.collection('categories')
  .get()
  .then( snapshot => {
    snapshot.forEach( snap => {
      console.log('snap')
    })
  })


