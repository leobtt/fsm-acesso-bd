import { admin } from './acess'

const db = admin.firestore()

const productID = '5l7fvPA3LzEBKx4TybgW'


const imagesRef = db.collection('products').doc(productID)
              .collection('images').doc()

imagesRef.set({
  description: 'my image URL',
  url: 'i do not know'
})
