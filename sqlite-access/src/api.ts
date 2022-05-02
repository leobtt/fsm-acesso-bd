import {
  updateCategory,
  createCategory,
  deleteCategory,
  listCategories,
  listCategoriesPaginate
} from "./poc/category";

import {
  createProducts,
  updateProduct,
  deleteProduct,
  listAllProducts,
  listProducts
} from './poc/product'

/* createCategory({category: 'nova 1', id: 1}).catch(err => console.log(err))
createCategory({category: 'nova 3', id: 3}).catch(err => console.log(err))
createCategory({category: 'nova 4', id: 4}).catch(err => console.log(err))
createCategory({category: 'nova 5', id: 5}).catch(err => console.log(err))
createCategory({category: 'nova 6', id: 6}).catch(err => console.log(err)) */

listCategories().then()
listCategoriesPaginate({pageSize: 2, currentPage: 3}).then(data => console.log(data))
