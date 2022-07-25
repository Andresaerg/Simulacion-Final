    const identifier = () => {
        document.getElementById("btn").innerHTML=start();
    }
    
    const start = () => {

        let colision = false;
        let mantVerdes = false;
        let mantElect = false;
        let reparaciones = false;
        let cierres = false;
        let manifestaciones = false;
        let eventos = Math.floor(Math.random() * 101);
        if(eventos >0 && eventos <=15){
            mantVerdes = true;
            let tiempo = Math.floor(Math.random() * 120);
            let trayecto = Math.floor(Math.random() * 3);
            if(trayecto = 1)
            trayecto = "Norte-Sur";
            else
            trayecto = "Sur-Norte";
            console.log(tiempo);
            document.getElementById("tr").innerHTML = "<td>1</td><td>Mantenimiento de áreas verdes</td><td>"+tiempo+"</td><td>"+trayecto+"</td>";
        }

        let startTime = document.querySelector(".item1");
        startTime.innerHTML = document.getElementById("inicio").value.replace('T', ' ');
        let endTime = document.querySelector(".item2");
        endTime.innerHTML = document.getElementById("final").value.replace('T', ' ');
        document.getElementById("modalBtn").innerHTML = "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'> Datos puntuales </button>";
    }
