import { initDB, run } from "../access";

const deleteCategory = async (id : Number) => {
  const db = await initDB('banco.sqlite3')
  await run(db, 'delete from categories where id=?', [id])
  console.log('deleted')
}

export { deleteCategory }