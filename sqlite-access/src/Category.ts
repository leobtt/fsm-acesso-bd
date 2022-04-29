import sqlite3 from 'sqlite3'

const sqlite = sqlite3.verbose()
const db = new sqlite.Database('banco', (err)=> console.log(err))
db.run


const initDB = (databaseFile : string) => new Promise((resolve,reject) => {
  const db = new sqlite.Database(databaseFile, (err) => {
    if(err) reject(err)
    else resolve(db)
  })
})


const run = (db: any, query: string, values : Array<any> ) => new Promise((resolve,reject) => {
    db.run(query, values, (err : ()=> {}) => {
      if(err) reject(err)
      else resolve(true)
    })
})

/* const createCategory = async () => {
  const db = await initDB('banco.sqlite3')
  await run(db, 'insert into categories(id,category) values (?,?)', [8, 'nova cat'])
  console.log('created ')
}
createCategory().catch(err=> console.log(err)) */

/* const updateCategory = async () => {
  const db = await initDB('banco.sqlite3')
  await run(db, 'update categories set category=? where id=?', ['cat atualizada', 8])
  console.log('updated')
}
updateCategory().catch(err=> console.log(err)) */

const deleteCategory = async () => {
  const db = await initDB('banco.sqlite3')
  await run(db, 'delete from categories where id=?', [8])
  console.log('deleted')
}
deleteCategory().catch(err=> console.log(err))


