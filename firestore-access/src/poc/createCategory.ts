import {admin} from '../access'

const db = admin.firestore()

const doc = db.collection('categories').doc()
doc.set({
  category: 'nova categoria'
}).then( snap => console.log(snap))