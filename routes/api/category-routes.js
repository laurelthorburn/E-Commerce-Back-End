const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories findAll - takes time to get to db and return data
    // be sure to include its associated Products
  try {
  const category = await Category.findAll({});
  res.json(category);
} catch(err) {
  console.log("Hello World");
if(err) throw new Error(err);
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value findbyPK
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk({id});
    res.json(category);
  } catch(err) {
    console.log("Hello World");
  if(err) throw new Error(err);
  }
  });

router.post('/', (req, res) => {
  // create a new category
  console.log(req.body);
  res.send(req.body); //want to send req.body to db and essentially. the req.body has to match the model of the db
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
