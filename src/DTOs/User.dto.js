

//const newCart = await cartManager.addCart();

const { cryptPassword } = require("../utils/cryptPassword");

class UserDTO{
    constructor(){
        //this.user = user;
    }

    create = async (user) => {
        const newUser = {

            githubId: user.githubId,
            googleId: user.googleId,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            age: user.age,
            password: cryptPassword(user.password),
            cart: user.cart,
            role: user.role,
        }

        return newUser;
    }

    find = async (users) => {
        
        const usersInfo = users.map(user => {
            return {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                age: user.age,
                role: user.role,
                last_connection: user.last_connection
            }
        })

        /*const usersInfo = {
            githubId: user.githubId,
            googleId: user.googleId,
            password: cryptPassword(user.password),
            cart: user.cart,
        }*/

        return usersInfo;
    }
}

module.exports = UserDTO;