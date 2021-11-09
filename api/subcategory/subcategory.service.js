const pool=require('../../config/db')

module.exports= {
    get: (data, cb)=>{
        pool.query(
            `select 
                bolum.bolum_name,
                katalog.katalog_name,
                category.category_name,
                subcategory.*
            from
                bolum,
                katalog,
                category,
                subcategory
            where
                subcategory.bolum_id=${data.bolum_id} and 
                bolum.id=${data.bolum_id} and 
                subcategory.katalog_id=${data.katalog_id} and 
                katalog.id=${data.katalog_id} and 
                subcategory.category_id=${data.category_id} and
                category.id=${data.category_id} and
                subcategory.visible=1`,
        (error, result)=>{
            return cb(error, result)
        })
    },
    sup_admin_get: (cb)=>{
        pool.query(
            `select * from subcategory`,
            (error, result)=>{
                return cb(error, result)
            })
    },
    post: (data, cb)=>{
        pool.query(
            `insert into subcategory(bolum_id,katalog_id,category_id,subcategory_name,subcategory_nameru) 
            values(?,?,?,?,?)`,
        [
            data.bolum_id,
            data.katalog_id,
            data.category_id,
            data.subcategory_name,
            data.subcategory_nameru
        ],
        (error, result)=>{
            return cb(error, result)
        })
    },
    patch: (key, value, id, cb)=>{
        pool.query(
            `update 
                subcategory 
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
        pool.query('delete from subcategory where id=?',
        [id],
        (error, result)=>{
            return cb(error, result)
        })
    }
}