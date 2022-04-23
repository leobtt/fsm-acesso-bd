import {admin} from './acess'

const db = admin.firestore()

const doc = db.collection('categories').doc()
doc.set({
  category: 'criada via código'
}).then( snap => console.log(snap))