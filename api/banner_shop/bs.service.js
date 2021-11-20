const pool= require('../../config/db')

//post requesti shop doredilende ulanmaly

module.exports= {
    patch_photo: (data, id, cb)=>{
        pool.query(
            `update banner_shop
            set photo=?
            where id=?`,
            [
                data.filename,
                id
            ],
            (error, result)=>{
                return cb(error, result)
            })
    }
}