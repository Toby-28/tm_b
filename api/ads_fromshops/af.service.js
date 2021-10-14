const pool= require('../../config/db')

module.exports= {
    postproduct: (data, callBack)=>{
        pool.query(
            `insert into ads_fromshops(shop_id,payment,product_id,is_product)
            values(?,?,?,?)`,
            [
                data.shop_id,
                data.payment,
                data.product_id,
                data.is_product
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    postphoto:(data, filename, callBack)=>{
        pool.query(
            `insert into ads_fromshops(shop_id,ads_photo,payment,ads_description)
            values(?,?,?,?)`,
            [
                data.shop_id,
                filename,
                data.payment,
                data.ads_description
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    delet:(id, callBack)=>{
        pool.query(
            `delete from ads_fromshops where id=?`,
            [id],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    getproduct: (payment, callBack)=>{
        pool.query(
            `select
                shop_id,
                product_id,
                id
            from
                ads_fromshops
            where
                payment=? and
                is_product=1`,
            [payment],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    getphoto: (payment, callBack)=>{
        pool.query(
            `select
                id,
                shop_id,
                ads_photo,
                ads_description
            from
                ads_fromshops
            where
                payment=? and
                is_product=0`,
            [payment],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    getcount: (payment, callBack)=>{
        pool.query(
            `select
                count(*)
            from
                ads_fromshops
            where
                payment=?`,
            [payment],
            (error, result)=>{
                return callBack(error, result)
            })
    }
}