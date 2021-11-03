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
        if (data) {
            console.log(data)
        }
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
        pool.query('insert into bolum(name,photo) values(?,?)',
        [
            data.name,
            data.photo
        ],
        (error, result)=>{
            return cb(error, result)
        })
    },
    patch: (data, cb)=>{
        pool.query('update bolum set name=?, photo=? where id=?',
        [
            data.name,
            data.photo,
            data.id
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