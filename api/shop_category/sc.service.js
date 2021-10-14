const pool= require('../../config/db')

module.exports= {
    post: (data, callBack)=>{
        pool.query(
            `insert into shop_category(shop_id, katalog_id, category_id)
            values(
                (select id from shop where shop_name=?),
                (select id from katalog where katalog_name=?),
                (select id from category where category_name=?))`,
            [
                data.shop_name,
                data.katalog_name,
                data.category_name
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    delet: (id, callBack)=>{
        pool.query(
            `delete from shop_category where id=?`,
            [id],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    get: (data, callBack)=>{
        pool.query(
            `select 
                category_name
            from
                shop_category,
                category
            where
                shop_category.shop_id=(select id from shop where shop_name=?) and
                shop_category.katalog_id=(select id from katalog where katalog_name=?) and
                shop_category.category_id=category.id`,
            [
                data.shop_name,
                data.katalog_name
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    get_count: (data, callBack)=>{
        pool.query(
            `select 
                count(category_name)
            from
                shop_category,
                category
            where
                shop_category.shop_id=(select id from shop where shop_name=?) and
                shop_category.katalog_id=(select id from katalog where katalog_name=?) and
                shop_category.category_id=category.id`,
            [
                data.shop_name,
                data.katalog_name
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    }
}