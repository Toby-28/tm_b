const pool= require('../../config/db')

module.exports= {
    post: (data, callBack)=>{
        pool.query(
            `insert into shop_katalog(shop_id, katalog_id) 
            values((select id from shop where shop_name=?), (select id from katalog where katalog_name=?))`,
            [
                data.shop_name,
                data.katalog_name
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    delet: (id, callBack)=>{
        pool.query(`delete from shop_katalog where id=?`,
        [id],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    get: (shop_name, callBack)=>{
        pool.query(
            `select 
                katalog_name 
            from
                katalog,
                shop_katalog
            where
                shop_katalog.shop_id=(select id from shop where shop_name=?) and 
                shop_katalog.katalog_id=katalog.id`,
            [shop_name],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    get_count: (shop_name, callBack)=>{
        pool.query(
            `select
                count(katalog_name)
            from
                shop_katalog,
                katalog
            where
                shop_katalog.shop_id=(select id from shop where shop_name=?) and 
                shop_katalog.katalog_id=katalog.id`,
            [shop_name],
            (error, result)=>{
                return callBack(error, result)
            })
    }
}