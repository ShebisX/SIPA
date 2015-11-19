<?php
class usuario {

    public function verificarCambio($args){
        extract($args);
        session_start();
        $user = $_SESSION['user'];
        $sql = "select primer from usuario where cuenta = '$user'";
        if($rs = UtilConexion::$pdo->query($sql)){
            $fila=$rs->fetch(PDO::FETCH_ASSOC);
            echo json_encode($fila['primer']);
        }
    }

    public function redirigir($rol){
        $menu = "";
        if ($rol == 'admin'){
            $menu = file_get_contents("../vista/html/admin.html");
        }
        else if ($rol == 'admin_practicayconv'){
            $menu = file_get_contents("../vista/html/admin_practicayconv.html");
        }
        else if ($rol == 'estudiante'){
            $menu = file_get_contents("../vista/html/estudiante.html");
        }
        else if ($rol == 'docente'){
            $menu = file_get_contents("../vista/html/docente.html");
        }
        else if ($rol == 'pers_empresarial'){
            $menu = file_get_contents("../vista/html/pers_empresarial.html");
        }
        echo json_encode($menu);
    }

    public function cambiarContrasena($args){
        extract($args);
        session_start();
        $user=$_SESSION['user'];
        if($pass1==$pass2){
            $sql="update usuario set contrasena='$pass1' where cuenta='$user'";
            UtilConexion::$pdo->query($sql);
            self::redirigir($_SESSION['rol']);
        }
    }

    public function autenticar($args) {
        extract($args);
        session_start();
        if($_SESSION['user']==$user){
            self::redirigir($_SESSION['rol']);
        }else{
            $sql = "select * from usuario where cuenta = '$user' and contrasena = '$pass'";
            if ($rs = UtilConexion::$pdo->query($sql) ) {
                $menu = "";
                $fila = $rs->fetch(PDO::FETCH_ASSOC);
                $rol=$fila['rol'];
                $_SESSION['user']=$fila['cuenta'];
                $_SESSION['rol']=$rol;
                if($fila['primer']==TRUE){
                    $menu = file_get_contents("../vista/html/cambioClave.html");
                    echo json_encode($menu);
                    return;
                }
                $this->redirigir($rol);
                //echo json_encode(['nombre'=>$fila['nombre'], 'ok'=>true]);
            }else{
                echo json_encode(["rs"=>$rs]);
            }
        }
    }

    public function reestablecerContrasena($args){
        extract($args);
        $sql = "select correo from usuario where cuenta = '$user'";
        $correo = "";
        if ($rs = UtilConexion::$pdo->query($sql) ) {
            $fila = $rs->fetch(PDO::FETCH_ASSOC);
            $correo=$fila['correo'];
        }
        if($correo != ""){
            $contraNueva = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 8);
            $sql = "update usuario set contrasena='$contraNueva', primer='true' where cuenta = '$user'";
            UtilConexion::$pdo->query($sql);
            $transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, "ssl")
              ->setUsername('sipaucaldas')
              ->setPassword('sipanopa');
            $mailer = Swift_Mailer::newInstance($transport);
            $message = Swift_Message::newInstance('Nueva contraseña')
              ->setFrom(array('sipaucaldas@gmail.com' => 'SIPA'))
              ->setTo(array($correo))
              ->setBody("Su nueva contraseña es: ".$contraNueva);

            $result = $mailer->send($message);
            echo json_encode(true);
        }else{
            echo json_encode(false);
        }


    }

    function add($argumentos) {
        extract($argumentos);
        UtilConexion::$pdo->exec("INSERT INTO usuario VALUES ('$id','$nombre','$apellido','$telefono','$cuenta','$contrasena','$rol')");
        echo UtilConexion::getEstado();
    }
    
    function edit($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos,1));
        $sql = "UPDATE usuario SET id='$idNuevo', nombre='$nombre', apellido='$apellido', telefono='$telefono', cuenta='$cuenta',contrasena='$contrasena', rol='$rol' WHERE  id='$id' ";
        error_log($sql);
        UtilConexion::$pdo->exec($sql);
        echo UtilConexion::getEstado();
    }
    
    
     function del($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos,1));
      $sql = "DELETE FROM usuario WHERE id='$id';"
             ;
      
        error_log($sql);
        UtilConexion::$pdo->exec($sql);
        echo UtilConexion::getEstado();
        
       
    }

    function select($argumentos) {
        extract($argumentos);
        $where = UtilConexion::getWhere($argumentos); // Se construye la clausula WHERE
        $count = UtilConexion::$pdo->query("SELECT id FROM usuario $where")->rowCount();
        // Calcula el total de páginas por consulta
        if ($count > 0) {
            $total_pages = ceil($count / $rows);
        } else {
            $total_pages = 0;
        }

        // Si por alguna razón página solicitada es mayor que total de páginas
        // Establecer a página solicitada total paginas  (¿por qué no al contrario?)
        if ($page > $total_pages) {
            $page = $total_pages;
        }

        // Calcular la posición de la fila inicial
        $start = $rows * $page - $rows;
        //  Si por alguna razón la posición inicial es negativo ponerlo a cero
        // Caso típico es que el usuario escriba cero para la página solicitada
        if ($start < 0) {
            $start = 0;
        }

        $respuesta = [
            'total' => $total_pages,
            'page' => $page,
            'records' => $count
        ];

        $sql = "SELECT * FROM usuario $where ORDER BY $sidx $sord LIMIT $rows OFFSET $start";
        foreach (UtilConexion::$pdo->query($sql) as $fila) {
            $respuesta['rows'][] = [
                'id' => $fila['id'],
                'cell' => [$fila['id'], $fila['nombre']]
            ];
        }
        // Quite los comentarios para ver el array original y el array codificado en JSON
        // error_log(print_r($respuesta, TRUE));
        // error_log(print_r(json_encode($respuesta), TRUE));
        echo json_encode($respuesta);
    }

    
    
    
    
    
    
}

?>
