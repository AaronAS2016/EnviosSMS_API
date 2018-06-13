<!DOCTYPE html>
<html lang="es">
    <!--  Codigo PHP -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Prueba API Envios SMS</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <form action="index.php" method="post">
        <input type="text" id="inputTexto" name="inputTexto" placeholder="Ingrese Mensaje"> 
        <input type="number" id="inputNumero" name="inputNumero" placeholder="Ingrese número telefonico">
        <button type="submit">Enviar mensaje</button>
    </form>

    <?php  
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $numero = $_POST['inputNumero'];
        $texto = $_POST['inputTexto'];
        $usuario_contraseña = "usuario:contraseña";
        $encriptacion = base64_encode($usuario_contraseña);
        $url = "http://api.enviosms.com/restapi/sms/1/text/single";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
          "Authorization: Basic $encriptacion"
        ));
        $params = array('from' => 'Usuario','to' => $numero, 'text' => $texto);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
        curl_setopt($ch, CURLOPT_TIMEOUT, 5);
        $data = curl_exec($ch);
        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if ($httpcode == 200) {
            echo  $data;
        }
    }
    ?>
</body>
</html>