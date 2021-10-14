const pool= require('../../config/db')

module.exports= {
    get: callBack=>{
        pool.query(
            `select 
                product.product_name,
                product_photo.photo,
                product_photo.id
            from 
                product,
                product_photo,
            where 
                product_photo.product_id=product.id`, 
        (error, result)=>{
            return callBack(error, result)
        })
    },
    getId: (data, callBack)=>{
        pool.query(
            `select * from katalog where bolum_id=?`,
            [
                data.bolum_id
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    post: (data, callBack)=>{
        console.log(data.file)
        pool.query(
            `insert into product_photo(product_id, photo) 
            values((select id from product where product_name=?),?)`,
        [
            data.product_name,
            data.photo
        ],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    patch: (data, callBack)=>{
        pool.query(
            `update 
                katalog 
            set 
                bolum_id=(select id from bolum where bolum_name=?), 
                katalog_name=? 
            where 
                id=?`,
        [
            data.bolum_name,
            data.katalog_name,
            data.id
        ],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    delet: (id, callBack)=>{
        pool.query('delete from katalog where id=?',
        [id],
        (error, result)=>{
            return callBack(error, result)
        })
    }
}