import { initDB } from "../access";

export const all = (db: any, query: string) => new Promise((resolve,reject) => {
  db.all(query,(err : ()=> {}, rows : Array<any>) => {
    if(err) reject(err)
    else resolve(rows)
  })
})

const listCategories = async() => {
  const db = await initDB('banco.sqlite3')
  const categories = await all(db, `SELECT * FROM categories;`)
  console.log( categories)
}

export {listCategories}