export default function CategoriaView({ categoria, produtos }) {
    return (
        <div style={{ padding: "20px" }}>
            <h2>{categoria}</h2>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, 200px)",
                gap: "20px"
            }}>
                {produtos.map(p => (
                    <div key={p.id}
                        style={{
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "8px",
                            boxShadow: "0 0 5px rgba(0,0,0,0.2)"
                        }}>
                        
                        {p.imagem && (
                            <img src={p.imagem} alt=""
                                style={{ width: "100%", height: "150px", objectFit: "cover" }}
                            />
                        )}

                        <h3>{p.nome}</h3>
                        <p>R$ {p.preco}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
