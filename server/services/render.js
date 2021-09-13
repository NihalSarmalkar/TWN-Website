const axios = require('axios');

exports.home = (req, res) => {
    res.render('index');
}
exports.post = (req, res) => {
    res.render('post-page');
}
exports.about = (req, res) => {
    res.render('about');
}
exports.contact = (req, res) => {
    res.render('contact');
}
exports.why = (req, res) => {
    res.render('why');
}
exports.services_provider = (req, res) => {
    res.render('services_provider');
}
exports.services_provider_list = (req, res) => {
    res.render('service-providers-list');
}
exports.services_provider_list_details = (req, res) => {
    res.render('service-provider-details');
}
exports.services_2wheeler = (req, res) => {
    res.render('service');
}
exports.services_4wheeler = (req, res) => {
    res.render('service4');
}

exports.cart = (req, res) => {
    res.render('cart');
}

exports.admin_dashboard = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response) {
            res.render('admin-dashboard', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })


}

exports.blog = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response) {
            res.render('blog-page', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })


}

exports.add_blog = (req, res) => {
    res.render('add-blog');
}

exports.update_blog = (req, res) => {
    axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
        .then(function(userdata) {
            res.render("update-blog", { user: userdata.data })
        })
        .catch(err => {
            res.send(err);
        })
}