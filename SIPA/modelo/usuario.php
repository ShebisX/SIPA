<?php

class usuario {

    public function autenticar($args) {
        extract($args);
        $sql = "select * from usuario where cuenta = '$user' and contrasena = '$pass'";
        if ($rs = UtilConexion::$pdo->query($sql) ) {
            $fila = $rs->fetch(PDO::FETCH_ASSOC);
            echo json_encode(['nombre'=>$fila['nombre'], 'ok'=>true]);
        }else{
            echo json_encode(["rs"=>$rs]);
        } 
    }

}

?>
