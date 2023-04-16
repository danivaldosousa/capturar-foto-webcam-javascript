
var video = document.querySelector('video')

navigator.mediaDevices.getUserMedia({video: true})
.then(stream => {
    video.srcObject = stream;
    video.play()
})
.catch(error => {
    console.log("Error: ", error);
})

document.querySelector('button').addEventListener('click', () =>{
    
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);
    if(document.querySelector('a'))
        document.body.removeChild('a')
    var link = document.createElement('a');
    const dateNow = new Date().valueOf();
     console.log(dateNow);
    var nameFile = `foto-tirada-${dateNow}.png`
    link.download =  nameFile;
    link.href = canvas.toDataURL();
    link.textContent = 'Clique aqui para Download da imagem';
    document.body.appendChild(link);
})

