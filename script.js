    const identifier = () => {
            document.getElementById("btn").innerHTML=start();
    }
    
    const start = () => {

        let startTime = dayjs(document.getElementById("inicio").value);
        let endTime = dayjs(document.getElementById("final").value);
        const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

        const semana = {
            norteSur: {
                0: {
                    inicio: "6:00",
                    finaliza: "9:00",
                    horario: "6:00 a.m. – 9:00 a.m.",
                    horas: 3,
                    densidad: 119
                },
                1: {
                    inicio: "11:30",
                    finaliza: "13:00",
                    horario: "11:30 a.m. – 1:00 p.m.",
                    horas: 1.5,
                    densidad: 105
                },
                2: {
                    inicio: "17:00",
                    finaliza: "19:30",
                    horario: "5:00 p.m. – 7:30 p.m.",
                    horas: 2.5,
                    densidad: 120
                }
            },
            surNorte: {
                0: {
                    inicio: "6:00",
                    finaliza: "9:00",
                    horario: "6:00 a.m. – 9:00 a.m",
                    horas: 3,
                    densidad: 117
                },
                1: {
                    inicio: "11:30",
                    finaliza: "13:00",
                    horario: "11:30 a.m. – 1:00 p.m.",
                    horas: 1.5,
                    densidad: 98
                },
                2: {
                    inicio: "17:00",
                    finaliza: "21:15",
                    horario: "5:00 p.m. – 9:15 p.m.",
                    horas: 4.25,
                    densidad: 76
                }
            }
        };
        
        const finDeSemana = {
            norteSur: {
                0: {
                    inicio: "13:00",
                    finaliza: "15:00",
                    horario: "1:00 p.m. – 3:00 p.m.",
                    horas: 2,
                    densidad: 107
                },
                1: {
                    inicio: "20:00",
                    finaliza: "6:00",
                    horario: "8:00 p.m. - 6:00 a.m.",
                    horas: 10,
                    densidad: 80
                },
            },
            surNorte: {
                0: {
                    finaliza: "9:30",
                    inicio: "7:00",
                    horario: "7:00 a.m. – 9:30 a.m.",
                    durancion: 2.5,
                    densidad: 105
                },
                1: {
                    inicio: "22:00",
                    finaliza: "4:30",
                    horario: "10:00 p.m. - 4:30 a.m.",
                    durancion: 6.5,
                    densidad: 54
                },
        
            }
        };
        

        if(startTime > 0 && endTime > 0){
            document.getElementById("tablaprueba").innerHTML = " ";
            
            let startInfo = document.querySelector(".item1");
            startInfo.innerHTML = startTime.format("DD/MM/YYYY H:mm");

            let endTimeInfo = document.querySelector(".item2");
            endTimeInfo.innerHTML = endTime.format("DD/MM/YYYY H:mm");

            document.getElementById("modalBtn").innerHTML = "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'> Datos puntuales </button>";
            console.log(dayjs(startInfo.value));

            const myInterval = setInterval(() => {

            let distance = (endTime.diff(startTime, 'millisecond'));

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let prueba = document.getElementById("prueba");

                document.getElementById("timer").innerHTML = days + "d " + hours + "h "+ minutes + "m ";

                let dateAux = new Date(startTime);
                const currentDay = dateAux.getDay();
                const dayname = dias[currentDay];
                prueba.innerHTML = dayname;

                if (distance <= 0) {

                    timer.innerHTML = "Finalizó";
                    clearInterval(myInterval);
                } else {

                distance -= 8000000;
                startTime = startTime.add(8000000, 'millisecond');
                let hora = startTime.hour() + ":" + startTime.minute();

            let colision = 0;
            let mantVerdes = 0;
            let mantElect = 0;
            let reparaciones = 0;
            let cierres = 0;
            let manifestaciones = 0;
            let contador = 1;

            for(let i = days; i >= 0; i--){

                let eventos = Math.floor(Math.random() * 101);

                if(eventos >0 && eventos <=15){
                    mantVerdes += 1;
                    let tiempo = Math.floor(Math.random() * (480 - 240)+ 240) +" minutos";
                    let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                    if(trayecto == 1)
                    trayecto = "Norte-Sur";
                    else
                    trayecto = "Sur-Norte";
                    console.log(tiempo);
                    document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Mantenimiento de áreas verdes</td><td>'+tiempo+'</td><td>'+trayecto+'</td><td>'+dayname+'</td>';
                    console.log({dayname});
                    contador +=1;
                }

                if(eventos >15 && eventos <=20){
                    colision += 1;
                    let tiempo = Math.floor(Math.random() * (120 - 60)+ 60) +" minutos";
                    let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                    if(trayecto == 1)
                    trayecto = "Norte-Sur";
                    else
                    trayecto = "Sur-Norte";
                    console.log(tiempo);
                    document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Colisión</td><td>'+tiempo+'</td><td>'+trayecto+'</td>';
                    console.log({dayname});
                    contador ++;
                }

                if(eventos >20 && eventos <=30){
                    mantElect += 1;
                    let tiempo = Math.floor(Math.random() * (480 - 120) + 120) +" minutos";
                    let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                    if(trayecto == 1)
                    trayecto = "Norte-Sur";
                    else
                    trayecto = "Sur-Norte";
                    console.log(tiempo);
                    document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Mantenimiento de sistemas eléctricos</td><td>'+tiempo+'</td><td>'+trayecto+'</td>';
                    contador ++;
                }

                if(eventos >30 && eventos <=45){
                    reparaciones += 1;
                    let tiempo = Math.floor(Math.random() * (480 - 120)+ 120) +" minutos";
                    let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                    if(trayecto > 1)
                    trayecto = "Norte-Sur";
                    else
                    trayecto = "Sur-Norte";
                    console.log(tiempo);
                    document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Reparaciones en la vía</td><td>'+tiempo+'</td><td>'+trayecto+'</td>';
                    contador ++;
                }

                if(eventos >45 && eventos <=55){
                    cierres += 1;
                    let tiempo = Math.floor(Math.random() * (120 - 60)+ 60) +" minutos";
                    let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                    if(trayecto > 1)
                    trayecto = "Norte-Sur";
                    else
                    trayecto = "Sur-Norte";
                    console.log(tiempo);
                    document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Cierre en la vía</td><td>'+tiempo+'</td><td>'+trayecto+'</td>';
                    contador ++;
                }

                if(eventos >55 && eventos <=60){
                    manifestaciones += 1;
                    let tiempo = Math.floor(Math.random() * (120 - 60)+ 60) +" minutos";
                    let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                    if(trayecto > 1)
                    trayecto = "Norte-Sur";
                    else
                    trayecto = "Sur-Norte";
                    console.log(tiempo);
                    document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Manifestación</td><td>'+tiempo+'</td><td>'+trayecto+'</td>';
                    contador ++;
                }

                if(eventos >60 && eventos <=100){
                    let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                    if(trayecto > 1)
                    trayecto = "Norte-Sur";
                    else
                    trayecto = "Sur-Norte";
                    document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Flujo normal de tráfico</td><td>Sin novedad</td><td>'+trayecto+'</td>';
                    contador ++;
                }
            }
            }
            }, 1000);
        }
        else{
            alert("Por favor, llene ambos campos para iniciar la simulación");
        }
    }


    /*

// Datos
const diasDeSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");

let currentDay;
let simulacionDias;
let ruta = false;
let cerrarRuta;
let despejarRuta;
let cont = 0;
let ObjToPrint = {};


const semana = {
    norteSur: {
        0: {
            inicio: "6:0",
            finaliza: "9:0",
            horario: "6:00 a.m. – 9:00 a.m.",
            horas: 3,
            densidad: 119
        },
        1: {
            inicio: "11:30",
            finaliza: "13:00",
            horario: "11:30 a.m. – 1:00 p.m.",
            horas: 1.5,
            densidad: 105
        },
        2: {
            inicio: "17:0",
            finaliza: "19:30",
            horario: "5:00 p.m. – 7:30 p.m.",
            horas: 2.5,
            densidad: 120
        }
    },
    surNorte: {
        0: {
            inicio: "6:0",
            finaliza: "9:0",
            horario: "6:00 a.m. – 9:00 a.m",
            horas: 3,
            densidad: 117
        },
        1: {
            inicio: "11:30",
            finaliza: "13:0",
            horario: "11:30 a.m. – 1:00 p.m.",
            horas: 1.5,
            densidad: 98
        },
        2: {
            inicio: "17:0",
            finaliza: "21:15",
            horario: "5:00 p.m. – 9:15 p.m.",
            horas: 4.25,
            densidad: 76
        }
    }
};

const finDeSemana = {
    norteSur: {
        0: {
            inicio: "13:0",
            finaliza: "15:0",
            horario: "1:00 p.m. – 3:00 p.m.",
            horas: 2,
            densidad: 107
        },
        1: {
            inicio: "20:0",
            finaliza: "6:0",
            horario: "8:00 p.m. - 6:00 a.m.",
            horas: 10,
            densidad: 80
        },
    },
    surNorte: {
        0: {
            finaliza: "9:30",
            inicio: "7:0",
            horario: "7:00 a.m. – 9:30 a.m.",
            durancion: 2.5,
            densidad: 105
        },
        1: {
            inicio: "22:0",
            finaliza: "4:30",
            horario: "10:00 p.m. - 4:30 a.m.",
            durancion: 6.5,
            densidad: 54
        },

    }
};


//Funcion para simular trafico

const simular = (e) => {
    e.preventDefault();
    clearInterval(timerInterval);


    //Obtener los datos de los inputs
    let start = dayjs(startDate.value);
    let end = dayjs(endDate.value);
    let distance = (end.diff(start, 'millisecond'));

    const timerInterval = setInterval(() => {

        //Calculos de tiempos

        let x = Math.floor(Math.random() * 2) + 1;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //Temporizador (Cuenta regresiva)

        const day = document.getElementById("day");
        const info = document.getElementById("info");
        const timer = document.getElementById("timer").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";


        let dateAux = new Date(start);
        const currentDay = dateAux.getDay();
        const dayname = diasDeSemana[currentDay];
        day.innerHTML = `${dayname}`;

        if (distance <= 0) {

            timer.innerHTML = "Finalizo";
            clearInterval(timerInterval);
        } else {

            //Conteo por minuto.

            distance -= 60000;
            start = start.add(60000, 'millisecond');
            let hora = start.hour() + ":" + start.minute();

    
            //Simulacion de trafico por dia de semana.
            if (currentDay >= 1 && currentDay <= 5) {

                if (ruta === false) {
                    for (let i = 0; i < 3; i++) {
                        // De norte a sur
                        if (hora >= semana.norteSur[i].inicio && hora <= semana.norteSur[i].finaliza && (x===1)) {

                            cerrarRuta = (start.add(parseInt(semana.norteSur[i].horas), 'hour')).hour() + ":" + (start.add(2, 'hour')).minute();
                            info.innerHTML = `Ruta aerea norte sur abierta a las ${hora} `;
                            ruta = true;
                            ObjToPrint[cont] = {
                                sentido: "norte - sur",
                                apertura: hora,
                                cierre: cerrarRuta,
                                dia: dayname,
                            }
                            x++;
                            toPrint(ObjToPrint[cont]);
                            break;

                            // De sur a Norte
                        } else if (hora >= semana.surNorte[i].inicio && hora <= semana.surNorte[i].finaliza  && (x ===2)) {

                            cerrarRuta = (start.add(parseInt(semana.surNorte[i].horas), 'hour')).hour() + ":" + (start.add(2, 'hour')).minute();
                            info.innerHTML = `Ruta aerea sur norte abierta a las ${hora}`;
                            ruta = true;
                            ObjToPrint[cont] = {
                                sentido: "sur - norte",
                                apertura: hora,
                                cierre: cerrarRuta,
                                dia: dayname,
                            }
                            x++;
                            toPrint(ObjToPrint[cont]);
                            break;
                        }
                    }

                }
                else {

                    if (hora === cerrarRuta) {
                        info.innerHTML = `Ruta aerea cerrada a las ${hora}`;
                        despejarRuta = (start.add(2, 'hour')).hour() + ":" + (start.add(2, 'hour')).minute();
                    }

                    if (hora === despejarRuta) {
                        info.innerHTML = `Ruta Despejada`;
                        ruta = false;
                        cont++;
                    }

                }
                //-------------------------------------------------- Fines de semana --------------------------------------------------
            } else {

                if (ruta === false) {
                    for (let i = 0; i < 2; i++) {
                        //De norte a sur
                        if (hora >= finDeSemana.norteSur[i].inicio && hora <= finDeSemana.norteSur[i].finaliza && (x===1)) {

                            cerrarRuta = (start.add(parseInt(finDeSemana.norteSur[i].horas), 'hour')).hour() + ":" + (start.add(2, 'hour')).minute();
                            info.innerHTML = `Ruta aerea norte sur abierta a las ${hora} `;
                            console.log(`Ruta aerea abierta a las ${hora}`);
                            ruta = true;

                            ObjToPrint[cont] = {
                                sentido: "norte - sur",
                                apertura: hora,
                                cierre: cerrarRuta,
                                dia: dayname,
                            }
                            toPrint(ObjToPrint[cont]);
                            break;
                        // De sur a norte
                        } else if ((hora >= finDeSemana.surNorte[i].inicio && hora <= finDeSemana.surNorte[i].finaliza && (x===2))) {
                            cerrarRuta = (start.add(parseInt(finDeSemana.surNorte[i].horas), 'hour')).hour() + ":" + (start.add(2, 'hour')).minute();
                            info.innerHTML = `Ruta aerea sur norte abierta a las ${hora}`;
                            console.log(`<br/> Ruta aerea abierta a las ${hora}`);
                            ruta = true;
                            ObjToPrint[cont] = {
                                sentido: "sur - norte",
                                apertura: hora,
                                cierre: cerrarRuta,
                                dia: dayname,
                            }
                            toPrint(ObjToPrint[cont]);
                            break;
                        }
                    }

                }
                else {

                    //Si la ruta esta abierta y la hora de cierre es igual a la hora actual, se cierra la ruta.

                    if (hora === cerrarRuta) {
                        info.innerHTML = `Ruta aerea cerrada a las ${hora}`;
                        despejarRuta = (start.add(2, 'hour')).hour() + ":" + (start.add(2, 'hour')).minute();
                    }

                    //Si la ruta esta cerrada, y la hora de despeje es igual a la hora actual, se despeja la ruta.

                    if (hora === despejarRuta) {
                        info.innerHTML = `Ruta Despejada`;
                        ruta = false;
                        cont++;
                    }
                }
            }
        }


    }  , 100);


}


//Funcion para mostrar en pantalla los datos de la ruta.

const toPrint = (obj) => {

    document.getElementById("result").insertRow(-1).innerHTML = `
    <th scope="row">${obj.dia}</th>
    <td>${obj.apertura}</td>
    <td>${obj.cierre}</td>
    <td>${obj.sentido}</td>`
}


*/