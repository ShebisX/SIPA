<?php

class Director_programa {

    function add($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos, 1));

        //UtilConexion::$pdo->exec("INSERT INTO usuario VALUES ('$id','$nombre','$apellido','$telefono','$cuenta','$contrasena','$rol')");
//        
        $sql = "WITH funcionario as (
                   INSERT INTO usuario(cedula, nombre, apellido, telefono,contrasena,rol,correo,direccion)
                      VALUES ('$cedula', '$nombre', '$apellido','$telefono','$contrasena','Director_programa','$correo','$direccion') RETURNING cedula
                ) INSERT INTO director_programa (cod_director,programa,cedula) VALUES ('$cod_director','$programa',(SELECT cedula FROM funcionario));";
        error_log($sql);
        UtilConexion::$pdo->exec($sql);

        echo UtilConexion::getEstado();
    }

    function edit($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos, 1));
        $sql = "WITH funcionario as(
	UPDATE usuario SET nombre='$nombre',apellido='$apellido', telefono='$telefono',contrasena='$contrasena',correo='$correo',direccion='$direccion'
	WHERE cedula='$cedula'
        RETURNING cedula ) UPDATE director_programa SET programa='$programa'
	WHERE cedula= (SELECT cedula FROM funcionario);";

        error_log($sql);
        UtilConexion::$pdo->exec($sql);
        echo UtilConexion::getEstado();
    }
    function comentarios($args) {
        extract($args);
        session_start();
        $user = $_SESSION['user'];

        $sql = "select c.comentario,u1.nombre estudiante,u1.apellido est_apellido,u2.nombre docente,u2.apellido doc_apellido from comentarios c, usuario u1,docente d,usuario u2,estudiante e,practica p
                where (e.cedula =u1.cedula and d.cedula =u2.cedula) and (p.estudiante = e.codigo and p.docente =d.cod_docente) and (p.codigo = c.practica_fk);";
        if ($rs = UtilConexion::$pdo->query($sql)) {
            $respuesta = '';
            $cont = 0;
            foreach ($rs as $row) {
                $respuesta .= '<div><h3>Comentario ' . ++$cont . '</h3><p>' . $row['comentario'] . '</p><h5>' . $row['estudiante'] . ' ' . $row['est_apellido'] . '</h5><h5>' . $row['docente'] . ' ' . $row['doc_apellido'] . '</h5></div><br>';
                //$respuesta[ucfirst(strtolower($key))] = ucfirst(strtolower($value));
            }
            echo json_encode($respuesta);
        } else
            echo UtilConexion::getEstado();
    }


    function del($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos, 1));
        $sql = "DELETE FROM usuario WHERE cedula='$id';";


        error_log($sql);
        UtilConexion::$pdo->exec($sql);
        echo UtilConexion::getEstado();
    }

    function select($argumentos) {
        extract($argumentos);
        $where = UtilConexion::getWhere($argumentos); // Se construye la clausula WHERE
        $count = UtilConexion::$pdo->query("SELECT cedula FROM usuario $where")->rowCount();
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

        //$sql = "SELECT * FROM usuario $where ORDER BY $sidx $sord LIMIT $rows OFFSET $start";
        $sql ="SELECT usuario.*, cod_director, programa FROM usuario 
                inner join director_programa on usuario.cedula=director_programa.cedula
                $where ORDER BY $sidx $sord LIMIT $rows OFFSET $start";

        //echo($sql);
        foreach (UtilConexion::$pdo->query($sql) as $fila) {
            $respuesta['rows'][] = [
                'id' => $fila['cedula'],
                'cell' => [$fila['cedula'],$fila['nombre'], $fila['apellido'], $fila['telefono'], $fila['contrasena'], $fila['correo'], $fila['direccion'], $fila['cod_director'], $fila['programa']]
            ];
        }
        // Quite los comentarios para ver el array original y el array codificado en JSON
        // error_log(print_r($respuesta, TRUE));
        // error_log(print_r(json_encode($respuesta), TRUE));
        echo json_encode($respuesta);
    }

}

?>
