import argon from 'argon2'
import { UserAccountModel } from '../models'


const signupRepo = {}

/**
 * Verifica si un usuario con el correo electrónico dado ya existe en la base de datos.
 * @param {string} email - Correo electrónico del usuario.
 */
signupRepo.verifyAlreadyExist = async email => {
    const user = await UserAccountModel.findOne({ where: { email } })
    if (user) {
        return { ok: true, msg: "User account already exists" };
    } else {
        return { ok: false, msg: "User account does not exist" };
    }
}

/**
 * Crea una nueva cuenta de usuario con los datos proporcionados.
 * @param {Object} data - Datos del usuario a registrar.
 * @param {string} data.fullname - Nombre completo del usuario.
 * @param {string} data.email - Correo electrónico del usuario.
 * @param {string} data.password - Contraseña del usuario (se almacena con hash).
 * @returns {Object} - Objeto que contiene el ID del usuario registrado.
 */
signupRepo.createUserAccount = async data => {
    const userDTO = {
        fullname: data.fullname,
        email: data.email,
        password: await argon.hash(data.password)
    }

    const user = await UserAccountModel.create(userDTO)

    return { userId: user.id }
}


export default signupRepo