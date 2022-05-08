import { initDB, run } from "../access";

interface IUpdateProduct {
  product: string
  id: SVGAnimatedNumber
}

const updateProduct = async ({ product, id }: IUpdateProduct): Promise<void> => {
  const db = await initDB('banco.sqlite3')
  await run(db, 'update products set product=? where id=?', ['produto atualizado', 8])
  /* await run(db, 'update products set product=?, price=? where id=?', ['produto atualizado',133 ,8]) */
  // lembrete: apagar tudo de categories_products, adicionar o que ficou
  // ou remover somente quem foi removido. Ou adicionar somente quem foi adicionado
  console.log('Products updated')
}

export { updateProduct }