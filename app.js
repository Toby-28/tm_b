require('dotenv').config()
const express= require('express'),
    bodyparser= require('body-parser'),
    app= express(),
    ads_amin= require('./api/ads_admin/router.js'),
    ads_fromshops= require('./api/ads_fromshops/router'),
    sa= require('./superadmin/sa.router'),
    bolum= require('./api/bolum/router'),
    katalog= require('./api/katalog/router'),
    category= require('./api/category/router'),
    subcategory= require('./api/subcategory/router'),
    shop= require('./api/shop/router'),
    product= require('./api/product/router'),
    product_photo= require('./api/product_photo/router'),
    service_shop= require('./api/service_shop/router'),
    shop_katalog= require('./api/shop_katalog/router'),
    shop_category= require('./api/shop_category/router'),
    shop_subcategory= require('./api/shop_subcategory/router'),
    shop_products= require('./api/shop_products/router'),
    size= require('./api/size/router')

app.use(bodyparser.urlencoded({extended: true}))
app.use(express.json())
app.use('/ads_admin', ads_amin)
app.use('/ads_fromshops', ads_fromshops)
app.use('/sa', sa)
app.use('/bolum', bolum)
app.use('/katalog', katalog)
app.use('/category', category)
app.use('/subcategory', subcategory)
app.use('/shop', shop)
app.use('/product', product)
app.use('/product_photo', product_photo)
app.use('/service_shop', service_shop)
app.use('/shop_katalog', shop_katalog)
app.use('/shop_category', shop_category)
app.use('/shop_subcategory', shop_subcategory)
app.use('/shop_products', shop_products)
app.use('/size', size)
app.use('/image', express.static('images'))

app.use('/register_seller', (req, res)=>{
    if (req.body.type=="sowda") {
        res.redirect('/shop')
    }
    if (req.body.type=="hyzmat") {
        res.redirect('/service_shop')
    }
})

app.listen(process.env.apiport,()=>{
    console.log(`port ${process.env.apiport}`)
})