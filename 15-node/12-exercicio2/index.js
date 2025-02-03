const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const pathlog = path.resolve(__dirname, "./log/log.txt");

function formatUptime(seconds) {
  const days = Math.floor(seconds / (24 * 3600));
  seconds %= (24 * 3600);
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds.toFixed(0)} segundos`;
}

function getOsData() {
  return new Promise((resolve, reject) => {
    if (os) {
      const systemPlataform = {
        "win32": "Windows",
        "linux": "Linux",
        "darwin": "MacOs",
        "freebsd": "FreeBSD"
      }


      const osData = {
        nameOs: os.hostname(),
        plataform : systemPlataform[os.platform()],
        arch: os.arch(),
        cpuModel: os.cpus()[0]['model'],
        time: formatUptime(os.uptime()),
        memory: os.freemem(),
      };
      resolve(osData);
    } else {
      reject("Erro ao obter dados do sistema operacional");
    }
  });
}

function writeOsData(data) {
  const textRef = `\nNome do sistema operacional: ${data.nameOs}\n` +
                  `Plataforma: ${data.plataform}\n` +
                  `Arquitetura do sistema: ${data.arch}\n` +
                  `Modelo do processador: ${data.cpuModel}\n` +
                  `Tempo de ligado: ${data.time}\n` +
                  `Memória RAM livre: ${(data.memory / 1024 / 1024 / 1024).toFixed(2)} GB\n`;

  return new Promise((resolve, reject) => {
    fs.appendFile(pathlog, textRef, "utf-8", (error) => {
      if (error) {
        reject(`Erro ao executar texto: ${error}`);
      } else {
        resolve();
      }
    });
  });
}

setInterval(() => {
  async function start() {
    try {
      const allData = await getOsData();
      await writeOsData(allData);
      console.log("Dados do sistema operacional gravados com sucesso!"); 
    } catch (error) {
      console.error("Erro:", error);
    }
  }
  
  start();
}, 5000);


