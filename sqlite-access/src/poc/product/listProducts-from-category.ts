import { initDB } from "../access";

export const all = (db: any, query: string, values: Array<number>) => new Promise((resolve,reject) => {
  db.all(query, values,(err : ()=> {}, rows : Array<any>) => {
    if(err) reject(err)
    else resolve(rows)
  })
})

const listProducts = async(catId : number) => {
  const db = await initDB('banco.sqlite3')

  const products = await all(db, 
    `SELECT * FROM products WHERE id IN (
      select product_id from categories_products where category_id=?
    );`,
    [catId]
  )
  console.log(products)
}

export { listProducts }