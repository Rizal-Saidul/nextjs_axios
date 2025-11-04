const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3002

app.use(cors())
app.use(express.json())

let users = [
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
    res.status(200).json(users)
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

    users.push(newUser);
    res.status(201).json({message: 'data berhasil ditambahkan'})
})

// Update endpoint to modify user data by ID
app.put('/data/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, mobile, email, status } = req.body;

    if (!name || !mobile || !email || !status) {
        return res.status(400).json({ message: "Semua field harus diisi" });
    }

    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User tidak ditemukan" });
    }

    user.name = name;
    user.mobile = mobile;
    user.email = email;
    user.status = status;

    res.json({ message: "User berhasil diperbarui", user });
});

// Fix delete endpoint to handle ID as number
app.delete('/data/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User tidak ditemukan" });
    }

    const deletedUser = users.splice(index, 1)[0];
    res.json({ message: "User berhasil dihapus", deletedUser });
});

app.listen(PORT, () => {
    console.log(`running in port ${PORT}`)
})