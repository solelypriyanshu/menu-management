# Menu Management API

This is a RESTful API for managing menu categories, subcategories, and items. It allows creating, updating, retrieving, and searching categories, subcategories, and items.

## Features
- Create, update, delete, and fetch menu categories
- Create, update, delete, and fetch subcategories
- Create, update, delete, and fetch items
- Search items by name

## Prerequisites
Make sure you have the following installed:
- [Node.js] (v14 or later)
- [MongoDB] (if using a local database)
- [Postman] (optional, for testing API endpoints)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/solelypriyanshu/menu-management-api.git
   cd menu-management-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Environment Setup
1. Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/menuDB
   ```

## Running the Application Locally
1. Start MongoDB (if running locally):
   ```sh
   mongod
   ```
2. Start the server:
   ```sh
   npm start
   ```
3. The server will run on `http://localhost:5000`

## API Documentation
You can test the API endpoints using Swagger UI:
1. Start the server
2. Open your browser and go to:
   ```
   http://localhost:5000/api-docs
   ```

## Testing with Postman
You can import the provided Postman collection to test the API endpoints.

## API Endpoints
### Categories
- `POST /api/categories` - Create a new category
- `GET /api/categories` - Get all categories
- `GET /api/categories/:categoryId` - Get category by ID
- `GET /api/categories/name/:name` - Get category by name
- `PUT /api/categories/:categoryId` - Update a category

### Subcategories
- `POST /api/categories/:categoryId/subcategories` - Create a subcategory
- `GET /api/categories/:categoryId/subcategories` - Get all subcategories of a category

### Items
- `POST /api/subcategories/:subCategoryId/items` - Create an item
- `GET /api/items` - Get all items
- `GET /api/items/search?name={itemName}` - Search item by name

## License
This project is licensed under the MIT License.

