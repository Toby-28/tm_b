const {post, sellers_patch, sup_admin_patch, sellers_get, sup_admin_get, delet}= require('./s.service'),
    {hash, compare}= require('bcrypt'),
    {sign}= require('jsonwebtoken')

module.exports= {
    login: (req, res)=>{
        sellers_get(req.body, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.json(error)
            }
            if (!result[0]) {
                return res.status(404).json({
                    message: 'Login failed for user '+req.body.login
                })
            }
            compare(req.body.password.toString(), result[0].password).then(same=>{
                if (same) {
                    let token=sign({result: result}, process.env.TOKENSECRETKEY, { expiresIn: process.env.TOKENEXPIREAT})
                    return res.json(token)
                }else{
                    return res.json({
                        message: 'Wrong password!'
                    })
                }
            })
        })
    },
    post: (req, res)=>{
        hash((req.body.password).toString(), 10).then(hashed=>{
            req.body.password= hashed
            post(req.body, (error, result)=>{
                if (error) {
                    console.log(error.sql+'\n'+error.sqlMessage)
                    return res.json(error)
                }
                token= sign({result: result}, process.env.TOKENSECRETKEY, {expiresIn: process.env.TOKENEXPIREAT})
                res.json(token)
            })
        })
    },
    sellers_patch: (req, res)=>{
        req.body.key= "login"
        req.body.value= req.body.login
        sup_admin_get(req.body, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(500).json(error)
            }
            if (!result[0]) {
                return res.status(404).json({
                    message: "Bular yaly ulanyjy yok!"
                })
            }
            compare((req.body.old_password).toString(), result[0].password).then(same=>{
                if (same) {
                    hash((req.body.password).toString(), 10).then(hashed=>{
                        req.body.password= hashed
                        sellers_patch(req.body, (error, result)=>{
                            if (error) {
                                console.log(error.sql+'\n'+error.sqlMessage)
                                return res.status(500).json(error)
                            }
                            return res.json(result)
                        })
                    })
                }else{
                    return res.status(400).json({
                    message: "Parol yalnys"
                    })
                }
            })
        })
    },
    sup_admin_patch: (req, res)=>{
        sup_admin_patch(req.body, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(500).json(error)
            }
            res.json(result)
        })
    },
    sellers_get: (req, res)=>{
        sellers_get(req.body, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(500).json(error)
            }
            res.json(result)
        })
    },
    sup_admin_get: (req, res)=>{
        sup_admin_get(req.body, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(500).json(error)
            }
            res.json(result)
        })
    },
    delet: (req, res)=>{
        delet(req.params, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(500).json(error)
            }
            res.json(result)
        })
    }
}