const {get, post, patch, delet}= require('./s.service'),
    {}= require('bcrypt')

module.exports= {
    get: (req, res)=>{
        get(req.body, (error, result)=>{
            if (error) {
                console.log(error.sqlMessage+'\n'+error.sql)
                return res.json(error)
            }
            return res.json(result)
        })
    },
    post: (req, res)=>{
        post(req.body, (error, result)=>{
            if (error) {
                console.log(error.sqlMessage+'\n'+error.sql)
                return res.json(error)
            }
            req.body.shop_name= result.insertId
            res.redirect('/sellers')
        })
    },
    patch: (req, res)=>{
        patch(req.body, req.params.id, (error, result)=>{
            if (error) {
                console.log(error.sqlMessage+'\n'+error.sql)
                return res.json(error)
            }
            return res.json(result)
        })
    },
    delet: (req, res)=>{
        delet(req.params.id, (error, result)=>{
            if (error) {
                console.log(error.sqlMessage+'\n'+error.sql)
                return res.json(error)
            }
            return res.json(result)
        })
    },
}