const { get, sup_admin_get, post, patch, delet}= require('./subcategory.service')
 
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
    sup_admin_get: (req, res)=>{
        sup_admin_get((error, result)=>{
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
        let key= Object.keys(req.body)
        let results
        key.forEach(element=>{
            patch(element, req.body[element], req.params.id, (error, result)=>{
                if(error){
                    console.log(error.sql+'\n'+error.sqlMessage)
                    return res.status(400).json(error)
                }
                results= result
            })
        })
        return res.json(results)
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