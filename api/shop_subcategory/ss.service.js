const pool= require('../../config/db')

module.exports= {
    post: (data, callBack)=>{
        pool.query(
            `insert into shop_subcategory(shop_id, katalog_id, category_id, subcategory_id)
            values(
                (select id from shop where shop_name=?),
                (select id from katalog where katalog_name=?),
                (select id from category where category_name=?),
                (select id from subcategory where subcategory_name=?)
            )`,
            [
                data.shop_name,
                data.katalog_name,
                data.category_name,
                data.subcategory_name
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    delet: (id, callBack)=>{
        pool.query(
            `delete from shop_subcategory where id=?`,
            [id],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    get: (data, callBack)=>{
        pool.query(
            `select
                subcategory_name
            from
                shop_subcategory,
                subcategory
            where
                shop_subcategory.shop_id=(select id from shop where shop_name=?) and
                shop_subcategory.katalog_id=(select id from katalog where katalog_name=?) and
                shop_subcategory.category_id=(select id from category where category_name=?) and
                shop_subcategory.subcategory_id=subcategory.id`,
            [
                data.shop_name,
                data.katalog_name,
                data.category_name
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    get_count: (data, callBack)=>{
        pool.query(
            `select
                count(subcategory_name)
            from
                shop_subcategory,
                subcategory
            where
                shop_subcategory.shop_id=(select id from shop where shop_name=?) and
                shop_subcategory.katalog_id=(select id from katalog where katalog_name=?) and
                shop_subcategory.category_id=(select id from category where category_name=?) and
                shop_subcategory.subcategory_id=subcategory.id`,
            [
                data.shop_name,
                data.katalog_name,
                data.category_name
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    }
}