const {patch_photo}= require('./bs.service')

//

module.exports= {
    patch_photo: (req, res)=>{
        patch_photo(req.file, req.params.id, (error, result)=>{
            if (error) {
                console.log(error.sql+'\n'+error.sqlMessage)
                return res.status(500).json(error)
            }
            return res.json(result)
        })
    }
}