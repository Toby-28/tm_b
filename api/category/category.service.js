const pool=require('../../config/db')

module.exports= {
    get: (data, cb)=>{
        pool.query(
            `select
                bolum.bolum_name,
                katalog.katalog_name,
                category.*
            from
                bolum,
                katalog,
                category
            where
                category.bolum_id=${data.bolum_id} and 
                bolum.id=${data.bolum_id} and 
                category.katalog_id=${data.katalog_id} and
                katalog.id=${data.katalog_id} and
                category.visible=1`,
        (error, result)=>{
            return cb(error, result)
        })
    },
    sup_admin_get: (cb)=>{
        pool.query(
            `select * from category`,
            (error, result)=>{
                return cb(error, result)
            })
    },
    post: (data, cb)=>{
        pool.query(
            `insert into category(bolum_id,katalog_id,category_name,category_nameru,photo) 
            values(?,?,?,?,?)`,
        [
            data.bolum_id,
            data.katalog_id,
            data.category_name,
            data.category_nameru,
            data.photo
        ],
        (error, result)=>{
            return cb(error, result)
        })
    },
    patch: (key, value, id, cb)=>{
        pool.query(
            `update 
                category 
            set 
                ${key}=?
            where 
                id=?`,
        [
            value,
            id
        ],
        (error, result)=>{
            return cb(error, result)
        })
    },
    delet: (id, cb)=>{
        pool.query('delete from category where id=?',
        [id],
        (error, result)=>{
            return cb(error, result)
        })
    }
}