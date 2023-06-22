const express = require('express');
const bodyParser = require('body-parser'); 
const db = require("./db");
const app = express();
 const axios = require ('axios');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
let servidores = [];

setInterval(async() => {
const select_tudo = await db.selectParameters_all()
console.log(select_tudo)
}, 1000);

setInterval(async() => {
    const select_ip = await db.selectParameters_ip()
    console.log(select_ip)
    }, 1000);

 function enviarpost (qnt_eventos,endpoint,porta,ip){
    let body
    for (let i = 0; i < qnt_eventos; i++) {
        let sorteando = Math.floor(Math.random() * 6);
        switch(sorteando){
            case 0:
            body = {
                "qnt_eventos":5,
                "endpoint":"/alura",
                "porta":58,
                "ip":"10.100.111.02",
                "SchemaVersion": "1.0",
                "Event": {
                "Type": "GW005",
                "DateTime": "09/09/21 15:25:47",
                "Seq": 1383,
                "GlobalSeq": 13333,
                "Zone": 0,
                "ZoneName": "",
                "Loop": 0,
                "Device": 11,
                "DeviceType": "-",
                "DeviceName": "DF APTO 401",
                "Extract": "Alarme – 4 Andar DF APTO 401"
                },
                "General": {
                "UserCode": 1234,
                "Gw521Version": "0.0.9",
                "CieVersion": "3.1.8",
                "Alarms": 1,
                "Supervisions": 0,
                "Failures": 0,
                "MacAddr": "00:04:25:1C:A1:0A"
                }
               }

            break;
            case 1:
                body = {
                    "SchemaVersion": "1.0",
                    "Event": {
                    "Type": "GW001",
                    "DateTime": "09/09/21 17:05:13",
                    "Seq": 1433,
                    "GlobalSeq": 13630,
                    "Zone": 1,
                    "ZoneName": "GW521 Reset",
                    "Loop": 0,
                    "Device": 104,
                    "DeviceType": "-",
                    "DeviceName": "Versao: 0.0.9",
                    "Extract": "Operacao – GW521 Reset Versao 0.0.9"
                    },
                    "General": {
                    "UserCode": 1234,
                    "Gw521Version": "0.0.9",
                    "CieVersion": "3.1.8",
                    "Alarms": 0,
                    "Supervisions": 0,
                    "Failures": 0,
                   "MacAddr": "00:04:25:1C:A1:0A"
                    }
                   }
            break;
            case 2:
                body = {
                    "SchemaVersion": "1.0",
                    "Event": {
                    "Type": "GW002",
                    "DateTime": "09/09/21 15:26:12",
                    "Seq": 1318,
                    "GlobalSeq": 13601,
                    "Zone": 1,
                    "ZoneName": "1",
                    "Loop": 0,
                    "Device": 21,
                    "DeviceType": "Entrada Local CIE",
                    "DeviceName": "Falha Comunicacao Repetidora – Repetidora 1",
                    "Extract": "Falha – Entrada Local CIE – Falha Comunicacao Repetidora – Repetidora 1"
                    },
                    "General": {
                    "UserCode": 1234,
                    "Gw521Version": "0.0.9",
                    "CieVersion": "3.1.8",
                    "Alarms": 2,
                    "Supervisions": 1,
                    "Failures": 2,
                   "MacAddr": "00:04:25:1C:A1:0A"
                    }
                   }
            break;
            case 3:
                body = {
                    "SchemaVersion": "1.0",
                    "Event": {
                    "Type": "GW003",
                    "DateTime": "09/09/21 16:49:10",
                    "Seq": 1407,
                    "GlobalSeq": 13552,
                    "Zone": 1,
                    "ZoneName": "2 Andar",
                    "Loop": 1,
                    "Device": 5,
                    "DeviceType": "Detector Temp.",
                    "DeviceName": "DT APTO 203",
                    "Extract": "Falha – 2 Andar DT APTO203"
                    },
                    "General": {
                    "UserCode": 1234,
                    "Gw521Version": "0.0.9",
                    "CieVersion": "3.1.8",
                    "Alarms": 2,
                    "Supervisions": 1,
                    "Failures": 1,
                   "MacAddr": "00:04:25:1C:A1:0A"
                    }
                   }
            break;
            case 4:
               body = {
                "SchemaVersion": "1.0",
                "Event": {
                "Type": "GW004",
                "DateTime": "09/09/21 16:44:07",
                "Seq": 1401,
                "GlobalSeq": 13539,
                "Zone": 1,
                "ZoneName": "Res. Incendio",
                "Loop": 1,
                "Device": 57,
                "DeviceType": "Modulo Entrada",
                "DeviceName": "Sensor Nivel",
                "Extract": "Supervisao – Res Incendio Sensor Nivel"
                },
                "General": {
                "UserCode": 1234,
                "Gw521Version": "0.0.9",
                "CieVersion": "3.1.8",
                "Alarms": 2,
                "Supervisions": 1,
                "Failures": 0,
               "MacAddr": "00:04:25:1C:A1:0A"
                }
               }
            break;
            case 5:
                body = {
                    "SchemaVersion": "1.0",
                    "Event": {
                    "Type": "GW005",
                    "DateTime": "09/09/21 15:25:47",
                    "Seq": 1383,
                    "GlobalSeq": 13333,
                    "Zone": 0,
                    "ZoneName": "",
                    "Loop": 0,
                    "Device": 11,
                    "DeviceType": "-",
                    "DeviceName": "DF APTO 401",
                    "Extract": "Alarme – 4 Andar DF APTO 401"
                    },
                    "General": {
                    "UserCode": 1234,
                    "Gw521Version": "0.0.9",
                    "CieVersion": "3.1.8",
                    "Alarms": 1,
                    "Supervisions": 0,
                    "Failures": 0,
                    "MacAddr": "00:04:25:1C:A1:0A"
                    }
                   }
            break;
            
        }   
        axios({
            method:'post',
            url: `http://${ip}:${porta}${endpoint}`,
            data: body,
               headers:{}
        }).then((response)=>{
            console.log(response.status)
        }).catch((error)=>{
            console.log(error)
        })
    }
   
 } 
 console.log(enviarpost)
 console.log('aaaa')
           
app.get('/servidores', (req, res) => { //mandar 204 vazio
    db.selectParameters_all("parameters")
    res.status(200).json(servidores);
});

app.get('/servidores/:ip', (req, res) => {
    const { ip } = req.params;
    db.selectParameters_ip("parameters", ip)
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
    } 
    if (ip == null) {
        res.status(400).json({ message: 'ip nulo' })
        return;
    } 
    if (porta == null) {
        res.status(400).json({ message: 'porta nula' })
        return;
    } 
    if (endpoint == null) {
        res.status(400).json({ message: 'endpoint nulo' })
        return;
    } 
    db.insertParameters("parameters", qnt_eventos, ip, porta, endpoint)
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
    db.updateParameters(qnt_eventos, ip, porta, endpoint)
    const servidor = servidores.find(servidor => servidor.ip == ip);
    if (servidor) {
        servidor.qnt_eventos = qnt_eventos || servidor.qnt_eventos;
        servidor.ip = ip || servidor.ip;
        servidor.porta = porta || servidor.porta;
        servidor.endpoint = endpoint || servidor.endpoint;
        res.status(202).json({ menssage: 'informações do servidor atualizadas com sucesso' });
    } else {
        res.status(404).json({ message: 'servidor não encontrado.' });
    }});

    app.delete('/servidores/:ip', (req, res) => {
        const { ip } = req.params;
        db.deleteParameters(ip)
        const servidorIndex = servidores.findIndex(servidor => servidor.ip == ip);
        if (servidorIndex !== -1) {
            servidores.splice(servidorIndex, 1);
            res.status(200).json({ message: 'servidor excluido com sucesso' });
        } else {
            res.status(404).json({ message: 'servidor não encontrado' });
        }
    })

const port = 3000;
app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
})

