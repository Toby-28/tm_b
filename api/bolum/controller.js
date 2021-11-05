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
        req.body.photo= req.file.filename
        post(req.body, (error, result)=>{
            if(error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.json(error)
            }
            return res.json(result)
        })
    },
    patch: (req, res)=>{
        if (req.file) {
            req.body.photo= req.file.filename
        }
        let keys= Object.keys(req.body)
        let results
        keys.forEach(element => {
            patch(element, req.body[element], req.params.id, (error, result)=>{
                if(error){
                    console.log(error.sql+'\n'+error.sqlMessage)
                    return res.json(error)
                }
                results= result
            })
        })
        return res.json(results)
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