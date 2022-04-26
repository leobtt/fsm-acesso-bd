import {admin} from './acess'

const db = admin.firestore()

const doc = db.collection('categories').doc('wzedL9qwuXzU67WiSXw1')
doc.delete().then( snap => console.log(snap))