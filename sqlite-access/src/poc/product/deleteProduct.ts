import { initDB, run } from "../access";

const deleteProduct = async (id: number) => {
  const db = await initDB('banco.sqlite3')
  await run(db, 'delete from products where id=?', [id])
  await run(db, 'delete from categories_products where product_id=?', [id])
  console.log('deleted')
}

export {
  deleteProduct
}