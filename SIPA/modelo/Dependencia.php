<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Dependencia {

    function add($argumentos) {
        extract($argumentos);
        UtilConexion::$pdo->exec("INSERT INTO dependencia VALUES ('$id_dependencia','$descripcion','$nombre','$pertenece_dependencia')");
//        otra manera de hacer lo mismo para cuando se necesite conocer el ID último
//        $st = UtilConexion::$pdo->prepare("INSERT INTO departamento(id, nombre) VALUES(?, ?) RETURNING id");
//        $st->execute(array($id, $nombre));
//        $filaEvaluacion = $st->fetch();
//        error_log(print_r($filaEvaluacion,1));
//        error_log($filaEvaluacion['id']);
        echo UtilConexion::getEstado();
    }
    
    function edit($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos,1));
        $sql = "UPDATE dependencia SET descripcion='$descripcion',nombre='$nombre',pertenece_dependencia='$pertenece_dependencia' WHERE  id_dependencia='$id_dependencia'";
        error_log($sql);
        UtilConexion::$pdo->exec($sql);
        echo UtilConexion::getEstado();
    }

     function del($argumentos) {
        extract($argumentos);
        error_log(print_r($argumentos, 1));
        $sql = "DELETE FROM dependecia WHERE id_dependencia= '$id'";
        UtilConexion::$pdo->exec($sql);
        
        error_log($sql);
        
        echo UtilConexion::getEstado();
     }

    function select($argumentos) {
        extract($argumentos);
        $where = UtilConexion::getWhere($argumentos); // Se construye la clausula WHERE
        $count = UtilConexion::$pdo->query("SELECT id_dependencia FROM dependencia $where")->rowCount();
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

        $sql = "SELECT * FROM dependencia $where ORDER BY $sidx $sord LIMIT $rows OFFSET $start";
        foreach (UtilConexion::$pdo->query($sql) as $fila) {
            $respuesta['rows'][] = [
                'id' => $fila['id_dependencia'],
                'cell' => [$fila['id_dependencia'], $fila['descripcion'], $fila['nombre'], $fila['pertenece_dependencia']]
            ];
        }
        // Quite los comentarios para ver el array original y el array codificado en JSON
        // error_log(print_r($respuesta, TRUE));
        // error_log(print_r(json_encode($respuesta), TRUE));
        echo json_encode($respuesta);
    }

}

?>