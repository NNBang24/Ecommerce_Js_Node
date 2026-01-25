const express = require('express') ;
const { createProduct, getAllProducts, updateProduct, deleteProduct, getProductId } = require('../controllers/productController');
const { uploadSingleImage } = require('../middlewares/uploadMiddleware');
const { resizeImage } = require('../middlewares/imageProcessingMiddleware');
const authenticateToken = require('../middlewares/authenticateToken');
const router = express.Router() ;

router.post('/' ,
    authenticateToken,
    uploadSingleImage('imageURL') ,
    resizeImage ,
    createProduct
)
router.get('/' ,
    getAllProducts
)
router.get('/:id' ,
    getProductId
)
router.put('/:id',
    authenticateToken ,
    uploadSingleImage('imageURL'),
    resizeImage,
    updateProduct
)
router.delete('/:id', 
    authenticateToken ,
    deleteProduct
)
module.exports = router