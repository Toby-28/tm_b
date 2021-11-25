const {post, sup_admin_post, patch}= require('./product.service'),
    keys= ['product_name','product_nameru','description','descriptionru','old_price',
            'aksiya','aksiya_text','aksiya_textru','arzanladys','garasarna','garasarna_time',
            'color','razmer','count','limits','important','imgforshop']

//

module.exports= {
    post: (req, res)=>{
        for (let i = 0; i < keys.length; i++) {
            if(!req.body[keys[i]]){
                req.body[keys[i]]=''
            } 
        }
        post(req.body, (error, result)=>{
            if(error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(500).json(error)
            }
            return res.json(result)
        })
    },
    sup_admin_post: (req, res)=>{
        for(let i=0; i< keys.length; i++){
            if(!req.body[keys[i]]){
                req.body[keys[i]]=''
            }
        }
        sup_admin_post(req.body, (error, result)=>{
            if(error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(500).json(error)
            }
            return res.json(result)
        })
    },
    patch: (req, res)=>{
        const keys= Object.keys(req.body)
        keys.forEach(element=>{
            patch(element, req.body[element], req.params.id, (error, result)=>{
                if(error){
                    console.log(error.sql+'\n'+error.sqlMessage)
                    return res.status(500).json(error)
                }
            })
        })
        // return res.json()
    }
}