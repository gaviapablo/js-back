const User = require('../models/userModel');

module.exports = {
    async getAll(request,response){
        try{
            const users = await User.findAll();
            response.status(200).json(users);
        }
        catch(error){
            response.status(400).send(error);
        }
    },
    async deleteAll(request,response){
        try{
            const users = await User.destroy({where: {}, truncate: true});
            response.status(200).json("All users deleted");
        }
        catch(error)
        {
            response.status(400).send(error);
        }
    },
    async create(request,response){
        try{
            await User.create(request.body);
            response.status(200).json("User inserted!");
        }
        catch(error){
            response.status(400).send(error);
        }
    },
    async update(request,response){
        try{
            const { nick, hashtag} = request.body;
            const id = request.params.id;

            const user = await User.findOne({where: {id}});

            if(!user)
            {
                return response.status(400).json("{\"msg\":\"User not found\"}")
            }
            user.nick = nick;
            user.hashtag = hashtag;

            await user.save();
            response.status(200).json(`{\"msg\":\"User [${id}] updated!\"}`);
        }
        catch(error){
            response.status(400).send(error);
        }
    },
    async getOne(request,response){
        try{
            const id = request.params.id;
            const user = await User.findOne({where: {id}});

            if(!user)
            {
                return response.status(400).json("{\"msg\":\"User not found\"}")
            }

            response.status(200).json(user);
        }
        catch(error)
        {
            response.status(400).send(error);
        }
    },
    async delete(request, response){
        try{
            const id = request.params.id;

            const user = await User.destroy({where: {id}});

            if(!user)
            {
                return response.status(400).json("{\"msg\":\"User not found\"}")
            }

            response.status(200).json(`{\"msg\":\"User [${id}] deleted\"}`);
        }
        catch(error)
        {
            response.status(400).send(error);
        }
    }
};