const User = require('../models/userModel');

module.exports = {
    async all(request,response){
        try{
            const users = await User.findAll()
            response.status(200).json(users)
        }
        catch(error){
            response.status(400).send(error)
        }
    }
};