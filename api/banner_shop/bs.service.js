const pool= require('../../config/db')

//post requesti shop doredilende ulanmaly

module.exports= {
    patch_photo: (filename, id, cb)=>{
        pool.query(
            `update banner_shop_m set photo=? where id=?`,
            [
                filename,
                id
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    get_photo: (id, cb)=>{
        pool.query(
            `select * from banner_shop_m where shop_id=?`,
            [id],
            (error, result)=>{
                return cb(error, result)
            })
    }
}