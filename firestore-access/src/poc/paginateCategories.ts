import { admin } from '../access'

const db = admin.firestore()

const pageSize = 1

db.collection('categories')
  .orderBy('category')
  .limit(pageSize + 1)
  .startAfter('Eletrônicos')
  .get()
  .then( snapshot => {
    let total = 0
    snapshot.forEach( snap => {
      if(total < pageSize) {
        console.log(' id ',snap.id,' => ', snap.data() )
      }
      total++
    })

    if(total > pageSize){
      console.log('tem uma próxima página')
    } else {
      console.log(' Não há próxima página')
    }
  })


