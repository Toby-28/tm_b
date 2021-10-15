const {get, post, patch, delet}= require('./service')

module.exports= {
    get: (req, res)=>{
        get(req.body, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                result: result
            })
        })
    },
    post: (req, res)=>{
        post(req.body, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                message: result
            })
        })
    },
    patch: (req, res)=>{
        patch(req.body, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                message: result
            })
        })
    },
    delet: (req, res)=>{
        delet(req.body, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                message: result
            })
        })
    },
}