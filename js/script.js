const usuario_contraseña = 'aarSaban:aaronsaban.as2012',
    encriptacion = window.btoa(usuario_contraseña),
    url = 'http://107.20.199.106/restapi/sms/1/text/single',
    myHeaders = new Headers(),
    user_key= "f2e087b8e50497062391410c297005fd",
    url_new = "https://domain.apitool.info/v2/domains/check_availability";
    headers = new Headers();
    
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', `Basic ${encriptacion}`);
headers.append('X-TOKEN', user_key);
const EnviarSMS = () => {
    var texto = document.getElementById("inputTexto").value;
    var numero = document.getElementById("inputNumero").value;
    console.log(texto.length, numero.length);
    if(texto.length != 0 && numero.length != 0 ){
        const myInit = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                'from': "Aaron",
                'to': numero,
                'text': texto
            })
        },
        myRequest = new Request(url, myInit);
        fetch(myRequest)
        .then( response =>{
            console.log(response.response);
        });
    }
}

/*const Test = () => {
    const myInit = {
        method : 'GET',
        headers : headers,
        mode: 'cors',
        credentials: 'include',
        body:{
            'sld' : 'aaronsaban',
            'tld' : 'com'
        }
    },
    myRequest = new Request(url_new, myInit);
    fetch(myRequest)
    .then(response =>{
        console.log(response);
    })
    

}*/

function EnviarSMS(){
    var texto = document.getElementById("inputTexto").value;
    var numero = document.getElementById("inputNumero").value;
    var usuario_contraseña = "aarSaban:aaronsaban.as2012";
    var encriptacion = window.btoa(usuario_contraseña);
    console.log(encriptacion);
    $.ajax({
        type: "post",
        url: 'http://api.enviossms.com/restapi/sms/1/text/single',
        data: JSON.stringify({
            'from' : "Aaron",
            'to' : numbero,
            'text': texto
        }),
        headers:{
           'Authorization' : "Basic " + encriptacion,
           'Content-Type' : "application/json" 
        },
        error: function(xhr, status, error){
            var err = xhr.responseText;
            console.log(err);
        }
        
    });
}

