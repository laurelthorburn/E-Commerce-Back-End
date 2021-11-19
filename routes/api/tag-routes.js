const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findAll({include: [{ model: Product }]});
    res.json(tag);
  } catch(err) {
    console.log("Hello Error");
  if(err) throw new Error(err);
  }
  });

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {include: [{ model: Product }]});
    
      
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id! You should create one :)' });
      return;
    }

    res.json(tag);

  } catch(err) {
    console.log("Hello Error");
  if(err) throw new Error(err);
  }
  });

router.post('/', async (req, res) => {

  Tag.create({
    tag_name: req.body.tag_name
  })
  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  });
});
// Tag.create(req.body)
// .then((tag) => {
//   // if there's tag tags, we need to create pairings to bulk create in the ProductTag model
//   if (req.body.tagIds.length) {
//     const productTagIdArr = req.body.tagIds.map((tag_id) => {
//       return {
//         product_id: product.id,
//         tag_id,
//       };
//     });
//     return ProductTag.bulkCreate(productTagIdArr);
//   }
//   // if no product tags, just respond
//   res.status(200).json(tag);
// })
// .then((productTagIds) => res.status(200).json(productTagIds))
// .catch((err) => {
//   console.log(err);
//   res.status(400).json(err);
// });
// });

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }) 
  res.json(tag)
} catch(err) {
  console.log("Hello Error");
if(err) throw new Error(err);
}
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
