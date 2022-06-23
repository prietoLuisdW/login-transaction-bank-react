import axios from 'axios'

const valUser = async (datosUsuario) => {

    try {
    const url = 'http://localhost:4000/login'

    const response = await axios.post(url, datosUsuario)
    // const res = await response.json()
    console.log(response.data)
} catch (error){
    console.log(error)
}
}



export {valUser}
