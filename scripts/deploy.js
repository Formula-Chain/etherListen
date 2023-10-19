// scripts/deploy.js

async function main() {
  const EventoExemplo = await ethers.getContractFactory("EventoExemplo");
  const eventoExemplo = await EventoExemplo.deploy();

  console.log("Contrato deployado para:", eventoExemplo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
