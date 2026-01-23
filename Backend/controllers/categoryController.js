
const { Category , Product } = require('../models') ;


exports.createCategory = async(req , res , next) => {
    try {
        const newCategory = await Category.create(req.body) ;
        res.status(201).json(newCategory)
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({
                error: [
                    {
                        msg: "Ten danh muc da ton tai",
                        param: 'name',
                        location: 'body'
                    }
                ]
            })
        }
        next(error) ;
    }
};

exports.getAllCategory = async(req, res , next) => {
  try {
      const getAllCategory = await Category.findAll(
        //   {
        //       include: {
        //           model: Product,
        //           as: 'products'
        //       }
        //   }
      );
      res.json(getAllCategory);
  } catch (error) {
    next(error) ;
  }
};

exports.updateCategory = async ( req , res , next) => {
    try {
        const [updateRows] = await Category.update(req.body ,
            {
                where :{
                    id : req.params.id
                }
            }
        );
        if(updateRows == 0) {
            return res.status(400).json({message : 'khong tim thay'})
        }
        const updateCategory = await Category.findByPk(req.params.id) ;
        res.json(updateCategory)
    } catch (error) {
        next(error) ;
    }
} ; 

exports.deleteCategory = async ( req , res , next ) => {
    try {
        const deleteRows = await Category.destroy({
            where : {
                id : req.params.id 
            }
        })
        if( deleteRows === 0) {
            return res.status(400).json({ message: 'khong tim thay' })
        }
        res.status(204).send()
    } catch (error) {
      next(error) ;  
    }
}