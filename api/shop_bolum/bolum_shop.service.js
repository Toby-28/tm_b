const pool=require('../../config/db')

module.exports= {
    get: (callBack)=>{
        pool.query(
            `select 
                
            from
                
            where
                `,
        (error, result)=>{
            return callBack(error, result)
        })
    },
    getId: (data, callBack)=>{
        pool.query(
            ``,
            [],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    post: (data, callBack)=>{
        pool.query(
            ``,
            [],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    patch: (data, callBack)=>{
        pool.query(
            ``,
            [],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    delet: (id, callBack)=>{
        pool.query(
            '',
            [id],
            (error, result)=>{
                return callBack(error, result)
            })
    }
}