const pool= require('../../config/db')

module.exports= {
    get: (data, callBack)=>{
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
            `insert into shop(${data.keys})
             values(${data.values})`,
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
    delet: (data, callBack)=>{
        pool.query(
            `delete from shop where id=?`,
            [id],
            (error, result)=>{
                return callBack(error, result)
            })
    }
}