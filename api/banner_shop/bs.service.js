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
    sup_admin_patch_photo: (id, order, shop_id, cb)=>{
        pool.query(
            `select photo from banner_shop_m where id=?`,
            [id],
            (error, result)=>{
                if(error) cb(error, false)
                pool.query(
                    `update banner_shop set photo=? where order=? AND shop_id=?`,
                    [result[0].photo,order,shop_id],
                    (error, result)=>{
                        return cb(error, result)
                    })
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