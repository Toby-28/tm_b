const {post, sellers_patch, sup_admin_patch, sellers_get, sup_admin_get, delet}= require('./s.service'),
    {hash, compare}= require('bcrypt')

module.exports= {
    post: (req, res)=>{
        hash((req.body.password).toString(), 10).then(hashed=>{
            req.body.password= hashed
            post(req.body, (error, result)=>{
                if (error) {
                    console.log(error.sql+'\n'+error.sqlMessage)
                }
                res.json({
                    error: error,
                    message: result
                })
            })
        })
    },
    sellers_patch: (req, res)=>{
        req.body.key= "login"
        req.body.value= req.body.login
        sup_admin_get(req.body, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.json({
                    error: error
                })
            }
            if (!result[0]) {
                return res.json({
                    error: "Bular yaly ulanyjy yok!"
                })
            }
            compare((req.body.old_password).toString(), result[0].password).then(same=>{
                if (same) {
                    hash((req.body.password).toString(), 10).then(hashed=>{
                        req.body.password= hashed
                        sellers_patch(req.body, (error, result)=>{
                            if (error) {
                                console.log(error.sql+'\n'+error.sqlMessage)
                            }
                            return res.json({
                                error: error,
                                message: result
                            })
                        })
                    })
                }else{
                    return res.json({
                    error: "Parol yalnys"
                    })
                }
            })
        })
    },
    sup_admin_patch: (req, res)=>{
        sup_admin_patch(req.body, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
            }
            res.json({
                error: error,
                message: result
            })
        })
    },
    sellers_get: (req, res)=>{
        sellers_get(req.body, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
            }
            res.json({
                error: error,
                message: result
            })
        })
    },
    sup_admin_get: (req, res)=>{
        sup_admin_get(req.body, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
            }
            res.json({
                error: error,
                message: result
            })
        })
    },
    delet: (req, res)=>{
        delet(req.body, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
            }
            res.json({
                error: error,
                message: result
            })
        })
    }
}