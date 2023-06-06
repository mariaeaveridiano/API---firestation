const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.bodyParser({ limit: '50mb' }));
let servidores = [];

app.get('/servidores', (req, res) => { //mandar 204 vazio
    res.status(200).json(servidores);
});

app.get('/servidores/:ip', (req, res) => {
    const { ip } = req.params;
    const servidor = servidores.find(servidor => servidor.ip == ip);
    if (servidor) {
        res.status(200).json(servidor);
    } else {
        res.status(204).json({ message: "servidor não encontrado." });
    }
});

app.post('/servidores', (req, res) => {
    const { qnt_eventos, ip, porta, endpoint } = req.body;
    if (qnt_eventos == null) {
        res.status(400).json({ message: 'quantidade de eventos nula' })
        return;
    } // melhorar logica 
    if (ip == null) {
        res.status(400).json({ message: 'ip nulo' })
        return;
    } // melhorar logica
    if (porta == null) {
        res.status(400).json({ message: 'porta nula' })
        return;
    } // melhorar logica
    if (endpoint == null) {
        res.status(400).json({ message: 'endpoint nulo' })
        return;
    } // melhorar logica
    for (let i = 0; i < servidores.length; i++) {
        const servidor = servidores[i];
        if (ip === servidor.ip) {
            res.status(400).json({ message: 'ip já existe na lista de itens' })
            return
        }
    }
    //validar se são inteiros, eventos maior que 0, portas maior que 1000 e menos 65 mil 
    const servidor = { qnt_eventos, ip, porta, endpoint };
    servidores.push(servidor);
    res.status(201).json({ message: 'servidores cadastrados com sucesso.' });
});

app.put('/servidores/:ip', (req, res) => {
    const { ip } = req.params;
    const { qnt_eventos, porta, endpoint } = req.body;
    const servidor = servidores.find(servidor => servidor.ip == ip);
    if (qnt_eventos == null || ip == null || porta == null || endpoint == null) {
        res.status(400).json({ message: 'campos nulos' })
        return;
    } // melhorar logica 
    for (let i = 0; i < servidores.length; i++) {
        const servidor = servidores[i];
        if (ip === servidor.ip) {
            res.status(400).json({ message: 'ip já existe na lista de itens' })
            return
        }
    }
    if (servidor) {
        servidor.qnt_eventos = qnt_eventos || servidor.qnt_eventos;
        servidor.ip = ip || servidor.ip;
        servidor.porta = porta || servidor.porta;
        servidor.endpoint = endpoint || servidor.endpoint;
        res.status(202).json({ menssage: 'informações do servidor atualizadas com sucesso' });
    } else {
        res.status(404).json({ message: 'servidor não encontrado.' });
    }

    app.delete('/servidores/:ip', (req, res) => {
        const { ip } = req.params;
        const servidorIndex = servidores.findIndex(servidor => servidor.ip == ip);
        if (servidorIndex !== -1) {
            servidores.splice(servidorIndex, 1);
            res.status(200).json({ message: 'servidor excluido com sucesso' });
        } else {
            res.status(404).json({ message: 'servidor não encontrado' });
        }
    })
});
const port = 3000;
app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
})

