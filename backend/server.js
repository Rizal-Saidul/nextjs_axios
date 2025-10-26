const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3002

app.use(cors())
app.use(express.json())

let membersData = [
    {
        id: 1,
        name: "saidul rizal",
        mobile: "12345",
        email: "1245@example.com",
        status: "active"
    },
    {
        id: 2,
        name: "rizal saidul",
        mobile: "54321",
        email: "4321@example.com",
        status: "inactive"
    },
]


let nextId = 3

app.get('/data', (req, res) => {
    // res.status(200).json({
    //     totalMembers: membersData.length,
    //     membersData
    // })
    res.status(200).json(membersData)
})

app.post('/data', (req ,res) => {
    const { name, mobile, email, status } = req.body;

    if (!name || !mobile || !email || !status) {
        res.status(400).json({message: "semua component harus di isi", Error})
    }

    const newUser = {
        id : nextId++,
        name,
        mobile,
        email,
        status
    }

    membersData.push(newUser);
    res.status(201).json({message: 'data berhasil ditambahkan'})
})

app.listen(PORT, () => {
    console.log(`running in port ${PORT}`)
})