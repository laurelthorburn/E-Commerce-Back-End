const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories findAll - takes time to get to db and return data
    // be sure to include its associated Products
  try {
  const category = await Category.findAll({include: [{ model: Product }]});
  res.json(category);
} catch(err) {
  console.log("Hello Error");
if(err) throw new Error(err);
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value findbyPK
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {include: [{ model: Product }]});
    
      
    if (!category) {
      res.status(404).json({ message: 'No category found with this id! You should create one :)' });
      return;
    }

    res.json(category);

  } catch(err) {
    console.log("Hello Error");
  if(err) throw new Error(err);
  }
  });

router.post('/', (req, res) => {
  // // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then((netCategory) => {
    res.json(netCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }) 
  res.json(category)
} catch(err) {
  console.log("Hello Error");
if(err) throw new Error(err);
}
});

router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!category) {
      res.status(404).json({ message: 'No category found with this id! Sad day!' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
