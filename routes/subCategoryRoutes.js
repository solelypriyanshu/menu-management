const express = require('express');
const {
  createSubCategory,
  getSubCategories,
  getSubCategoriesByCategory,
  getSubCategoryById,
  editSubCategory,
} = require('../controllers/subCategoryController');

const router = express.Router();

router.post('/', createSubCategory); // Create SubCategory
router.get('/', getSubCategories); // Get all SubCategories
router.get('/category/:categoryId', getSubCategoriesByCategory); // Get SubCategories under a Category
router.get('/:id', getSubCategoryById); // Get SubCategory by ID
router.put('/:id', editSubCategory); // Edit SubCategory

module.exports = router;
