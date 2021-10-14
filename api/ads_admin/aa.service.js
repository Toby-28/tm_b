const pool= require('../../config/db')

module.exports= {
    post: (data, filename, callBack)=>{
        pool.query(
            `insert into ads_admin(tertip_nomer,product_id,ads_photo,ads_description)
            values(?,?,?,?)`,
            [
                data.tertip_nomer,
                data.product_id,
                filename,
                data.ads_description
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    get: (callBack)=>{
        pool.query(
            `select
                *
            from
                ads_admin
            order by
                tertip_nomer`,
            (error, result)=>{
                return callBack(error, result)
            })
    }
}