import { admin } from '../access'

const db = admin.firestore()

db.collection('categories')
  .get()
  .then( snapshot => {
    snapshot.forEach( snap => {
      console.log('snap')
    })
  })


