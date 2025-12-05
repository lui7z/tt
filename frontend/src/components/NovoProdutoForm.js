import React, { useState } from "react";
import api from "../api";

const categorias = [
    "Padaria", "Açougue", "Hortifruti", "Bebidas",
    "Grãos", "Limpeza", "Cereais", "Mercearia"
];

export default function NovoProdutoForm({ onAdd }) {
    const [form, setForm] = useState({
        nome: "",
        preco: "",
        categoria: "",
        imagem: ""
    });

    const enviar = async (e) => {
        e.preventDefault();
        const res = await api.post("/produtos", form);
        onAdd(res.data.produto);
    };

    return (
        <form onSubmit={enviar} style={{ marginBottom: "20px" }}>
            <h2>Cadastrar Novo Produto</h2>

            <input placeholder="Nome"
                value={form.nome}
                onChange={e => setForm({ ...form, nome: e.target.value })}
            /><br />

            <input placeholder="Preço"
                type="number"
                value={form.preco}
                onChange={e => setForm({ ...form, preco: e.target.value })}
            /><br />

            <select
                value={form.categoria}
                onChange={e => setForm({ ...form, categoria: e.target.value })}
            >
                <option value="">Selecione a categoria</option>
                {categorias.map(cat => (
                    <option key={cat}>{cat}</option>
                ))}
            </select><br />

            <input placeholder="URL da Imagem"
                value={form.imagem}
                onChange={e => setForm({ ...form, imagem: e.target.value })}
            /><br />

            <button type="submit">Cadastrar</button>
        </form>
    );
}
