
const net = require("net");
const mysql = require("mysql2");

const express = require("express");
const cors = require("cors");

const connection = mysql.createConnection({
  /*host: "maps.mysql.database.azure.com",
  user: "maps_user",
  password: "Mexico2012*",
  database: "maps",
  port: 3306*/
  host: "localhost",
  user: "maps_user",
  password: "Mexico2012*",
  database: "maps",
  port: 3306
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error al conectar: " + err.stack);
    return;
  }
  console.log("Conectado como id " + connection.threadId);
});

const app = express();
app.use(cors());
// Define una ruta para tu consulta
app.get("/lastone", (req, res) => {
  let sql =
    "SELECT * FROM registro  WHERE (imei, idregistro) IN (SELECT imei, MAX(idregistro) FROM registro GROUP BY imei)";
  connection.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

// Define una ruta para tu consulta
app.get("/lastten", (req, res) => {
  let sql = "SELECT * FROM registro ORDER BY idregistro DESC LIMIT 10";
  connection.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});


app.get("/historial", (req, res) => {
  const imei = req.query.imei;
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;

  if (!imei || !startDate || !endDate) {
    res.status(400).send("Faltan parámetros: imei, startDate, endDate son requeridos");
    return;
  }

  let sql = "SELECT * FROM registro WHERE imei = ? AND fecha BETWEEN ? AND ? ORDER BY idregistro ASC LIMIT 10000;";
  connection.query(sql, [imei, startDate, endDate], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

const port = 3030;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${port}`);});

let lastConnectionTime = 0;
let lastDataReceived = "";

const insertarRegistro = (imei, accion, fecha, lat, lon, vel, cadena) => {
  const query =
    "INSERT INTO registro (imei, accion, fecha, lat, lon, vel, cadena) VALUES (?, ?, ?, ?, ?, ?, ?)";
  connection.query(
    query,
    [imei, accion, fecha, lat, lon, vel, cadena],
    (error, results, fields) => {
      if (error) throw error;
      console.log("Registro insertado ID:", results.insertId);
    }
  );
};

function buscarRegistros(imei, lat, lon) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT COUNT(*) AS count FROM registro WHERE imei = ? AND lat = ? AND lon = ?`;

    connection.query(sql, [imei, lat, lon], (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results[0].count > 0);
    });
  });
}

function parseGpsData(dataString) {
  const dataParts = dataString.split(",");
  const gpsData = {
    imei: dataParts[0].split(":")[1],
    command: dataParts[1],
    dateTime: convertToDateTime(dataParts[2]),
    gpsStatus: dataParts[4],
    time: dataParts[5],
    latitude: dataParts[7],
    latitudeDirection: dataParts[8],
    longitude: dataParts[9],
    longitudeDirection: dataParts[10],
  };

  return gpsData;
}

function parseHQData(dataString) {
  // Elimina los caracteres de inicio y fin
  const cleanData = dataString.trim().slice(1, -1);

  // Divide la cadena en partes usando la coma como delimitador
  const dataParts = cleanData.split(",");

  // Desglosa cada parte de la cadena y almacena en un objeto
  const hqData = {
    header: dataParts[0], // Ejemplo: "HQ"
    imei: dataParts[1], // Ejemplo: "7340006017"
    command: dataParts[2], // Ejemplo: "V1"
    time: convertToTime(dataParts[3]), // Ejemplo: "061714" (hora UTC)
    validity: dataParts[4], // Ejemplo: "A" (validez de posición)
    latitude: convertToDegreesAndMinutes(
      parseFloat(dataParts[5]),
      dataParts[6]
    ), // Ejemplo: "2337.9425,S"
    longitude: convertToDegreesAndMinutes(
      parseFloat(dataParts[7]),
      dataParts[8]
    ), // Ejemplo: "07022.9435,W"
    speed: parseFloat(dataParts[9]), // Ejemplo: "000.00" (nudos)
    course: parseInt(dataParts[10]), // Ejemplo: "000" (dirección)
    date: convertToDate(dataParts[11]), // Ejemplo: "080524" (fecha DDMMYY)
    status: dataParts[12], // Ejemplo: "BFFFFFFF"
    mcc: dataParts[13], // Ejemplo: "460" (Mobile Country Code)
    mnc: dataParts[14], // Ejemplo: "00" (Mobile Network Code)
    lac: parseInt(dataParts[15]), // Ejemplo: "0" (Location Area Code)
    cellID: parseInt(dataParts[16]), // Ejemplo: "0" (Cell ID)
    gpsSignal: parseInt(dataParts[17]), // Ejemplo: "6" (Nivel de señal GPS)
  };

  return hqData;
}

function convertToDegreesAndMinutes(gradosMinutos, direction) {
  let grados = Math.floor(gradosMinutos / 100);
  let minutosDecimales = gradosMinutos - grados * 100;

  var val = grados + minutosDecimales / 60;
  if (direction == "S" || direction == "W") val = val * -1;
  return val;
}

function convertToDateTime(inputString) {
  // Extrae los componentes de la cadena
  const year = inputString.substring(0, 2);
  const month = inputString.substring(2, 4);
  const day = inputString.substring(4, 6);
  const hour = inputString.substring(6, 8);
  const minute = inputString.substring(8, 10);
  const second = inputString.substring(10, 12);

  // Construye la fecha en el formato deseado
  const formattedDate = `20${year}-${month}-${day} ${hour}:${minute}:${second}`;

  return formattedDate;
}

// Función auxiliar para convertir la fecha en formato `DDMMYY`
function convertToDate(dateString) {
  const day = dateString.substring(0, 2);
  const month = dateString.substring(2, 4);
  const year = "20" + dateString.substring(4, 6);
  return `${year}-${month}-${day}`;
}

// Función auxiliar para convertir el tiempo en formato `HH:MM:SS`
function convertToTime(dateString) {
  const hour = dateString.substring(0, 2);
  const minute = dateString.substring(2, 4);
  const second = dateString.substring(4, 6);
  return `${hour}:${minute}:${second}`;
}

const server = net.createServer((socket) => {
  console.log(
    "Conexión desde " + socket.remoteAddress + ":" + socket.remotePort
  );

/*   const imei = '865205038631569'; // Reemplaza con el IMEI de tu dispositivo
    const command = `**imei:${imei}10110s`;
    socket.write(command + '\r\n'); // Asegúrate de incluir el retorno de carro y nueva línea si es necesario

    socket.on('data', (data) => {
        console.log('Received:', data.toString());
        // Procesar la respuesta recibida del dispositivo
    });
 */

  socket.on("data", (data) => {
    const message = data.toString().trim(); // Convierte los datos a string y elimina espacios en blanco al inicio y al final

    if (message.length < 10) {
      console.error("Mensaje recibido inválido: " + message);
      return;
    }

    if (message === lastDataReceived) {
      // No hagas nada más, simplemente regresa
      return;
    }

    console.log("Datos recibidos: " + message);
    lastDataReceived = message;
    // Comprueba si el mensaje es del formato inicial "##,imei:...,A;"
    if (message.startsWith("##,imei:") && message.endsWith(",A;")) {
      console.log("Enviando respuesta: LOAD");
      socket.write("LOAD" + '\r\n');
    }
    // Comprueba si el mensaje es solamente un número IMEI (15 dígitos)
    else if (message.match(/^\d{15}$/)) {
      console.log("Enviando respuesta: ON");
      socket.write("ON" + '\r\n');
    }
    // Comprueba si el mensaje corresponde a uno de los nuevos formatos y responde con el IMEI recibido
    else if (
      message.startsWith("imei:") &&
      (message.includes(",tracker,") || message.includes(",L,"))
    ) {
      const gpsData = parseGpsData(message);
      const latitude = convertToDegreesAndMinutes(
        gpsData.latitude,
        gpsData.latitudeDirection
      );
      const longitude = convertToDegreesAndMinutes(
        gpsData.longitude,
        gpsData.longitudeDirection
      );

      //console.log(`Latitud: ${latitude}, Longitud: ${longitude}`);

      buscarRegistros(gpsData.imei, latitude, longitude)
        .then((existe) => {
          console.log(
            existe
              ? "Existen registros que coinciden"
              : "No existen registros que coinciden"
          );

          if (!existe) {
            insertarRegistro(
              gpsData.imei,
              gpsData.command,
              gpsData.dateTime,
              latitude,
              longitude,
              "0.0",
              message
            );
          }
        })
        .catch((err) => {
          console.error("Error al buscar registros:", err);
        });

      // Extrae el IMEI del mensaje
      const imeiMatch = message.match(/^imei:(\d+),/);
      if (imeiMatch) {
        const imei = imeiMatch[1];
        const response = `**,imei:${imei},C,20s` + '\r\n';
        console.log("Enviando respuesta personalizada: " + response);
        socket.write(response);
      }
    } else if (message.startsWith("*HQ") && message.includes(",V1,")) {
      const gpsData = parseHQData(message);

      console.log(
        `Imei: ${gpsData.imei}, command: ${gpsData.command}, date: ${gpsData.date}, Latitud: ${gpsData.latitude}, Longitud: ${gpsData.longitude}`
      );

      buscarRegistros(gpsData.imei, gpsData.latitude, gpsData.longitude)
        .then((existe) => {
          console.log(
            existe
              ? "Existen registros que coinciden"
              : "No existen registros que coinciden"
          );

          if (!existe) {
            insertarRegistro(
              gpsData.imei,
              gpsData.command,
              gpsData.date + " " + gpsData.time,
              gpsData.latitude,
              gpsData.longitude,
              gpsData.speed, 
              message
            );
          }
        })
        .catch((err) => {
          console.error("Error al buscar registros:", err);
        });
    }

    // Añadir aquí más condiciones según otros formatos de mensajes que esperes recibir
  });

  socket.on("close", () => {
    console.log("Conexión cerrada");
  });

  socket.on("error", (err) => {
    console.error(`Socket Error: ${err.message}`);
    // Cierra la conexión si ocurre un error
    socket.destroy();
  });
});

const PORT = 3000;
const HOST = "0.0.0.0"; // Asegúrate de cambiar esto según tus necesidades

server.listen(PORT, HOST, () => {
  console.log(`Servidor escuchando en ${HOST}:${PORT}`);
});