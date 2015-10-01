<?php

class usuario {

    public function autenticar($args) {
        extract($args);
        $sql = "select * from usuario where cuenta = '$user' and contrasena = '$pass'";
        if ($rs = UtilConexion::$pdo->query($sql) ) {
            $menu = "";
            $fila = $rs->fetch(PDO::FETCH_ASSOC);
            if ($fila['rol'] == 'admin'){
                $menu = file_get_contents("../vista/html/admin.html");
            }
            else if ($fila['rol'] == 'adminpracticayconv'){
                $menu = file_get_contents("../vista/html/admin_practicayconv.html");
            }
            else if ($fila['rol'] == 'estudiante'){
                $menu = file_get_contents("../vista/html/estudiante.html");
            }
            else if ($fila['rol'] == 'docente'){
                $menu = file_get_contents("../vista/html/docente.html");
            }
            else if ($fila['rol'] == 'persempresarial'){
                $menu = file_get_contents("../vista/html/pers_empresarial.html");
            }
            echo json_encode($menu);
            //echo json_encode(['nombre'=>$fila['nombre'], 'ok'=>true]);
        }else{
            echo json_encode(["rs"=>$rs]);
        }
    }

}

?>
