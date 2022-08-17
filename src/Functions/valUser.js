
const API = process.env.REACT_APP_BACKEND
console.log(API)
// const navigate = useNavigate()

const valUser = async (datosUsuario, navigate) => {

    try{
        const res = await fetch(`${API}/login`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosUsuario),
        })
        const data = await res.json()
        console.log(data)
        navigate('/step1')

    }catch{
        console.error('Error')
    }
}



export {valUser}
