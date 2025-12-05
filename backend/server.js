const express = require("express");
const fs = require("fs-extra");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config.json");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DB_PATH = "./produtos.json";

// 📌 GET - listar produtos
app.get("/produtos", async (req, res) => {
    const data = await fs.readJSON(DB_PATH);
    res.json(data.produtos);
});

// 📌 POST - adicionar produto
app.post("/produtos", async (req, res) => {
    const { nome, preco, categoria, imagem } = req.body;

    if (!nome || !preco || !categoria) {
        return res.status(400).json({ erro: "Campos obrigatórios ausentes." });
    }

    const db = await fs.readJSON(DB_PATH);

    const novoProduto = {
        id: Date.now(),
        nome,
        preco,
        categoria,
        imagem: imagem || ""
    };

    db.produtos.push(novoProduto);

    await fs.writeJSON(DB_PATH, db, { spaces: 4 });

    res.json({ mensagem: "Produto adicionado com sucesso!", produto: novoProduto });
});

// Servidor
app.listen(config.porta, config.ip, () => {
    console.log(`Servidor rodando em http://${config.ip}:${config.porta}`);
});
