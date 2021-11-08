const pool= require('../../config/db')

module.exports= {
    post: (data, cb)=>{
        pool.query(
            `insert into sellers(login, password, type, shop_id)
            values(?,?,?,(select id from shop where shop_name=?))`,
            [
                data.login,
                data.password,
                data.type,
                data.shop_name
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    sellers_patch: (data, cb)=>{
        pool.query(
            `update 
                sellers
            set
                password=?
            where
                login=?`,
            [
                data.password,
                data.login
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    sup_admin_patch: (data, cb)=>{
        pool.query(
            `update
                sellers
            set
                access=?
            where
                id=?`,
            [
                data.access,
                data.id
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    sellers_get: (data, cb)=>{
        pool.query(
            `select
                *
            from
                sellers
            where
                login=?`,
            [
                data.login
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    sup_admin_get: (data, cb)=>{
        pool.query(
            `select
                *
            from
                sellers
            where
                ${data.key}=?`,
            [
                data.value
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    delet: (data, cb)=>{
        pool.query(
            `delete from sellers where id=?`,
            [data.id],
            (error, result)=>{
                return cb(error, result)
            })
    }
}