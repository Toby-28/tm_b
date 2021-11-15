const pool= require('mysql')

module.exports= {
    post: (data, cb)=>{
        pool.request(
            `insert into banner()
            values()`)
    }
}