// scripts/escutarEventos.js

async function main() {
    const [owner] = await ethers.getSigners();

    // Substitua pelo endereço do contrato após o deploy
    const contratoEndereco = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const EventoExemplo = await ethers.getContractFactory("EventoExemplo");
    const contrato = EventoExemplo.attach(contratoEndereco);

    contrato.on("NovoEvento", (de, valor, evento) => {
        console.log(`Evento detectado! De: ${de}, Valor: ${valor}`);
    });

    console.log(`Escutando eventos do contrato em ${contratoEndereco}`);
}

main()
    .then(() => console.log("Script iniciado"))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
