const pool=require('../../config/db')

module.exports= {
    get: (callBack)=>{
        pool.query(
            `select 
                bolum.bolum_name,
                katalog.katalog_name,
                category.category_name,
                subcategory.subcategory_name,
                subcategory.id 
            from
                bolum,
                katalog,
                category,
                subcategory
            where
                subcategory.bolum_id=bolum.id and subcategory.katalog_id=katalog.id and subcategory.category_id=category.id`,
        (error, result)=>{
            return callBack(error, result)
        })
    },
    getId: (data, callBack)=>{
        pool.query(
            `select * from subcategory where bolum_id=? and katalog_id=? and category_id=?`,
            [
                data.bolum_id,
                data.katalog_id,
                data.category_id
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    post: (data, callBack)=>{
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
            return callBack(error, result)
        })
    },
    patch: (data, callBack)=>{
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