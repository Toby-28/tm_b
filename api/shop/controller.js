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
        if (req.file) {
            req.body.photo= req.file.filename
        }
        let keys= Object.keys(req.body)
        let results
        keys.forEach(element => {
            patch(element, req.body[element], req.params.id, (error, result)=>{
                if (error) {
                    console.log(error.sqlMessage+'\n'+error.sql)
                    return res.json(error)
                }
                results= result
            })
        });
        return res.json(results)
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