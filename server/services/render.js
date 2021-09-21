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
exports.login = (req, res) => {
    res.render('login');
}

exports.cart = (req, res) => {
    res.render('cart');
}

exports.privacy_policy = (req, res) => {
    res.render('privacy_policy');
}

exports.terms_conditions = (req, res) => {
    res.render('terms_conditions');
}




let one = 'http://localhost:3000/api/users'
let two = 'http://localhost:3000/api/contacts'
const requestOne = axios.get(one);
const requestTwo = axios.get(two);

exports.admin_dashboard = (req, res) => {
    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        const responseOne = responses[0]
        const responseTwo = responses[1]
        console.log(responseOne['data'])
        console.log(responseTwo['data'])
        res.render('admin-dashboard', { users: responseOne['data'], contacts: responseTwo['data'] });

        // use/access the results 
    })).catch(errors => {
        // react on errors.
        res.send(errors);
    })









    // Make a get request to /api/users
    // axios.get('http://localhost:3000/api/users')
    //     .then(function(response) {
    //         res.render('admin-dashboard', { users: response.data });
    //     })
    //     .catch(err => {
    //         res.send(err);
    //     })
    // axios.get('http://localhost:3000/api/contacts')
    //     .then(function(response) {
    //         res.render('admin-dashboard', { contacts: response.data });
    //     })
    //     .catch(err => {
    //         res.send(err);
    //     })


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

exports.post_page = (req, res) => {
    axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
        .then(function(userdata) {
            res.render("post-page", { user: userdata.data })
        })
        .catch(err => {
            res.send(err);
        })
}