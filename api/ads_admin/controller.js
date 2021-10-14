const {post, get}= require('./aa.service')

module.exports= {
    post: (req, res)=>{
        post(req.body, req.file.filename, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                message: result
            })
        })
    },
    get: (req, res)=>{
        get((error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                result: result
            })
        })
    }
}