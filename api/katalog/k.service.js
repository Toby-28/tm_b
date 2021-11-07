const pool= require('../../config/db')

module.exports= {
    get: (data, cb)=>{
        pool.query(
            `select 
                *
            from
                katalog 
            where 
                bolum_id=${data.bolum_id} and
                visible=1
            order by tertip_nomer`, 
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
    getId: (data, cb)=>{
        pool.query(
            `select * from katalog where bolum_id=?`,
            [
                data.bolum_id
            ],
            (error, result)=>{
                return cb(error, result)
            })
    },
    post: (data, cb)=>{
        pool.query(
            `insert into katalog(bolum_id,katalog_name) 
            values((select id from bolum where bolum_name=?),?)`,
        [
            data.bolum_name,
            data.katalog_name
        ],
        (error, result)=>{
            return cb(error, result)
        })
    },
    patch: (data, cb)=>{
        pool.query(
            `update 
                katalog 
            set 
                bolum_id=(select id from bolum where bolum_name=?), 
                katalog_name=? 
            where 
                id=?`,
        [
            data.bolum_name,
            data.katalog_name,
            data.id
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