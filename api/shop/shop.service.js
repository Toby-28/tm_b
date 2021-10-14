const pool=require('../../config/db')

module.exports= {
    get: (callBack)=>{
        pool.query(
            `select 
                shop.id,
                shop.shop_name,
                shop.description,
                shop.tel,
                shop.address,
                shop.rating,
                shop.followers,
                shop.photo,
                shop.modified,
                shop.email,
                shop.website,
                shop.insta,
                shop.imo,
                shop.login,
                shop.password,
                shop_center.shop_center_name
            from
                shop,
                shop_center
            where
                shop.shop_center_id=shop_center.id`,
        (error, result)=>{
            return callBack(error, result)
        })
    },
    getId: (data, callBack)=>{
        pool.query(
            `select * from shop where shop_center_id=?`,
            [
                data.shop_center_id
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    post: (data, callBack)=>{
        pool.query(
            `insert into 
                shop(
                    shop_center_id,
                    shop_name,
                    description,
                    tel,
                    address,
                    rating,
                    followers,
                    photo,
                    email,
                    website,
                    insta,
                    imo,
                    login,
                    password
                ) 
            values((select id from shop_center where shop_center_name=?),?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [
            data.shop_center_name,
            data.shop_name,
            data.description,
            data.tel,
            data.address,
            data.rating,
            data.followers,
            data.photo,
            data.email,
            data.website,
            data.insta,
            data.imo,
            data.login,
            data.password
        ],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    patch: (data, callBack)=>{
        pool.query(
            `update 
                shop 
            set 
                shop_center_id=(select id from shop_center where shop_center_name=?),
                shop_name=?,
                description=?,
                tel=?,
                address=?,
                rating=?,
                followers=?,
                photo=?,
                email=?,
                website=?,
                insta=?,
                imo=?,
                login=?,
                password=?
            where 
                id=?`,
        [
            data.shop_center_name,
            data.shop_name,
            data.description,
            data.tel,
            data.address,
            data.rating,
            data.followers,
            data.photo,
            data.email,
            data.website,
            data.insta,
            data.imo,
            data.login,
            data.password,
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