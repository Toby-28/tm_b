const {patch_photo, get_photo, sup_admin_patch_photo}= require('./bs.service')

//

module.exports= {
    patch_photo: (req, res)=>{
        patch_photo(req.file.filename, req.params.id, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(500).json(error)
            }
            return res.json(result)
        })
    },
    sup_admin_patch_photo: (req, res)=>{
        // suraty gocurmeli!!!
        sup_admin_patch_photo(req.params.id, req.params.tertip, req.params.shop_id, (error, result)=>{
            if(error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(500).json(error)
            }
            return res.json(result)
        })
    },
    get_photo: (req, res)=>{
        get_photo(req.params.id, (error, result)=>{
            if(error){
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(500).json(error)
            }
            return res.json(result)
        })
    }
}