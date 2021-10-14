const {post, delet, get, get_count}= require('./sk.service')

module.exports= {
    post: (req, res)=>{
        post(req.body, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                message: result
            })
        })
    },
    delet: (req, res)=>{
        delet(req.body.id, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                message: result
            })
        })
    },
    get: (req, res)=>{
        get(req.body.shop_name, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                result: result
            })
        })
    },
    get_count: (req, res)=>{
        get_count(req.body.shop_name, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                result: result
            })
        })
    }
}