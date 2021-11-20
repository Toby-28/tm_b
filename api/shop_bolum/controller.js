const { get, getId, post, patch, delet}= require('./bolum_shop.service')
 
module.exports= {
    get: (req, res)=>{
        get((error, result)=>{
            if(error)
                console.log('==> ',error)
            return res.json({
                result: result
            })
        })
    },
    getId: (req, res)=>{
        getId(req.body, (error, result)=>{
            if(error)
                console.log(error)
            return res.json({
                result: result
            })
        })
    },
    post: (req, res)=>{
        post(req.body, (error, result)=>{
            if(error)
                console.log('==> ',error)
            return res.json({
                message: result
            })
        })
    },
    patch: (req, res)=>{
        patch(req.body,(error, result)=>{
            if(error)
                console.log('==> '+error)
            return res.json({
                message: result
            })
        })
    },
    delet: (req, res)=>{
        delet(req.body.id, (error, result)=>{
            if(error)
                console.log('==> '+error)
            return res.json({
                message: result
            })
        })
    }
}