const { get, sup_admin_get, getId, post, patch, delet}= require('./k.service')

module.exports= {
    get: (req, res)=>{
        get(req.body, (error, result)=>{
            if (error)
                console.log('==> ',error)
            return res.json({
                result: result
            })
        })
    },
    sup_admin_get: (req, res)=>{
        sup_admin_get((error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.json(error)
            }
            return res.json(result)
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
        patch(req.body, (error, result)=>{
            if(error)
                console.log('==> ',error)
            return res.json({
                message: result
            })
        })
    },
    delet: (req, res)=>{
        delet(req.body.id, (error, result)=>{
            if(error)
                console.log('==> ',error)
            return res.json({
                message: result
            })
        })
    },
}