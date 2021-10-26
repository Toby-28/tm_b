const pool= require('../../config/db')

module.exports= {
    post: (data, callBack)=>{
        pool.query(
            `insert into service_shops(login, password)
            values(?,?)`,
            [
                data.login,
                data.password
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    }
}