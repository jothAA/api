const userService = require('../service/user.js');

async function getAllUser(req, res){
    try {
        const rows = await userService.getAllUser();
        res.status(200).json(rows);

    }catch(error){
        res.status(500).send({
            message: "Error getting users",
            body: error.message,
        });
    }
}

async function createUser (req, res){

const { name, email, password } = req.body;

}

module.exports = {
    getAllUser,
};