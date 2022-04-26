import { admin } from "../access";

const db = admin.firestore()

const productRef = 'Qug6E75JC8rbXD5ioMxm'

const doc = db.collection('products').doc(productRef)
const imgDoc = db.collection('products').doc(productRef).collection('images')

imgDoc.get().then(img => {
  const exclusoes: any = []

  img.forEach(i => {
    exclusoes.push(imgDoc.doc(i.id).delete())
  })

  return Promise.all(exclusoes)
}).then(() => {
   return doc.delete()
}).then(() => {
  console.log('deletado')
})

/* para excluir o produto primeiro é necessário excluir a coleção de imagens do produto */