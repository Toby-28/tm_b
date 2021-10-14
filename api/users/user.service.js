const pool= require('../../config/db')

module.exports={
    create: (data, callBack)=>{
        pool.query('insert into users(name,tel) values(?,?)',
        [
            data.name,
            data.tel
        ],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    getUsers: callBack=>{
        pool.query('select * from users',
        [],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    getUserById: (id, callBack)=>{
        pool.query('select * from users where id=?',
        [id],
        (error, result)=>{
            return callBack(error, result[0])
        })
    },
    updateUser: (data, callBack)=>{
        pool.query('update users set name=?, tel=? where id=?',
        [
            data.name,
            data.tel,
            data.id
        ],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    deleteUser: (id, callBack)=>{
        pool.query('delete from users where id=?',
        [id],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    getUserByTel: (tel, callBack)=>{
        pool.query('select * from users where tel=?',
        [tel],
        (error, result)=>{
            return callBack(error, result)
        })
    }
}