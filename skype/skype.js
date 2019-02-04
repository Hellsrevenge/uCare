const Guid = require('guid');
const sha256 = require('sha256');
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');

Skype = {
    generateToken: function (content) {
        return jwt.sign({
            jti: Guid.raw(),
            iss: '9d0ccc1a-7256-d29f-f54d-a765180be2fc',
            sub: sha256(content),
            exp: Math.floor(Date.now() / 1000) + 10
        }, '3627875e-7826-8a35-4b38-59feffc7b75c')
    },

    requestInterview: function (start, duration, cb) {
        const payload = {
            capabilities: {
                notes: true
            },
            skypeConfig: {
                call: true,
                lobby: true,
                chat: true
            },
            scheduling: {
                start: "2019-12-23 14:00",
                duration: 45,
            },
            // participants : [
            //     { "name": "Harvey Pitman", "email": "aaa@aa", "role": "candidate" },
            //     { "name": "Louis Dingle", "email": "aaa@aa", "role": "interviewer" }
            // ]
        };

        fetch('https://interviews.skype.com/api/interviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.generateToken(JSON.stringify(payload))
            },
            body: JSON.stringify(payload)
        }).then(res => res.json()).then(data => cb(data));
    }
};

module.exports = Skype;
