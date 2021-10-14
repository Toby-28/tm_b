const { 
    postproduct, 
    postphoto, 
    delet, 
    getproduct, 
    getphoto,
    getcount}= require('./af.service')

module.exports= {
    postproduct: (req, res)=>{
        postproduct(req.body, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                message: result
            })
        })
    },
    postphoto: (req, res)=>{
        postphoto(req.body, req.file.filename, (error, result)=>{
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
        if (req.body.is_product==1) {
            getproduct(req.body.payment, (error, result)=>{
                if (error) {
                    console.log(error)
                }
                res.json({
                    result: result
                })
            })
        }else{
            getphoto(req.body.payment, (error, result)=>{
                if (error) {
                    console.log(error)
                }
                res.json({
                    result: result
                })
            })
        }
    },
    getcount: (req, res)=>{
        getcount(req.body.payment, (error, result)=>{
            if (error) {
                console.log(error)
            }
            res.json({
                result: result
            })
        })
    }
}