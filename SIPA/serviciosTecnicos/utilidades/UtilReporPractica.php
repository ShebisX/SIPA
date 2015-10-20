<?php

class UtilReporPractica extends UtilReportes {

    private static $objWorksheet;

    public function abrirHoja() {
        self::abrirLibro();
        self::$objWorksheet = self::$objPHPExcel->getSheetByName('practica');

        if (self::$objWorksheet == null) {
            self::crearHoja();
        }

        self::$objWorksheet->setCellValueByColumnAndRow(0, 1, "Id Práctica")
                ->setCellValueByColumnAndRow(1, 1, "Fecha inicio")
                ->setCellValueByColumnAndRow(2, 1, "Fecha fin")
                ->setCellValueByColumnAndRow(3, 1, "Salario")
                ->setCellValueByColumnAndRow(4, 1, "Id convenio");

        self::$objWorksheet->setAutoFilter('B1:D1');

        $styleArray = array(
            'font' => array(
                'bold' => true,
            ),
            'alignment' => array(
                'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_LEFT,
            ),
            'borders' => array(
                'top' => array(
                    'style' => PHPExcel_Style_Border::BORDER_THIN,
                ),
            )
        );

        self::$objWorksheet->getStyle('A1:E1')->applyFromArray($styleArray);
        self::$objWorksheet->getColumnDimension('A:E')->setAutoSize(true);
        /* self::$objWorksheet->getColumnDimension('B')->setAutoSize(true);
          self::$objWorksheet->getColumnDimension('C')->setAutoSize(true);
          self::$objWorksheet->getColumnDimension('D')->setAutoSize(true);
          self::$objWorksheet->getColumnDimension('E')->setAutoSize(true);
          self::$objWorksheet->calculateColumnWidths(); */

        $indexRow = 2;
        $practica = new Practica();
        $array = $practica->select('')['rows'];

        foreach ($array as $key => $value) {
            foreach ($array[$key]['cell'] as $key2 => $value2) {
                self::$objWorksheet->setCellValueByColumnAndRow($key2, $indexRow, $value2);
                //self::$objWorksheet->getCellByColumnAndRow($key2, $indexRow)->getNumberFormat()->setFormatCode(PHPExcel_Style_NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED);
            }
            ++$indexRow;
        }
        //error_log(print_r($vars, TRUE));
        self::cerrarLibro();
    }

    private function crearHoja() {
        self::$objWorksheet = self::$objPHPExcel->createSheet();
        self::$objWorksheet->setTitle('practica');
        self::guardarLibro();
    }

}
?>

