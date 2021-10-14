const pool= require('../config/db')

module.exports= {
    check: (name, callBack)=>{
        pool.query('select * from sup_adm where name=?',
        [name],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    get: (callBack)=>{
        pool.query('select password from sup_adm where name=?',
        [
            'murad'
        ],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    edit: (password, callBack)=>{
        pool.query('update sup_adm set password=? where name=?',
        [
            password,
            'murad'
        ],
        (error, result)=>{
            if(error){
                return callBack(error, result)
            } 
        })
    }
}