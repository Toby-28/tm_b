const pool=require('../../config/db')

module.exports= {
    get: (callBack)=>{
        pool.query(
            `select
                product.id, 
                shop.shop_name,
                bolum.bolum_name,
                katalog.katalog_name,
                category.category_name,
                subcategory.subcategory_name,
                product.product_name,
                product.brand,
                product.description,
                product.price,
                product.old_price,
                product.aksiya,
                product.aksiya_text,
                product.arzanladys,
                product.garasarna,
                product.garasarna_time,
                product.rating_sum,
                product.rating,
                product.sold,
                product.seen,
                product.likes,
                product.color,
                product.razmer,
                product.count,
                product.limit
            from
                shop,
                bolum,
                katalog,
                category,
                subcategory,
                product
            where
                product.shop_id=shop.id and 
                product.bolum_id=bolum.id and 
                product.katalog_id=katalog.id and 
                product.category_id=category.id and 
                product.subcategory_id=subcategory.id`,
        (error, result)=>{
            return callBack(error, result)
        })
    },
    getId: (data, callBack)=>{
        pool.query(
            `select * from product where shop_id=? and bolum_id=? and katalog_id=? and category_id=? and subcategory_id=?`,
            [
                data.shop_id,
                data.bolum_id,
                data.katalog_id,
                data.category_id,
                data.subcategory_id
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    post: (data, callBack)=>{
        pool.query(
            `insert into 
                product(
                    shop_id,
                    bolum_id,
                    katalog_id,
                    category_id,
                    subcategory_id,
                    product_name,
                    brand,
                    description,
                    price,
                    old_price,
                    aksiya,
                    aksiya_text,
                    arzanladys,
                    garasarna,
                    garasarna_time,
                    rating_sum,
                    rating,
                    sold,
                    seen,
                    likes,
                    color,
                    razmer,
                    count,
                    limits
                ) 
            values(
                (select id from shop where shop_name=?),
                (select id from bolum where bolum_name=?),
                (select id from katalog where katalog_name=?),
                (select id from category where category_name=?),
                (select id from subcategory where subcategory_name=?),
                ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [
            data.shop_name,
            data.bolum_name,
            data.katalog_name,
            data.category_name,
            data.subcategory_name,
            data.product_name,
            data.brand,
            data.description,
            data.price,
            data.old_price,
            data.aksiya,
            data.aksiya_text,
            data.arzanladys,
            data.garasarna,
            data.garasarna_time,
            data.rating_sum,
            data.rating,
            data.sold,
            data.seen,
            data.likes,
            data.color,
            data.razmer,
            data.count,
            data.limits
        ],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    patch: (data, callBack)=>{
        pool.query(
            `update 
                product 
            set 
                shop_id=(select id from shop where shop_name=?),
                bolum_id=(select id from bolum where bolum_name=?),
                katalog_id=(select id from katalog where katalog_name=?),
                category_id=(select id from category where category_name=?),
                subcategory_id=(select id from subcategory where subcategory_name=?),
                product_name=?,
                brand=?,
                description=?,
                price=?,
                old_price=?,
                aksiya=?,
                aksiya_text=?,
                arzanladys=?,
                garasarna=?,
                garasarna_time=?,
                rating_sum=?,
                rating=?,
                sold=?,
                seen=?,
                likes=?,
                color=?,
                razmer=?,
                count=?,
                limits=?,
                checked=?
            where 
                id=?`,
        [
            data.shop_name,
            data.bolum_name,
            data.katalog_name,
            data.category_name,
            data.subcategory_name,
            data.product_name,
            data.brand,
            data.description,
            data.price,
            data.old_price,
            data.aksiya,
            data.aksiya_text,
            data.arzanladys,
            data.garasarna,
            data.garasarna_time,
            data.rating_sum,
            data.rating,
            data.sold,
            data.seen,
            data.likes,
            data.color,
            data.razmer,
            data.count,
            data.limits,
            data.checked,
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