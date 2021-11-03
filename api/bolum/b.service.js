const pool= require('../../config/db')

module.exports= {
    get: cb=>{
        pool.query(
            `select * 
            from bolum 
            where visible=1
            order by tertip_nomer`,
        (error, result)=>{
            return cb(error, result)
        })
    },
    sup_admin_get: cb=>{
        pool.query(
            `select *
            from bolum
            order by tertip_nomer`,
            (error, result)=>{
                return cb(error, result)
            })
    },
    getid: (id, callBack)=>{
        pool.query(
            `select
                *
            from
                bolum
            where
                id=?`,
            [id],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    post: (data, callBack)=>{
        pool.query('insert into bolum(name,photo) values(?,?)',
        [
            data.name,
            data.photo
        ],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    patch: (data, callBack)=>{
        pool.query('update bolum set name=?, photo=? where id=?',
        [
            data.name,
            data.photo,
            data.id
        ],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    delet: (id, callBack)=>{
        pool.query('delete from bolum where id=?',
        [id],
        (error, result)=>{
            return callBack(error, result)
        })
    }
}