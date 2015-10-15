<?php

class UtilReporConvenio extends UtilReportes {

    private static $objWorksheet;

    public function abrirHoja() {
        self::abrirLibro();
        self::$objWorksheet = self::$objPHPExcel->getSheetByName("convenio");

        if (self::$objWorksheet == null) {
            self::crearHoja();
        }
    }

    private function crearHoja() {
        self::$objWorksheet = self::$objPHPExcel->createSheet();
        self::$objWorksheet->setTitle('convenio');
        self::guardarLibro();
    }

}

?>