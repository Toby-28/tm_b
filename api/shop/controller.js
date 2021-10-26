const {get, post, patch, delet}= require('./s.service'),
    {hash}= require('bcrypt')

module.exports= {
    get: (req, res)=>{
        get(req.body, (error, result)=>{
            if (error) {
                console.log(error.sqlMessage+'\n'+error.sql)
            }
            res.json({
                result: result
            })
        })
    },
    post: (req, res)=>{
        hash((req.body.password).toString(), 10).then((hashed)=>{
            req.body.password= hashed
            post(req.body, (error, result)=>{
                if (error) {
                    console.log(error.sqlMessage+'\n'+error.sql)
                }
                res.json({
                    error: error,
                    message: result
                })
            })
        })
    },
    patch: (req, res)=>{
        patch(req.body, (error, result)=>{
            if (error) {
                console.log(error.sqlMessage+'\n'+error.sql)
            }
            res.json({
                message: result
            })
        })
    },
    delet: (req, res)=>{
        delet(req.body, (error, result)=>{
            if (error) {
                console.log(error.sqlMessage+'\n'+error.sql)
            }
            res.json({
                message: result
            })
        })
    },
}