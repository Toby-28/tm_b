const pool= require('../../config/db')

module.exports= {
    post: (data, callBack)=>{
        pool.query(
            `insert into shop_products(shop_id, katalog_id, category_id, subcategory_id, product_id)
            values(
                (select id from shop where shop_name=?),
                (select id from katalog where katalog_name=?),
                (select id from  category where category_name=?),
                (select id from subcategory where subcategory_name=?),
                (select id from product where product_name=?)
            )`,
            [
                data.shop_name,
                data.katalog_name,
                data.category_name,
                data.subcategory_name,
                data.product_name
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    patch: (data, callBack)=>{
        pool.query(
            `update 
                shop_products
            set
                shop_id=(select id from shop where shop_name=?),
                katalog_id=(select id from katalog where katalog_name=?),
                category_id=(select id from category where category_name=?),
                subcategory_id=(select id from subcategory where subcategory_name=?),
                product_id=(select id from product where product_name=?)
            where
                id=?`,
            [
                data.shop_name,
                data.katalog_name,
                data.category_name,
                data.subcategory_name,
                data.product_name,
                data.id
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    delet: (id, callBack)=>{
        pool.query(
            `delete from shop_products where id=?`,
            [id],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    get: (data, callBack)=>{
        pool.query(
            `select
                shop_products.id,
                product.product_name
            from
                shop_products,
                product
            where
                shop_products.shop_id=(select id from shop where shop_name=?) and
                shop_products.katalog_id=(select id from katalog where katalog_name=?) and
                shop_products.category_id=(select id from category where category_name=?) and
                shop_products.subcategory_id=(select id from subcategory where subcategory_name=?) and
                shop_products.product_id=product.id`,
            [
                data.shop_name,
                data.katalog_name,
                data.category_name,
                data.subcategory_name,
                data.product_name
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    get_count: (data, callBack)=>{
        pool.query(
            `select
                count(product_name)
            from
                shop_products,
                product
            where
                shop_products.shop_id=(select id from shop where shop_name=?) and
                shop_products.katalog_id=(select id from katalog where katalog_name=?) and
                shop_products.category_id=(select id from category where category_name=?) and
                shop_products.subcategory_id=(select id from subcategory where subcategory_name=?) and
                shop_products.product_id=product.id`,
            [
                data.shop_name,
                data.katalog_name,
                data.category_name,
                data.subcategory_name,
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    }
}