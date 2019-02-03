var seeder = require('mongoose-seed');
var models = require('../models');
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ucare";
var mongoose = require('mongoose');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

seeder.connect(MONGODB_URI, function () {
    seeder.loadModels([
        'models/patients.js'
    ]);

    seeder.clearModels(['Patient'], function () {
        seeder.populateModels(patients, function () {
            seeder.disconnect();
        });
    });
});


models.Patient.find({}).exec(function(error, dbPatients) {
    for (let patient in dbPatients) {
        patients_data[0].documents[patient]["patient"] = dbPatients[patient]._id;
        patients_data[1].documents[patient]["patient"] = dbPatients[patient]._id;
    }

    seeder.connect(MONGODB_URI, function () {
        seeder.loadModels([
            'models/appointments.js',
            'models/contacts.js'
        ]);

        seeder.clearModels(['Appointment', 'Contact'], function () {
            seeder.populateModels(patients_data, function () {
                seeder.disconnect();
            });
        });
    });
});

models.Patient.find({}).exec(function(error, dbPatients) {
    for (let patient in dbPatients) {
        models.Appointment.find({patient: dbPatients[patient]._id}).exec(function(error, dbAppointment) {
            models.Patient.findOneAndUpdate({ "_id": dbAppointment.patient }, {"appointments": [dbAppointment._id]})
        });

        models.Contact.find({patient: dbPatients[patient]._id}).exec(function(error, dbContact) {
            models.Patient.findOneAndUpdate({ "_id": dbContact.patient }, {"contacts": [dbContact._id]})
        });
    }
});

var patients = [
    {
        'model': 'Patient',
        'documents': [
            {
                'firstName': 'Leonardo',
                'lastName': 'DiCaprio',
                'image': 'http://www.gstatic.com/tv/thumb/persons/435/435_v9_bb.jpg',
                'age': '44',
                'conditions': 'diarrhea',
                'medications': 'Loperamide',
            },
            {
                'firstName': 'Johnny',
                'lastName': 'Depp',
                'image': 'http://www.gstatic.com/tv/thumb/persons/33623/33623_v9_bc.jpg',
                'age': '55',
                'conditions': 'ADHD',
                'medications': 'Aderol',
            },
            {
                'firstName': 'lindsay',
                'lastName': 'Lohan',
                'image': 'https://www.google.com/search?tbm=isch&q=Lindsay+O%27Lohan',
                'age': '32',
                'conditions': 'Depression',
                'medications': 'RedLabel',
            }
        ]
    }
];

var patients_data = [
    {
        'model': 'Contact',
        'documents': [
            {
                'firstName': 'David',
                'lastName': 'Jones',
                'email': 'aaa@gmail.com',
                'phone': '12345678',

            },
            {
                'firstName': 'Barbara',
                'lastName': 'Smith',
                'email': 'bbb@gmail.com',
                'phone': '987654',

            },
            {
                'firstName': 'Max',
                'lastName': 'Davids',
                'email': 'ccc@gmail.com',
                'phone': '123459876',

            }
        ]
    },
    {
        'model': 'Appointment',
        'documents': [
            {
                'subject': 'gastroenterologist',
                'date': '2019-09-18 12:12:12',
                'status': '1',

            },
            {
                'subject': 'psychiatrist',
                'date': '2019-03-07 13:15:19',
                'status': '2',

            },
            {
                'subject': 'psychiatrist',
                'date': '2019-05-06 16:15:25',
                'status': '3',
            },
        ]
    }

];

