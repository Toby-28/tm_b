const pool= require('../../config/db')

// razmer

module.exports= {
    post: (data, cb)=>{
        pool.query(
            `insert into product_m(
                shop_id, bolum_id, katalog_id, category_id, subcategory_id,
                product_name, product_nameru, description, descriptionru, price, old_price,
                aksiya, aksiya_text, aksiya_textru, arzanladys, garasarna, garasarna_time,
                color, razmer, count, limits, important, imgforshop
            )
            values(
                ?,?,?,?,?,
                ?,?,?,?,?,?,
                ?,?,?,?,?,?,
                ?,?,?,?,?,?
            )`,
            [
                data.shop_id, data.bolum_id, data.katalog_id, data.category_id, data.subcategory_id,
                data.product_name, data.product_nameru, data.description, data.descriptionru, data.price,
                data.old_price, data.aksiya, data.aksiya_text, data.aksiya_textru, data.arzanladys, data.garasarna,
                data.garasarna_time, data.color, data.razmer, data.count, data.limits, data.important, data.imgforshop
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    sup_admin_post: (data, cb)=>{
        pool.query(
            `insert into product(
                shop_id, bolum_id, katalog_id, category_id, subcategory_id,
                product_name, product_nameru, description, descriptionru, price, old_price,
                aksiya, aksiya_text, aksiya_textru, arzanladys, garasarna, garasarna_time,
                color, razmer, count, limits, important, imgforshop
            )
            values(
                ?,?,?,?,?,
                ?,?,?,?,?,?,
                ?,?,?,?,?,?,
                ?,?,?,?,?,?
            )`,
            [
                data.shop_id, data.bolum_id, data.katalog_id, data.category_id, data.subcategory_id,
                data.product_name, data.product_nameru, data.description, data.descriptionru, data.price,
                data.old_price, data.aksiya, data.aksiya_text, data.aksiya_textru, data.arzanladys, data.garasarna,
                data.garasarna_time, data.color, data.razmer, data.count, data.limits, data.important, data.imgforshop
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    patch: (key, value, id, cb)=>{
        pool.query(
            `update product_m set ${key}=? where id=?`,
            [
                value,
                id
            ],
            (error, result)=>{
                return cb(error, result)
            })
    }
}