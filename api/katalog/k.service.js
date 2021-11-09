const pool= require('../../config/db')

module.exports= {
    get: (data, cb)=>{
        pool.query(
            `select 
                *
            from
                katalog 
            where 
                bolum_id=? and
                visible=1
            order by tertip_nomer`, 
        [
            data.bolum_id
        ],
        (error, result)=>{
            return cb(error, result)
        })
    },
    sup_admin_get: cb=>{
        pool.query(
            `select
                *
            from
                katalog
            order by tertip_nomer`,
            (error, result)=>{
                return cb(error, result)
            })
    },
    post: (data, cb)=>{
        pool.query(
            `insert into katalog(bolum_id,katalog_name,katalog_nameru,photo) 
            values(?,?,?,?)`,
        [
            data.bolum_id,
            data.katalog_name,
            data.katalog_nameru,
            data.photo
        ],
        (error, result)=>{
            return cb(error, result)
        })
    },
    patch: (key, value, id, cb)=>{
        pool.query(
            `update 
                katalog 
            set 
                 ${key}=?
            where 
                id=?`,
        [
            value,
            id
        ],
        (error, result)=>{
            return cb(error, result)
        })
    },
    delet: (id, cb)=>{
        pool.query('delete from katalog where id=?',
        [id],
        (error, result)=>{
            return cb(error, result)
        })
    }
}