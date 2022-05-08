import { initDB } from "../access";

export const all = (db: any, query: string) => new Promise((resolve, reject) => {
  db.all(query, (err: () => {}, rows: Array<any>) => {
    if (err) reject(err)
    else resolve(rows)
  })
})

interface IPaginate {
  pageSize: number
  currentPage: number
}

const listCategoriesPaginate = async (
  {
    pageSize = 1,
    currentPage = 0
  }
    : IPaginate
) => {

  const db = await initDB('banco.sqlite3')
  const categories: any = await all(db,
    `SELECT * FROM categories limit ${pageSize * currentPage}, ${pageSize + 1}`
    // start                // ate
  )

  const hasNext: boolean = categories.length > pageSize
  if (hasNext) {
    categories.pop()
  }

  return {
    hasNext,
    data: categories
  }

}

export { listCategoriesPaginate }

// limit pageSize * current
//  limit 0( 2 * 0), 2(mostra 2 registros) = 0 2
//  limit 1( 2 * 1), 2(mostra 2 registros) = limita 2 primeiros e mostra 2
//  limit 2( 2 * 2), 2(mostra 2 registros)  = limita os 4 primeiros e mostra 2
