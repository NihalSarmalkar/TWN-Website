const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

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

route.get('/add-blog', services.add_blog)




// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route