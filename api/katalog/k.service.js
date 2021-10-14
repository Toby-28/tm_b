const pool= require('../../config/db')

module.exports= {
    get: callBack=>{
        pool.query(
            `select 
                bolum.bolum_name, 
                katalog.katalog_name,
                katalog.id
            from 
                bolum, 
                katalog 
            where 
                katalog.bolum_id=bolum.id`, 
        (error, result)=>{
            return callBack(error, result)
        })
    },
    getId: (data, callBack)=>{
        pool.query(
            `select * from katalog where bolum_id=?`,
            [
                data.bolum_id
            ],
            (error, result)=>{
                return callBack(error, result)
            })
    },
    post: (data, callBack)=>{
        pool.query(
            `insert into katalog(bolum_id,katalog_name) 
            values((select id from bolum where bolum_name=?),?)`,
        [
            data.bolum_name,
            data.katalog_name
        ],
        (error, result)=>{
            return callBack(error, result)
        })
    },
    patch: (data, callBack)=>{
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
            return callBack(error, result)
        })
    },
    delet: (id, callBack)=>{
        pool.query('delete from katalog where id=?',
        [id],
        (error, result)=>{
            return callBack(error, result)
        })
    }
}