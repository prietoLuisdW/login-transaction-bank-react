
const date = new Date()

export const Datos = {
    concepto: 'Recarga Nequi PSe',
    cuenta: '116060059122',
    disponible: 100000,
    valor: 100000,
    costo: 0,
    tokenBD: 1234,

    fechaTransaccion: '2022-07-12 16:00',
    ipTransaccion: '10.120.34.56',
    estadoTransaccion: 'Aprobada, Pendiente aprobacion PSE',


    time: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
    cus: '1234586'
}


const clientes = [
    {id: '10698527', tipoId: 'Cedula de Ciudadania', name: 'Carlos Rordiguez', password: '106985'},
    {id: '20587423', tipoId: 'Cedula de Ciudadania', name: 'Juan Beltran', password: '205874'},
]

export {clientes}