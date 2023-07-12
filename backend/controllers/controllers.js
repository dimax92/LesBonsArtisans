import Product from "../models/products.js"
export function createProduct(req, res, next) {
    const {name, type, price, rating, warranty_years, available} = req.body;

  const newProduct = new Product({name, type, price, rating, warranty_years, available});

  newProduct.save()
    .then(savedProduct => {
      res.status(201).json({message: 'Creation produit OK'});
    })
    .catch(err => {
      console.error('Erreur lors de la création du produit', err);
      res.status(500).json({ message: 'Erreur creation produit' });
    });
}

export function readProduct(req, res, next) {
    Product.find()
    .then(products => {
      res.json({products});
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des produits :', error);
      res.status(500).json({ message: 'Pas de produits' });
    });
}

export function readOneProduct(req, res, next) {
  const productId = req.params.id;

  Product.findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: 'Produit non trouvé' });
      }

      res.json(product);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Erreur de serveur' });
    });
};

export function updateProduct(req, res, next) {
    const { id } = req.params;
  const {name, type, price, rating, warranty_years, available} = req.body;

  Product.findByIdAndUpdate(id, {name, type, price, rating, warranty_years, available}, { new: true })
    .then(updatedProduct => {
      res.json({message: 'Modification produit OK'});
    })
    .catch(error => {
      console.error('Erreur lors de la mise à jour du produit :', error);
      res.status(500).json({ message: 'Erreur modification produit' });
    });
}

export function deleteProduct(req, res, next) {
    const { id } = req.params;

  Product.findByIdAndRemove(id)
    .then(removedProduct => {
      res.json({message: 'Suppression produit OK'});
    })
    .catch(error => {
      console.error('Erreur lors de la suppression du produit :', error);
      res.status(500).json({ message: 'Erreur suppression produit' });
    });
}