const pool= require('../../config/db')

module.exports= {
    post: (data, callBack)=>{
        pool.query(
            `insert into service_shops(login, password, phone)
            values(?,?,?)`,
            [
                data.login,
                data.password,
                data.phone
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    }
}