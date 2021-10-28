const pool= require('../../config/db')

module.exports= {
    get: (data, callBack)=>{
        pool.query(
            `select
                ${data.keys}
            from
                shop
            where
                ${data.where}=${data.value}`,
            (error, result)=>{
                return callBack(error, result)
            })
    },
    post: (data, callBack)=>{
        if (data.shop_name) {
            pool.query(`select id from shop where shop_name=?`,[data.shop_name],(error, result)=>{
                console.log(result[0].id)
                if (result[0].id) {
                    return callBack(null, 'Name of shop can not be repeated!')
                }
            })
        }
        pool.query(
            `insert into shop(login,password,shop_name,phone)
             values(?,?,?,?)`,
             [
                 data.login,
                 data.password,
                 data.shop_name,
                 data.phone
             ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    patch: (data, callBack)=>{
        pool.query(
            `update shop
             set
                ?
            where
                id=?`,
            [
                data
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    delet: (data, callBack)=>{
        pool.query(
            `delete from shop where id=?`,
            [id],
            (error, result)=>{
                return callBack(error, result)
            })
    }
}