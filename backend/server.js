const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3002

app.use(cors())

const membersData = [
    {
        id: 1,
        name: "saidul rizal",
        mobile: "12345",
        email: "1245@example.com"
    },
    {
        id: 2,
        name: "rizal saidul",
        mobile: "54321",
        email: "4321@example.com"
    },
]


const nextId = 3

app.get('/data', (req, res) => {
    // res.status(200).json({
    //     totalMembers: membersData.length,
    //     membersData
    // })
    res.status(200).json(membersData)
})

app.listen(PORT, () => {
    console.log(`running in port ${PORT}`)
})