import React, { useEffect, useState } from "react";
import api from "./api";
import NovoProdutoForm from "./components/NovoProdutoForm";
import CategoriaView from "./components/CategoriaView";
import "./index.css";

const categorias = [
    "Padaria", "Açougue", "Hortifruti", "Bebidas",
    "Grãos", "Limpeza", "Cereais", "Mercearia"
];

function App() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        api.get("/produtos").then(res => {
            setProdutos(res.data);
        });
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>📦 Estoque do Supermercado</h1>

            <NovoProdutoForm onAdd={p => setProdutos([...produtos, p])} />

            {categorias.map(cat => (
                <CategoriaView
                    key={cat}
                    categoria={cat}
                    produtos={produtos.filter(p => p.categoria === cat)}
                />
            ))}
        </div>
    );
}

export default App;
