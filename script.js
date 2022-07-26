    const identifier = () => {
            document.getElementById("btn").innerHTML=start();
    }
    
    const start = () => {

        let startTime = dayjs(document.getElementById("inicio").value);
        let endTime = dayjs(document.getElementById("final").value);
        const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        let today = dayjs(startTime).date();
        let month = dayjs(startTime).month();
        
        let colision = 0;
        let mantVerdes = 0;
        let mantElect = 0;
        let reparaciones = 0;
        let cierres = 0;
        let manifestaciones = 0;
        let contador = 1;
        let tiempoTot = [];
        let flujoNormal = 0;

        if(startTime > 0 && endTime > 0){
            document.getElementById("tablaprueba").innerHTML = " ";
            
            let startInfo = document.querySelector(".item1");
            startInfo.innerHTML = startTime.format("DD/MM/YYYY H:mm");

            let endTimeInfo = document.querySelector(".item2");
            endTimeInfo.innerHTML = endTime.format("DD/MM/YYYY H:mm");

            document.getElementById("modalBtn").innerHTML = "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'> Datos puntuales </button>";
            document.getElementById("modalBtnInf").innerHTML = "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#myModal'> Informe técnico </button>";
            console.log(dayjs(startInfo.value));

            let distancef = (endTime.diff(startTime, 'millisecond'));

            const daysf = Math.floor(distancef / (1000 * 60 * 60 * 24));

            const myInterval = setInterval(() => {

            let distance = (endTime.diff(startTime, 'millisecond'));

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let prueba = document.getElementById("prueba");

                document.getElementById("timer").innerHTML = days + "d " + hours + "h "+ minutes + "m ";

                let aux = new Date(startTime);
                const currentDay = aux.getDay();
                const dayname = dias[currentDay];
                prueba.innerHTML = dayname+" "+endTime.format("DD/MM/YYYY");

                if (distance <= 0) {

                    timer.innerHTML = "Finalizó en "+daysf+" días";
                    clearInterval(myInterval);
                    document.getElementById("areasVerdes").innerHTML = mantVerdes;
                    document.getElementById("sisElects").innerHTML = mantElect;
                    document.getElementById("reparaciones").innerHTML = reparaciones;
                    document.getElementById("colisiones").innerHTML = colision;
                    document.getElementById("cierres").innerHTML = cierres;
                    document.getElementById("manifestaciones").innerHTML = manifestaciones;
                    console.log("Colisiones: "+colision+"\nMant. áreas verdes: "+ mantVerdes+"\nMant sistemas elect: "+mantElect+"\nManifestaciones "+manifestaciones+"\nReparaciones: "+reparaciones+"\nCierres: "+cierres);
                    let wow = 0;
                    for(let i = 0; i < tiempoTot.length; i++)
                    {
                        wow += tiempoTot[i];
                    }
                    let yaw = wow / tiempoTot.length;
                    if(yaw == "NaN"){
                        yaw = 0;
                    }
                    document.getElementById("tiempoTot").innerHTML = wow + " minutos";
                    console.log(yaw);
                    if(tiempoTot.length > flujoNormal){
                        document.getElementById("paragraph").innerHTML = "El tiempo promedio de cada evento en la simulación es de <b>"+yaw+" minutos</b>, por lo tanto representa una estadía en cola del mismo tiempo en aproximación, distribuida a través de los días"+
                        " donde se dan estos eventos, hasta que finalicen las labores suscitadas por el mismo, se toma en cuenta que sean de reparaciones en vía, cierres, manifestaciones o colisiones."+
                        "<br><br> Este tiempo obtenido no es óptimo, tomando en cuenta las cifras estadísticas manejadas anteriormente."+
                        "<br><br> El total de días con un flujo normal de tráfico es de: <b>"+flujoNormal+"</b>, mientras que se dieron <b>"+tiempoTot.length+"</b> eventos en la C1."+
                        " Lo cual sugiere que <b>son más los casos de colisiones y cierres</b> por diferentes motivos que la circulación normal y plena en la vía."+
                        "<br><br><h5>Se recomienda disminuir los tiempos de las actividades de mantenimiento, aumentar la eficacia en el despeje de los puntos con colisiones y reducir los tiempos de cierre </h5>";
                    }else{
                        document.getElementById("paragraph").innerHTML = "El tiempo promedio de cada evento en la simulación es de <b>"+yaw+" minutos</b>, por lo tanto representa una estadía en cola del mismo tiempo en aproximación, distribuida a través de los días"+
                        " donde se dan estos eventos, hasta que finalicen las labores suscitadas por el mismo, se toma en cuenta que sean de reparaciones en vía, cierres, manifestaciones o colisiones."+
                        "<br><br> Este tiempo obtenido es aceptable, tomando en cuenta las cifras estadísticas manejadas anteriormente, aunado al hecho de que el <b>flujo del tráfico"+
                        "</b> ha sido óptimo, con <b>"+flujoNormal+"</b> días de flujo normal, y solo <b>"+tiempoTot.length+"</b> eventos que afectaran la vía tomaron lugar en la C1.";
                    }
                } else {

                    distance -= 86400000;
                    startTime = startTime.add(86400000, 'millisecond');

                    let eventos = Math.floor(Math.random() * 101);
                    let horasPico = Math.floor(Math.random() * (19 - 6) + 6);
                    let horasRest = Math.floor(Math.random() * 23);
                    let momento;
                    let eventosPico = 0;
                    let densidad;

                    if(dayname == "Lunes" || dayname == "Martes" || dayname == "Miercoles" ||
                            dayname == "Jueves" || dayname == "Viernes"){

                        if((eventos >0 && eventos <=15) && (horasPico <= 19)){
                            mantVerdes += 1;
                            let tiempo = Math.floor(Math.random() * (240 - 120)+ 120);
                            //tiempoTot.push(tiempo);
                            console.log(tiempoTot);
                            let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                            if(trayecto == 1){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if(horasPico >= 6 && horasPico <= 9){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(horasPico == 11){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 12 && horasPico <= 13){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 14 && horasPico <= 19){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(momento == undefined || densidad == undefined){
                                momento = Math.floor(Math.random() * (19 - 6) +6) +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            console.log(tiempo);
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Mantenimiento de áreas verdes</td><td>'+tiempo+' minutos</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            console.log({dayname});
                            contador ++;
                        }

                        if(eventos >15 && eventos <=20){
                            colision += 1;
                            let tiempo = Math.floor(Math.random() * (120 - 60)+ 60);
                            tiempoTot.push(tiempo);
                            let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                            if(trayecto == 1){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if(horasPico >= 6 && horasPico <= 9){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(horasPico == 11){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 12 && horasPico <= 13){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 14 && horasPico <= 19){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                                if(horasPico >= 17)
                                eventosPico++;
                            }
                            if(momento == undefined || densidad == undefined){
                                if(horasRest >= 12){
                                    momento = horasRest +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                }else{
                                    momento = horasRest +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                }
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            console.log(tiempo);
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Colisión</td><td>'+tiempo+' minutos</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            console.log({dayname});
                            contador ++;
                        }

                        if(eventos >20 && eventos <=30){
                            mantElect += 1;
                            let tiempo = Math.floor(Math.random() * (480 - 120) + 120);
                            //tiempoTot.push(tiempo);
                            console.log(tiempoTot);
                            let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                            if(trayecto == 1){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if(horasPico >= 6 && horasPico <= 9){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(horasPico == 11){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 12 && horasPico <= 13){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 14 && horasPico <= 19){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(momento == undefined || densidad == undefined){
                                momento = Math.floor(Math.random() * (22 - 6) +6) +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            console.log(tiempo);
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Mantenimiento de sistemas eléctricos</td><td>'+tiempo+' minutos</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            contador ++;
                        }

                        if(eventos >30 && eventos <=45){
                            reparaciones += 1;
                            let tiempo = Math.floor(Math.random() * (480 - 120)+ 120);
                            tiempoTot.push(tiempo);
                            console.log(tiempoTot);
                            let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                            if(trayecto > 1){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if(horasPico >= 6 && horasPico <= 9){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(horasPico == 11){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 12 && horasPico <= 13){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 14 && horasPico <= 19){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(momento == undefined || densidad == undefined){
                                momento = Math.floor(Math.random() * (19 - 6) +6) +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            console.log(tiempo);
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Reparaciones en la vía</td><td>'+tiempo+' minutos</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            contador ++;
                        }

                        if(eventos >45 && eventos <=55){
                            cierres += 1;
                            let tiempo = Math.floor(Math.random() * (120 - 60)+ 60);
                            tiempoTot.push(tiempo);
                            console.log(tiempoTot);
                            let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                            if(trayecto > 1){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if(horasPico >= 6 && horasPico <= 9){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(horasPico == 11){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 12 && horasPico <= 13){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 14 && horasPico <= 19){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(momento == undefined || densidad == undefined){
                                if(horasRest >= 12){
                                    momento = horasRest +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                }else{
                                    momento = horasRest +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                }
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            console.log(tiempo);
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Cierre en la vía</td><td>'+tiempo+' minutos</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            contador ++;
                        }

                        if(eventos >55 && eventos <=60){
                            manifestaciones += 1;
                            let tiempo = Math.floor(Math.random() * (120 - 60)+ 60);
                            tiempoTot.push(tiempo);
                            console.log(tiempoTot);
                            let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                            if(trayecto > 1){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if(horasPico >= 6 && horasPico <= 9){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(horasPico == 11){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 12 && horasPico <= 13){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 14 && horasPico <= 19){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(momento == undefined || densidad == undefined){
                                momento = Math.floor(Math.random() * (19 - 6) +6) +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            console.log(tiempo);
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Manifestación</td><td>'+tiempo+' minutos</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            contador ++;
                        }

                        if(eventos >60 && eventos <=100){
                            flujoNormal ++;
                            let trayecto = Math.floor(Math.random() * 2);
                            if(trayecto > 0){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if(horasPico >= 6 && horasPico <= 9){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(horasPico == 11){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 12 && horasPico <= 13){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (110 - 70)+ 70);
                            }
                            if(horasPico >= 14 && horasPico <= 19){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if(momento == undefined || densidad == undefined){
                                momento = horasRest +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (130 - 90)+ 90);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Flujo normal de tráfico</td><td>Sin novedad</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            contador ++;
                            console.log(trayecto);
                        }
                    }// IF DÍA DE SEMANA
                    else{
                        console.log("FIN DE SEMANA!");
                        if((eventos >0 && eventos <=15) && (horasPico <= 19)){
                            mantVerdes += 1;
                            let tiempo = Math.floor(Math.random() * (240 - 120)+ 120);
                            tiempoTot.push(tiempo);
                            console.log(tiempoTot);
                            let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                            if(trayecto == 1){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if((horasPico >= 13 && horasPico <= 15) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (107 - 70)+ 70);
                            }
                            if((horasPico >= 6 && horasPico < 12 ) || (horasPico >= 16 && horasPico <= 20) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (80 - 50) + 50);
                            }
                            if((horasPico >= 7 && horasPico <= 9) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (105 - 65)+ 65);
                            }
                            if((horasPico >= 4 && horasPico <= 6 ) || (horasPico >= 10 && horasPico <= 22) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (54 - 20) + 20);
                            }
                            if(momento == undefined || densidad == undefined){
                                momento = Math.floor(Math.random() * (19 - 6) +6) +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (90 - 30)+ 30);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            console.log(tiempo);
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Mantenimiento de áreas verdes</td><td>'+tiempo+' minutos</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            console.log({dayname});
                            contador ++;
                        }

                        if(eventos >15 && eventos <=20){
                            colision += 1;
                            let tiempo = Math.floor(Math.random() * (120 - 60)+ 60);
                            tiempoTot.push(tiempo);
                            console.log(tiempoTot);
                            let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                            if(trayecto == 1){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if((horasPico >= 13 && horasPico <= 15) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (107 - 70)+ 70);
                            }
                            if((horasPico >= 6 && horasPico < 12 ) || (horasPico >= 16 && horasPico <= 20) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (80 - 50) + 50);
                            }
                            if((horasPico >= 7 && horasPico <= 9) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (105 - 65)+ 65);
                            }
                            if((horasPico >= 4 && horasPico <= 6 ) || (horasPico >= 10 && horasPico <= 22) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (54 - 20) + 20);
                            }
                            if(momento == undefined || densidad == undefined){
                                momento = horasRest +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (90 - 30)+ 30);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            console.log(tiempo);
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Colisión</td><td>'+tiempo+' minutos</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            console.log({dayname});
                            contador ++;
                        }

                        if(eventos >20 && eventos <=30){
                            mantElect += 1;
                            let tiempo = Math.floor(Math.random() * (480 - 120) + 120);
                            tiempoTot.push(tiempo);
                            console.log(tiempoTot);
                            let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                            if(trayecto == 1){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if((horasPico >= 13 && horasPico <= 15) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (107 - 70)+ 70);
                            }
                            if((horasPico >= 6 && horasPico < 12 ) || (horasPico >= 16 && horasPico <= 20) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (80 - 50) + 50);
                            }
                            if((horasPico >= 7 && horasPico <= 9) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (105 - 65)+ 65);
                            }
                            if((horasPico >= 4 && horasPico <= 6 ) || (horasPico >= 10 && horasPico <= 22) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (54 - 20) + 20);
                            }
                            if(momento == undefined || densidad == undefined){
                                momento = Math.floor(Math.random() * (20 - 6) +6) +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (90 - 30)+ 30);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            console.log(tiempo);
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Mantenimiento de sistemas eléctricos</td><td>'+tiempo+' minutos</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            contador ++;
                        }

                        if(eventos >30 && eventos <=45){
                            reparaciones += 1;
                            let tiempo = Math.floor(Math.random() * (480 - 120)+ 120);
                            tiempoTot.push(tiempo);
                            console.log(tiempoTot);
                            let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                            if(trayecto > 1){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if((horasPico >= 13 && horasPico <= 15) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (107 - 70)+ 70);
                            }
                            if((horasPico >= 6 && horasPico < 12 ) || (horasPico >= 16 && horasPico <= 20) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (80 - 50) + 50);
                            }
                            if((horasPico >= 7 && horasPico <= 9) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (105 - 65)+ 65);
                            }
                            if((horasPico >= 4 && horasPico <= 6 ) || (horasPico >= 10 && horasPico <= 22) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (54 - 20) + 20);
                            }
                            if(momento == undefined || densidad == undefined){
                                momento = Math.floor(Math.random() * (19 - 6) +6) +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (90 - 30)+ 30);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            console.log(tiempo);
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Reparaciones en la vía</td><td>'+tiempo+' minutos</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            contador ++;
                        }

                        if(eventos >45 && eventos <=55){
                            cierres += 1;
                            let tiempo = Math.floor(Math.random() * (120 - 60)+ 60);
                            tiempoTot.push(tiempo);
                            console.log(tiempoTot);
                            let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                            if(trayecto > 1){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if((horasPico >= 13 && horasPico <= 15) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (107 - 70)+ 70);
                            }
                            if((horasPico >= 6 && horasPico < 12 ) || (horasPico >= 16 && horasPico <= 20) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (80 - 50) + 50);
                            }
                            if((horasPico >= 7 && horasPico <= 9) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (105 - 65)+ 65);
                            }
                            if((horasPico >= 4 && horasPico <= 6 ) || (horasPico >= 10 && horasPico <= 22) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (54 - 20) + 20);
                            }
                            if(momento == undefined || densidad == undefined){
                                momento = Math.floor(Math.random() * (19 - 6) +6) +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (90 - 30)+ 30);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            console.log(tiempo);
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Cierre en la vía</td><td>'+tiempo+' minutos</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            contador ++;
                        }

                        if(eventos >55 && eventos <=60){
                            manifestaciones += 1;
                            let tiempo = Math.floor(Math.random() * (120 - 60)+ 60);
                            tiempoTot.push(tiempo);
                            console.log(tiempoTot);
                            let trayecto = Math.floor(Math.random() * (3 - 1) + 1);
                            if(trayecto > 1){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if((horasPico >= 13 && horasPico <= 15) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (107 - 70)+ 70);
                            }
                            if((horasPico >= 6 && horasPico < 12 ) || (horasPico >= 16 && horasPico <= 20) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (80 - 50) + 50);
                            }
                            if((horasPico >= 7 && horasPico <= 9) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (105 - 65)+ 65);
                            }
                            if((horasPico >= 4 && horasPico <= 6 ) || (horasPico >= 10 && horasPico <= 22) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (54 - 20) + 20);
                            }
                            if(momento == undefined || densidad == undefined){
                                momento = Math.floor(Math.random() * (19 - 6) +6) +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (90 - 30)+ 30);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            console.log(tiempo);
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Manifestación</td><td>'+tiempo+' minutos</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            contador ++;
                        }

                        if(eventos >60 && eventos <=100){
                            flujoNormal ++;
                            let trayecto = Math.floor(Math.random() * 2);
                            if(trayecto > 0){
                            trayecto = "Norte-Sur";}
                            else{
                            trayecto = "Sur-Norte";}
                            if((horasPico >= 13 && horasPico <= 15) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (107 - 70)+ 70);
                            }
                            if((horasPico >= 6 && horasPico < 12 ) || (horasPico >= 16 && horasPico <= 20) && (trayecto == "Norte-Sur")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (80 - 50) + 50);
                            }
                            if((horasPico >= 7 && horasPico <= 9) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (105 - 65)+ 65);
                            }
                            if((horasPico >= 4 && horasPico <= 6 ) || (horasPico >= 10 && horasPico <= 22) && (trayecto == "Sur-Norte")){
                                eventosPico++;
                                if(horasPico < 12 ){
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                else{
                                momento = horasPico +":"+ Math.floor(Math.random() * (60 - 10) + 10);}
                                densidad = Math.floor(Math.random() * (54 - 20) + 20);
                            }
                            if(momento == undefined || densidad == undefined){
                                momento = Math.floor(Math.random() * (22 - 4) +4) +":"+ Math.floor(Math.random() * (60 - 10)+ 10);
                                densidad = Math.floor(Math.random() * (90 - 30)+ 30);
                            }
                            if((startTime.format("DD") == "24" && startTime.format("MM") == "12")
                                || (startTime.format("DD") == "31" && startTime.format("MM") == "12")){
                                densidad = "Tope de flujo vehicular"
                            }
                            document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+contador+'</td><td>Flujo normal de tráfico</td><td>Sin novedad</td><td>'+trayecto+'</td><td>'+dayname+" "+startTime.format("DD/MM/YYYY")+'</td><td>'+momento+'</td><td>'+densidad+'</td>';
                            contador ++;
                            console.log(trayecto);
                        }
                    }// ELSE, FIN DE SEMANA
                    console.log("Día: "+dayjs(startTime).date()+"\nMes: "+ dayjs(startTime).month());
                    sum = mantVerdes + mantElect + colision + manifestaciones + reparaciones + cierres;
                    document.getElementById("eventsC").innerHTML = sum;
                    document.getElementById("flujoNormal").innerHTML = flujoNormal;
                    document.getElementById("duracion").innerHTML = daysf;
                }
            }, 1000);
        }
        else{
            alert("Por favor, llene ambos campos para iniciar la simulación");
        }
    }