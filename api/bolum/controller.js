const { get, sup_admin_get, getid, post, patch, delet}= require('./b.service')

module.exports= {
    get: (req, res)=>{
        get((error, result)=>{
            if (error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.json(error)
            }
            return res.json(result)
        })
    },
    sup_admin_get: (req, res)=>{
        sup_admin_get(req.body, (error, result)=>{
            if (error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.json(error)
            }
            return res.json(result)
        })
    },
    getid: (req, res)=>{
        getid(req.params.id, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.json(error)
            }
            return res.json(result)
        })
    },
    post: (req, res)=>{
        post(req.body, (error, result)=>{
            if(error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.json(error)
            }
            return res.json(result)
        })
    },
    patch: (req, res)=>{
        patch(req.body, (error, result)=>{
            if(error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.json(error)
            }
            return res.json(result)
        })
    },
    delet: (req, res)=>{
        delet(req.body.id, (error, result)=>{
            if(error){
                 console.log(error.sql+'\n'+error.sqlMessage)
                return res.json(error)
            }
            return res.json(result)
        })
    },
}