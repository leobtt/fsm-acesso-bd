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
  listProducts,
  listProductsPaginate,
  AddImage
} from './poc/product'



listProductsPaginate({ pageSize: 2, currentPage: 0 }).then(data => console.log(data))
