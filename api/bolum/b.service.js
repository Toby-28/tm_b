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
    sup_admin_get: (data, cb)=>{
        pool.query(
            `select *
            from bolum
            order by tertip_nomer`,
            (error, result)=>{
                return cb(error, result)
            })
    },
    getid: (id, cb)=>{
        pool.query(
            `select
                *
            from
                bolum
            where
                id=?`,
            [id],
            (error, result)=>{
                return cb(error, result)
            })
    },
    post: (data, cb)=>{
        pool.query('insert into bolum(bolum_name,bolum_nameru,photo) values(?,?,?)',
        [
            data.bolum_name,
            data.bolum_nameru,
            data.photo,
        ],
        (error, result)=>{
            return cb(error, result)
        })
    },
    patch: (key, value, id, cb)=>{
        pool.query(`update bolum set ${key}=? where id=?`,
        [
            value,
            id
        ],
        (error, result)=>{
            return cb(error, result)
        })
    },
    delet: (id, cb)=>{
        pool.query('delete from bolum where id=?',
        [id],
        (error, result)=>{
            return cb(error, result)
        })
    }
}