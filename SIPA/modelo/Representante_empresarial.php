<?php

class Representante_empresarial {

    function add($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos, 1));

        //UtilConexion::$pdo->exec("INSERT INTO usuario VALUES ('$id','$nombre','$apellido','$telefono','$cuenta','$contrasena','$rol')");
//        
        $sql = "WITH funcionario as (
                   INSERT INTO usuario(cedula, nombre, apellido, telefono,contrasena,rol,correo,direccion)
                      VALUES ('$cedula', '$nombre', '$apellido','$telefono','$contrasena','Representante_empresa','$correo','$direccion') RETURNING cedula
                ) INSERT INTO representante_empresarial (cod_representante,cargo,cedula,empresa) VALUES ('$cod_representante','$cargo',(SELECT cedula FROM funcionario),'$empresa');";
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
        RETURNING cedula ) UPDATE representante_empresarial SET cargo='$cargo'
	WHERE cedula= (SELECT cedula FROM funcionario);";

        error_log($sql);
        UtilConexion::$pdo->exec($sql);
        echo UtilConexion::getEstado();
    }

    function del($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos, 1));
        $sql = "DELETE FROM usuario WHERE cedula='$cedula'"; 
               

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
        $sql = "SELECT usuario.*, cod_representante, cargo,empresa FROM usuario 
                inner join representante_empresarial on usuario.cedula=representante_empresarial.cedula
                $where ORDER BY $sidx $sord LIMIT $rows OFFSET $start";

        //echo($sql);
        foreach (UtilConexion::$pdo->query($sql) as $fila) {
            $respuesta['rows'][] = [
                'cedula' => $fila['cedula'],
                'cell' => [$fila['cedula'], $fila['nombre'], $fila['apellido'], $fila['telefono'], $fila['contrasena'], $fila['correo'], $fila['direccion'], $fila['cod_representante'], $fila['cargo'], $fila['empresa']]
            ];
        }
        // Quite los comentarios para ver el array original y el array codificado en JSON
        // error_log(print_r($respuesta, TRUE));
        // error_log(print_r(json_encode($respuesta), TRUE));
        echo json_encode($respuesta);
    }

}

?>
