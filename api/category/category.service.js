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
                category.katalog_id=${data.category_id} and
                katalog.id=${data.category_id} and
                category.visible=1`,
        (error, result)=>{
            return cb(error, result)
        })
    },
    getId: (data, cb)=>{
        pool.query(
            `select * from category where bolum_id=? and katalog_id=?`,
            [
                data.bolum_id,
                data.katalog_id
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    post: (data, cb)=>{
        pool.query(
            `insert into category(bolum_id,katalog_id,category_name) 
            values((select id from bolum where bolum_name=?), (select id from katalog where katalog_name=?), ?)`,
        [
            data.bolum_name,
            data.katalog_name,
            data.category_name
        ],
        (error, result)=>{
            return cb(error, result)
        })
    },
    patch: (data, id, cb)=>{
        pool.query(
            `update 
                category 
            set 
                bolum_id=(select id from bolum where bolum_name=?),
                katalog_id=(select id from katalog where katalog_name=?),
                category_name=? 
            where 
                id=?`,
        [
            data.bolum_name,
            data.katalog_name,
            data.category_name,
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