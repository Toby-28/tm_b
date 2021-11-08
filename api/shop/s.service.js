const pool= require('../../config/db')

module.exports= {
    get: (data, cb)=>{
        pool.query(
            `select
                ${data.keys}
            from
                shop
            where
                ${data.where}=${data.value}`,
            (error, result)=>{
                return cb(error, result)
            })
    },
    post: (data, cb)=>{
        pool.query(
            `insert into shop(shop_name)
             values(?)`,
             [
                data.shop_name
             ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    patch: (data, id, cb)=>{
        pool.query(
            `update shop
             set
                ?
            where
                id=${id}`,
            [
                data
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    delet: (id, cb)=>{
        pool.query(
            `delete from shop where id=?`,
            [id],
            (error, result)=>{
                return cb(error, result)
            })
    }
}