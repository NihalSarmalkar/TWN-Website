const express = require('express');
const route = express.Router()
const multer = require('multer')
const services = require('../services/render');
const controller = require('../controller/controller');
const controller_contact = require('../controller/controller_contact');



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './assets/upload/')
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})


const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
        cb(null, true)
    } else {

        cb(null, false)

    }


}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter

});

//home page route
route.get('/', services.home);

// adbout section route
route.get('/about', services.about)

// contact page section route
route.get('/contact', services.contact)

// route for services for 2 wheeler
route.get('/services_2wheeler', services.services_2wheeler)

// route for services for 4 wheeler
route.get('/services_4wheeler', services.services_4wheeler)

//blog post route
route.get('/post', services.post)

//blog route
route.get('/blog', services.blog)

//why choose us page route
route.get('/why', services.why)

// route for services for 4 wheeler
route.get('/services_provider', services.services_provider)

// route for services for 4 wheeler
route.get('/services_provider_list', services.services_provider_list)

//cart page route
route.get('/cart', services.cart)

//service provider details page route
route.get('/services_provider_list_details', services.services_provider_list_details)

//admin dashboard page route
route.get('/admin_dashboard', services.admin_dashboard)

route.get('/update-blog', services.update_blog)

route.get('/post-page', services.post_page)

route.get('/add-blog', services.add_blog)




// API
route.post('/api/users', upload.single('avatar'), controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);
route.post('/api/contacts', controller_contact.create);
route.get('/api/contacts', controller_contact.find);


module.exports = route