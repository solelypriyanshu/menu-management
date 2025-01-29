const express = require('express');
const { createCategory, getCategories, getCategoryById, editCategory } = require('../controllers/categoryController');
const router = express.Router();

router.post('/', createCategory);
router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.put('/:id', editCategory);

module.exports = router;
