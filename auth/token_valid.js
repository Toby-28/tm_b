const { verify}= require('jsonwebtoken')

module.exports= {
    checkToken: (req, res, next)=>{
        let token= req.get('authorization')
        if (token) {
            token= token.slice(7)
            verify(token, 'hushnud', (error, decoded)=>{
                if (error) {
                    console.log('==> '+error)
                    res.json({
                        message: 'invalid token'
                    })
                }else{
                    next()
                }
            })
        } else {
            res.json({
                message: 'Access denied!'
            })
        }
    }
}