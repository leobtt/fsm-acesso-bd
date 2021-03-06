import { admin } from './access'

const db = admin.firestore()

const findAll = async() => {
  const categoriesDB = await db.collection('categories').get()
  if(categoriesDB.empty){
    return []
  }
  const categories : any = []
  categoriesDB.forEach(doc => {
    categories.push({
      ...doc.data(),
      id: doc.id
    })
  })
  return categories
}
const findAllPaginated = async({ pageSize = 10, startAfter = '' }) => {
  console.log('pageSize', pageSize, 'startAfter', startAfter)
  const categoriesDB = await db
                              .collection('categories')
                              .orderBy('category')
                              .startAfter(startAfter)
                              .limit(pageSize+1)
                              .get()
  if(categoriesDB.empty){
    return {
      data: [],
      total: 0
    }
  }
  const categories: any = []
  let total = 0
  categoriesDB.forEach(doc => {
    console.log(doc.id)
    if(total < pageSize){
      categories.push({
        ...doc.data(),
        id: doc.id
      })
    }
    total++
  })
  console.log(total, pageSize)
  return {
    data: categories,
    total: categories.length,
    hasNext: total > pageSize,
    startAfter: total > pageSize ? categories[categories.length-1].category : ''
  }
}

const remove = async(id : string) => {
  const doc = db.collection('categories').doc(id)
  await doc.delete()
}

const create = async(data : any) => {
  const doc = db.collection('categories').doc()
  await doc.set(data)
}

const update = async(id : string, data : any) => {
  const doc = db.collection('categories').doc(id)
  await doc.update(data)
}

export {
  findAll,
  findAllPaginated,
  remove,
  create,
  update
}