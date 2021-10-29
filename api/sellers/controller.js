const {post, sellers_patch, sup_admin_patch}= require('./s.service'),
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
        compare()
        hash((req.body.password).toString(), 10).then(hashed=>{
            req.body.password= hashed
            sellers_patch(req.body, (error, result)=>{
                if (error) {
                    console.log(error)
                }
                res.json({
                    error: error,
                    message: result
                })
            })
        })
    },
    sup_admin_patch: (req, res)=>{
        sup_admin_patch(req.body, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                error: error,
                message: result
            })
        })
    }
}