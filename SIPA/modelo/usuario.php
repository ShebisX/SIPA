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
            else if ($fila['rol'] == 'admin_practicayconv'){
                $menu = file_get_contents("../vista/html/admin_practicayconv.html");
            }
            else if ($fila['rol'] == 'estudiante'){
                $menu = file_get_contents("../vista/html/estudiante.html");
            }
            else if ($fila['rol'] == 'docente'){
                $menu = file_get_contents("../vista/html/docente.html");
            }
            else if ($fila['rol'] == 'pers_empresarial'){
                $menu = file_get_contents("../vista/html/pers_empresarial.html");
            }
            echo json_encode($menu);
            //echo json_encode(['nombre'=>$fila['nombre'], 'ok'=>true]);
        }else{
            echo json_encode(["rs"=>$rs]);
        }
    }

    function add($argumentos) {
        extract($argumentos);
        UtilConexion::$pdo->exec("INSERT INTO usuario VALUES ('$id','$nombre','$apellido','$telefono','$cuenta','$contrasena','$rol')");
//        
        /*$sql = "WITH funcionario as (
                   INSERT INTO usuario(id, nombre, apellido, telefono, cuenta, contrasena,rol)
                      VALUES ('$id', '$nombre', '$apellido','$telefono', '$cuenta','$contrasena','$rol') RETURNING id
                ) INSERT INTO docentes(cod_docente, usuario_id, practica_id_practica) VALUES ((SELECT id FROM funcionario), '$usuario_id', $practica_id_practica);";
        UtilConexion::$pdo->exec($sql);*/
        
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
