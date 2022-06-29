import axios from 'axios'

const valUser = async (datosUsuario) => {

    try {
    const url = 'login'

    const response = await axios.post(url, datosUsuario, {
        headers:{
            "Content-Type": "application/json"
        },
        method : "POST",
        })
    // const res = await response.json()
    console.log(response.data)
} catch (error){
    console.log(error)
}
}



export {valUser}
