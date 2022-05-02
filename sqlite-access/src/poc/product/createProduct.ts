import { initDB, run } from "../access";

interface ICreateProducts {
    id: Number
    product: string
    price: Number
}
interface IRelationship {
  product_id: number
  category_id: number
}

const createProducts = async (
  data : ICreateProducts , 
  {product_id, category_id} : IRelationship) 
  : Promise<void> => {
    const db = await initDB('banco.sqlite3')

    const {id , price, product} = data

    await run(db, 
      'insert into products(id,product,price) values (?,?,?)',
      [id,product,price]
    )
    await run(db,
      'insert into categories_products(product_id,category_id) values (?,?)',
      [product_id, category_id]
    )
    console.log('created ')
}

export { createProducts }