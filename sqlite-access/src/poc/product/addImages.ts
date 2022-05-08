import { initDB, run } from "../access";

interface IAddImage {
  id: Number
  url: string
  description: string
}

const AddImage = async (
  data: IAddImage,
  product_id: number
)
  : Promise<void> => {
  const db = await initDB('banco.sqlite3')

  const { id, url, description } = data

  await run(db,
    'insert into images(id,url,description,product_id) values (?,?,?,?)',
    [id, url, description, product_id]
  )

  console.log('created a new image')
}

export { AddImage }