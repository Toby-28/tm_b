const { check, get, edit}= require('./sa.service')
const { compare, hash}= require('bcrypt')
const { sign}= require('jsonwebtoken')

module.exports={
    check: (req, res)=>{
        check(req.body.name,(error, result)=>{
            if (error) {
                console.log('==> '+error)
                return res.end(error.message)
            }
            if(result[0]===undefined){
                return res.end('yalnys name')
            }
            compare(req.body.password,result[0].password).
            then(same=>{
                if (same) {
                    result.password= undefined
                    const token= sign({results: result},process.env.TOKENSECRETKEY,{expiresIn: process.env.TOKENEXPIREAT})
                    return res.json({
                        message: 'login success',
                        token: token
                    })
                }else{
                    return res.send('invalid password')
                }
            }).
            catch(error=>{
                console.log('==> '+error)
            })
        })
    },
    get: (req, res)=>{
        get((error, result)=>{
            if (error) throw error
            compare(req.body.password,result[0].password).then(same=>{
                if (same) {
                    return res.json({
                        message: 1
                    })
                }
                return res.json({
                    message: 0
                })
            })
        })
    },
    edit: (req, res)=>{
        if (req.body.password!=req.body.confirmpassword) {
            return res.json({
                message: 0
            })
        }
        hash(req.body.password, 10).then(hashed=>{
            edit(hashed,(error, result)=>{
                if (error) {
                    return res.json({
                        message: error.sql+'\n'+error.message
                    })
                }
                return res.end(result)
            })
        }).catch(error=>{
            return res.json({
                message: error
            })
        }) 
    }
}