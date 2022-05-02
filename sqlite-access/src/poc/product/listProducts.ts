import { initDB } from "../access";

export const all = (db: any, query: string) => new Promise((resolve,reject) => {
  db.all(query,(err : ()=> {}, rows : Array<any>) => {
    if(err) reject(err)
    else resolve(rows)
  })
})

const listAllProducts = async() => {
  const db = await initDB('banco.sqlite3')
  const products = await all(db, `SELECT * FROM products;`)
  console.log(products)
}

export { listAllProducts }