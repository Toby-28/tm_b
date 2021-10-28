const {post}= require('./ss.service'),
    {hash}= require('bcrypt')

module.exports= {
    post: (req, res)=>{
        hash(req.body.password.toString(), 10).then(hashed=>{
            req.body.password= hashed
            post(req.body, (error, result)=>{
                if (error) {
                    console.log(error.sql+'\n'+error.sqlMessage)
                }
                res.json({
                    result: result
                })
            })
        })
    }
}