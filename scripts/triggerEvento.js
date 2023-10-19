// scripts/triggerEvento.js

async function main() {
    const [owner] = await ethers.getSigners();

    // Substitua pelo endereço do contrato após o deploy
    const contratoEndereco = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const EventoExemplo = await ethers.getContractFactory("EventoExemplo");
    const contrato = EventoExemplo.attach(contratoEndereco);

    // Chamando a função que dispara o evento com um valor de exemplo (por exemplo, 123)
    await contrato.disparaEvento(123);

    console.log("Evento disparado!");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
