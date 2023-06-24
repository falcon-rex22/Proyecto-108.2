function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/m2D7vaCjx/model.json", modelo_cargado);
}

function modelo_cargado(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }

    else{
        console.log(results);
        numero1 = Math.floor(Math.random() * 255)+1;
        numero2 = Math.floor(Math.random() * 255)+1;
        numero3 = Math.floor(Math.random() * 255)+1;
        document.getElementById("Resultado_sonido").innerHTML = results[0].label;
        document.getElementById("Resultado_confianza").innerHTML = (results[0].confidence * 100).toFixed(2) + "%";

        document.getElementById("Resultado_sonido").style.color = "rgb("+ numero1 +","+ numero2 +","+ numero3 + ")";
        document.getElementById("Resultado_confianza").style.color = "rgb("+ numero1 +","+ numero2 +","+ numero3 + ")";

        img = document.getElementById("Foto1");
        img1 = document.getElementById("Foto2");
        img2 = document.getElementById("Foto3");
        img3 = document.getElementById("Foto4");

        if(results[0].label == "Aplausos"){
            img.src = "aliens-01.gif"
            img1.src = "aliens-02.png"
            img2.src = "aliens-03.png"
            img3.src = "aliens-04.png"
        }

        else if(results[0].label == "canta Bheem"){
            img.src = "aliens-01.png"
            img1.src = "aliens-02.gif"
            img2.src = "aliens-03.png"
            img3.src = "aliens-04.png"
        }

        else if(results[0].label == "mueve sillas XD"){
            img.src = "aliens-01.png"
            img1.src = "aliens-02.png"
            img2.src = "aliens-03.gif"
            img3.src = "aliens-04.png"
        }

        else{
            img.src = "aliens-01.png"
            img1.src = "aliens-02.png"
            img2.src = "aliens-03.png"
            img3.src = "aliens-04.gif"
        }
    }
}