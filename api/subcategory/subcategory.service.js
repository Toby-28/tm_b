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
    getId: (data, cb)=>{
        pool.query(
            `select * from subcategory where bolum_id=? and katalog_id=? and category_id=?`,
            [
                data.bolum_id,
                data.katalog_id,
                data.category_id
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    post: (data, cb)=>{
        pool.query(
            `insert into subcategory(bolum_id,katalog_id,category_id,subcategory_name) 
            values(
                (select id from bolum where bolum_name=?), 
                (select id from katalog where katalog_name=?), 
                (select id from category where category_name=?), 
                ?)`,
        [
            data.bolum_name,
            data.katalog_name,
            data.category_name,
            data.subcategory_name
        ],
        (error, result)=>{
            return cb(error, result)
        })
    },
    patch: (data, id, cb)=>{
        pool.query(
            `update 
                subcategory 
            set 
                bolum_id=(select id from bolum where bolum_name=?),
                katalog_id=(select id from katalog where katalog_name=?),
                category_id=(select id from category where category_name=?),
                subcategory_name=?
            where 
                id=?`,
        [
            data.bolum_name,
            data.katalog_name,
            data.category_name,
            data.subcategory_name,
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