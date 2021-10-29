const pool= require('../../config/db')

module.exports= {
    post: (data, cb)=>{
        pool.query(
            `insert into sellers(login, password, type, shop_id)
            values(?,?,?,?)`,
            [
                data.login,
                data.password,
                data.type,
                data.shop_id
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
                id=?`,
            [
                data.password,
                data.id
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
    }
}