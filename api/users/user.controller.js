const {
    create, 
    getUsers, 
    getUserById, 
    updateUser, 
    deleteUser,
    getUserByTel
}= require('./user.service')

const {genSaltSync, hashSync, compareSync}= require('bcrypt')
const { sign}= require('jsonwebtoken')

module.exports= {
    createUser: (req, res)=>{
        const body= req.body
        const salt= genSaltSync(10)
        body.password= hashSync(body.password, salt)
        create(body,(error, result)=>{
            if (error) {
                console.log('===> '+error)
                return res.status(500).json({
                    success: 0,
                    message: error
                })
            }
            return res.status(200).json({
                success: 1,
                data: result
            })
        })
    },
    getUsers: (res)=>{
        getUsers((error, result)=>{
            if(error){
                console.log('==> '+error)
                return res.status(500).json({
                    success:0,
                    message: 'Error coudnt get users'
                })
            }
            if(!result)
                return res.status(201).json({
                    success: 1,
                    message: 'no user'
                })
            return res.status(200).json({
                success: 1,
                data: result
            })
        })
    },
    getUserById: (req, res)=>{
        const id= req.params.id
        getUserById(id,(error, result)=>{
            if(error){
                console.log('==> '+error)
                return
            }
            if(!result){
                res.status(406).json({
                    success: 0,
                    message: 'Record not found'
                })
                return
            }
            return res.status(200).json({
                success: 1,
                data: result
            })
        })
    },
    updateUser: (req, res)=>{
        const body= req.body
        const salt= genSaltSync(10)
        body.password= hashSync(body.password, salt)
        updateUser(body, (error, result)=>{
            if (error) {
                console.log('==> '+error)
                return false
            }
            if(!result){
                return res.json({
                    success: 0,
                    message: 'failed to update'
                })
            }
            return res.status(200).json({
                success: 1,
                data: result
            })
        })
    },
    deleteUser: (req, res)=>{
        const id= req.body.id
        deleteUser(id, (error, result)=>{
            if(error){
                console.log('==> '+error)
                return res.status(500).json({
                    success: 0,
                    message: 'Error occured during deleteUser'
                })
            }
            return res.status(200).json({
                success:1,
                data: result
            })
        })
    }, 
    login: (req, res)=>{
        const body= req.body
        getUserByTel(body.tel,(error, result)=>{
            if(error){
                console.log('==> '+error)
                return false
            }
            if (!result) 
                return res.json({
                    success: 0,
                    message: 'invalid name or tel'
                })
            if (compareSync(body.password,result.password)) {
                result.password= undefined
                const token= sign({results: result},'hushnud',{expiresIn: '1h'})
                return res.json({
                    success: 1,
                    message: 'login successfully',
                    token: token
                })
            }else{
                return res.json({
                    success: 0,
                    message: 'invalid name or tel'
                })
            }
        })
    }
}