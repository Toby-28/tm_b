const pool= require('../../config/db')

// 

module.exports= {
    post: (data, cb)=>{
        pool.query(
            `insert into banner(bolum_id,shop_id,photo,service_id,product_id) 
            values(?,?,?,?,?)`, 
            [
                data.bolum_id,
                data.shop_id,
                data.photo,
                data.service_id,
                // data.tertip_nomer,
                data.product_id,
                // data.route
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    patch: (key, value, id, cb)=>{
        pool.query(
            `update banner 
            set ${key}=?
            where id=?`,
            [
                value,
                id
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    get: (cb)=>{
        pool.query(
            `select * from banner where access=1 order by tertip_nomer`,
            (error, result)=>{
                return cb(error, result)
            })
    },
    sup_admin_get: cb=>{
        pool.query(
            `select * from banner order by tertip_nomer`,
            (error, result)=>{
                return cb(error, result)
            })
    },
    delet: (id, cb)=>{
        pool.query(
            `delete from banner where id=?`,
            [id],
            (error, result)=>{
                return cb(error, result)
            })
    }
}