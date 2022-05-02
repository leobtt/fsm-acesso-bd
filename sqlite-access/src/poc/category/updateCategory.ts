import { initDB, run } from "../access";

interface IUpdateCateogry {
    category: string
    id: Number
}

const updateCategory = async ({category, id}: IUpdateCateogry) => {
  const db = await initDB('banco.sqlite3')
  await run(db, 'update categories set category=? where id=?', [category,id])
  console.log('updated')
}

export { updateCategory }