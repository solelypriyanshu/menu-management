const express = require('express');
const {
  createItem,
  getItems,
  getItemsByCategory,
  getItemsBySubCategory,
  getItemById,
  editItem,
  searchItemsByName,
} = require('../controllers/itemController');

const router = express.Router();

router.post('/', createItem); // Create Item
router.get('/', getItems); // Get all Items
router.get('/category/:categoryId', getItemsByCategory); // Get Items under a Category
router.get('/subcategory/:subCategoryId', getItemsBySubCategory); // Get Items under a SubCategory
router.get('/:id', getItemById); // Get Item by ID
router.put('/:id', editItem); // Edit Item
router.get('/search', searchItemsByName); // Search Items by Name

module.exports = router;
