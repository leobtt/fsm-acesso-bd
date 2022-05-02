import { initDB, run } from "../access";

interface ICreateCategory {
  category: string
  id: Number
}

const createCategory = async ({category, id} : ICreateCategory) => {
  const db = await initDB('banco.sqlite3')
  
  await run(db,
    'insert into categories(id,category) values (?,?)',
    [id, category]
  )
  console.log('created')
}

export {createCategory}