const jwt = require("jsonwebtoken");

const checkIfLogged = (header) => {
    const authorization = header.authorization;
    if (authorization){
        // "Bearer lsfjlsfksdjfklsjdf.sdfjskdfjsf.jsdfjsdf"
        const token = authorization.split(" ")[1];

        //verifying token
        if (jwt.verify(token, "password")){  //example password
            return true; 
        } else {
            return false;
        }
    }
    else return false;
    }
}
const getUserId = (header) => {
    const token = header.authorization.split(" ")[1];
    const payload = jwt.decode(token);
    return payload.userId;
}
module.exports = {
    checkIfLogged,
    getUserId,
}