import { initDB } from "../access";

type Tproduct = [{
  id: number
  product: string
  price: number
}]

export const all = (db: any, query: string) => new Promise((resolve, reject) => {
  db.all(query, (err: () => {}, rows: Array<any>) => {
    if (err) reject(err)
    else resolve(rows)
  })
})

const listProductsPaginate = async ({ pageSize = 1, currentPage = 0 }) => {
  const db = await initDB('banco.sqlite3')

  try {
    const products = await all(db,
      `SELECT * FROM products limit ${currentPage * pageSize}, ${pageSize + 1};`
    )
    const productsId: Array<any> = products as Array<any>

    const hasNext: boolean = productsId.length > pageSize
    if (hasNext) productsId.pop()

    const condition: string = productsId.map(product => product.id).join(',')
    const images = await all(db, `SELECT * FROM images WHERE product_id IN (${condition}) GROUP BY product_id`)
    const imagesId: Array<any> = images as Array<any>

    const mapImages = imagesId.reduce((initial: any, acc: any) => {
      return {
        ...initial,
        [acc.product_id]: acc
      }
    }, {})

    return productsId.map(product => {
      return {
        data: {
          ...product,
          image: mapImages[product.id]
        },
        hasNext
      }
    })

  } catch (error) {
    console.log(error)
  }

}

export { listProductsPaginate }

/* const products = await all(db,
  `SELECT * FROM products LEFT JOIN images ON products.id = images.product_id GROUP BY images.product_id;`
)

  e vitar esses tipos de query para não ser tão custoso ao BD
*/
