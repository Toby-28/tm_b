const { post, patch ,get, sup_admin_get, delet}=require('./ban.service'),
   keys= ['product_id', 'shop_id', 'service_id']

//

module.exports= {
   post: (req, res)=>{
      req.body.photo= req.file.filename
      for (let i = 0; i < keys.length; i++) {
         if(!req.body[keys[i]])
            req.body[keys[i]]= 0
      }
      post(req.body, (error, result)=>{
         if(error){
            console.log(error.sql+'\n'+error.sqlMessage)
            return res.status(500).json(error)
         }
         res.json(result)
      })
   },
   patch: (req, res)=>{
      if(req.file)
         req.body.photo= req.file.filename
      const keys= Object.keys(req.body)
      let results
      keys.forEach(element=>{
         patch(element, req.body[element], req.params.id, (error, result)=>{
            if(error){
               console.log(error.sql+'\n'+error.sqlMessage)
               return res.status(500).json(error)
            }
            results= result
         })
      })
      return res.json(results)
   },
   get: (req, res)=>{
      get((error, result)=>{
         if(error){
            console.log(error.sql+'\n'+error.sqlMessage)
            return res.status(500).json(error)
         }
         return res.json(result)
      })
   },
   sup_admin_get: (req, res)=>{
      sup_admin_get((error, result)=>{
         if(error){
            console.log(error.sql+'\n'+error.sqlMessage)
            return res.status(500).json(error)
         }
         return res.json(result)
      })
   },
   delet: (req, res)=>{
      delet(req.params.id, (error, result)=>{
         if(error){
            console.log(error.sql+'\n'+error.sqlMessage)
            return res.status(500).json(error)
         }
         return res.json(result)
      })
   }
}