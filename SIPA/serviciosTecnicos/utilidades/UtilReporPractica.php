<?php

class UtilReporPractica extends UtilReportes {

    private static $objWorksheet;

    public function abrirHoja() {
        self::abrirLibro();
        self::$objWorksheet = self::$objPHPExcel->getSheetByName('practica');

        if (self::$objWorksheet == null) {
            self::crearHoja();
        }
    }

    private function crearHoja() {
        self::$objWorksheet = self::$objPHPExcel->createSheet();
        self::$objWorksheet->setTitle('practica');
        self::guardarLibro();
    }

}

?>

