const {get, patch, post, delet}= require('./s.service')

module.exports= {
    get: (req, res)=>{
        get(req.body.product_name, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                result:result
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
    delet: (req, res)=>{
        delet(req.body.id, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                message: result
            })
        })
    }
}