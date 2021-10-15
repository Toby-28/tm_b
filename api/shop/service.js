const pool= require('../../config/db')

module.exports= {
    get: (id, callBack)=>{
        pool.query(
            `select
                *
            from
                shop
            where
                id=?`,
            [id],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    post: (data, callBack)=>{
        pool.query(
            `insert into shop()
             values()`,
            [
                data
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    patch: (data, callBack)=>{
        pool.query(
            `update shop
             set
                ?
            where
                id=?`,
            [
                data
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    delet: (id, callBack)=>{
        pool.query(
            `delete from shop where id=?`,
            [id],
            (error, result)=>{
                return callBack(error, result)
            })
    }
}