const User = require('../Models/User')

module.exports = {
    async create(req, res) {
        const { name, whatsapp, email, password, latitude, longitude } = req.body

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }


        try {
            const createdUser = await User.create({
                name,
                whatsapp,
                email,
                password,
                location,

            })
            return req.status(201).send(createdUser)
        } catch (err) {
            res.status(400).send(err)
        }
    }
}
