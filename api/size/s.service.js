const pool= require('../../config/db')

module.exports= {
    get: (product_name, callBack)=>{
        pool.query(
            `select 
                * 
            from
                size 
            where 
                product_id=(select id from product where product_name=?) and 
                exist=1`,
            [product_name],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    patch: (data, callBack)=>{
        pool.query(
            `update 
                size
            set
                product_id=(select id from product where product_name=?),
                size=?,
                exist=?
            where
                id=?`,
            [
                data.product_name,
                data.size,
                data.exist,
                data.id
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    post: (data, callBack)=>{
        pool.query(
            `insert into size(product_id, size, exist)
            values((select id from product where product_name=?),?,?)`,
            [
                data.product_name,
                data.size,
                data.exist
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    delet: (id, callBack)=>{
        pool.query(
            `delete from size where id=?`,
            [id],
            (error, result)=>{
                return callBack(error, result)
            })
    }
}