const { get, getId, post, patch, delet}= require('./category.service')

module.exports= {
    get: (req, res)=>{
        get(req.body, (error, result)=>{
            if(error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(400).json(error)
            }
            return res.json(result)
        })
    },
    getId: (req, res)=>{
        getId(req.body, (error, result)=>{
            if(error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(400).json(error)
            }
            return res.json(result)
        })
    },
    post: (req, res)=>{
        post(req.body, (error, result)=>{
            if(error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(400).json(error)
            }
            return res.json(result)
        })
    },
    patch: (req, res)=>{
        patch(req.body, req.params.id, (error, result)=>{
            if(error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(400).json(error)
            }
            return res.json(result)
        })
    },
    delet: (req, res)=>{
        delet(req.params.id, (error, result)=>{
            if(error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(400).json(error)
            }
            return res.json(result)
        })
    }
}