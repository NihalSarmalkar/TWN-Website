var serviceproviderdb = require('../model/model_serviceprovider');

// create and save new user
exports.create = (req, res) => {




    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }



    // new user
    const user = new serviceproviderdb({
        vendor_name: req.body.vendor_name,
        service: req.body.service,
        address: req.body.address,
        timing: req.body.timings,
        benificiary_name: req.body.benificiary_name,
        bank_address: req.body.bank_address,
        bank_acc: req.body.bank_account,
        acc_type: req.body.account_type,
        ifsc_code: req.body.ifsc_code,
        image_aadhar: req.files.aadhar_avatar[0].filename,
        image_driving: req.files.license_avatar[0].filename,
        image_technician: req.files.technician_avatar[0].filename,
        image_garage: req.files.garage_avatar[0].filename,
        image_electricity_bill: req.files.electricity_avatar[0].filename,
        image_agreement: req.files.agreement_avatar[0].filename


    })



    // save user in the database
    user
        .save(user)
        .then(data => {
            res.redirect('/add-serviceprovider');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res) => {
    if (req.query.service) {

        serviceproviderdb.find({ "service": req.query.service })
            .then(data1 => {
                console.log("service section")

                console.log(data1)
                if (!data1) {
                    res.status(404).send({ message: "Not found user with id " + id })
                } else {
                    res.send(data1)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving user with id " + id })
            })

    } else if (req.query.id) {
        const id = req.query.id;

        serviceproviderdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving user with id " + id })
            })

    } else {
        serviceproviderdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
            })
    }


}

// Update a new idetified user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;
    serviceproviderdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    serviceproviderdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}