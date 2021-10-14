const pool=require('../../config/db')

module.exports= {
    get: (callBack)=>{
        pool.query(
            `select 
                bolum.bolum_name,
                katalog.katalog_name,
                category.category_name,
                category.id 
            from
                bolum,
                katalog,
                category
            where
                category.bolum_id=bolum.id and category.katalog_id=katalog.id`,
        (error, result)=>{
            return callBack(error, result)
        })
    },
    getId: (data, callBack)=>{
        pool.query(
            `select * from category where bolum_id=? and katalog_id=?`,
            [
                data.bolum_id,
                data.katalog_id
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    post: (data, callBack)=>{
        pool.query(
            `insert into category(bolum_id,katalog_id,category_name) 
            values((select id from bolum where bolum_name=?), (select id from katalog where katalog_name=?), ?)`,
        [
            data.bolum_name,
            data.katalog_name,
            data.category_name
        ],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    patch: (data, callBack)=>{
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
            data.id
        ],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    delet: (id, callBack)=>{
        pool.query('delete from category where id=?',
        [id],
        (error, result)=>{
            return callBack(error, result)
        })
    }
}