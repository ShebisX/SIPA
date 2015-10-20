<?php

class UtilReporConvenio extends UtilReportes {

    private static $objWorksheet;

    public function abrirHoja() {
        self::abrirLibro();
        self::$objWorksheet = self::$objPHPExcel->getSheetByName('convenio');

        if (self::$objWorksheet == null) {
            self::crearHoja();
        }

        self::$objWorksheet->setCellValueByColumnAndRow(0, 1, "Id convenio");
        self::$objWorksheet->setCellValueByColumnAndRow(1, 1, "Nombre");
        self::$objWorksheet->setCellValueByColumnAndRow(2, 1, "NIT empresa");
        self::$objWorksheet->setCellValueByColumnAndRow(3, 1, "Fecha inicial");
        self::$objWorksheet->setCellValueByColumnAndRow(4, 1, "Fecha fin");
        self::$objWorksheet->setCellValueByColumnAndRow(5, 1, "Fecha prorroga");

        self::$objWorksheet->setAutoFilter('D1:F1');

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

        self::$objWorksheet->getStyle('A1:F1')->applyFromArray($styleArray);
        self::$objWorksheet->getColumnDimension('A:F')->setAutoSize(true);
        /* self::$objWorksheet->getColumnDimension('B')->setAutoSize(true);
          self::$objWorksheet->getColumnDimension('C')->setAutoSize(true);
          self::$objWorksheet->getColumnDimension('D')->setAutoSize(true);
          self::$objWorksheet->getColumnDimension('E')->setAutoSize(true);
          self::$objWorksheet->calculateColumnWidths(); */

        $indexRow = 2;
        $convenio = new Convenio();
        $array = $convenio->select('')['rows'];
        error_log(print_r(json_encode($array), TRUE));
        $vars = '';
        foreach ($array as $key => $value) {
            foreach ($array[$key]['cell'] as $key2 => $value2) {
                $vars .= '' . $key2 . ' - ' . $value2 . '///';
                self::$objWorksheet->setCellValueByColumnAndRow($key2, $indexRow, $value2);
                //self::$objWorksheet->getCellByColumnAndRow($key2, $indexRow)->getNumberFormat()->setFormatCode(PHPExcel_Style_NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED);
            }
            ++$indexRow;
        }
        error_log(print_r($vars, TRUE));
        self::cerrarLibro();
    }

    private function crearHoja() {
        self::$objWorksheet = self::$objPHPExcel->createSheet();
        self::$objWorksheet->setTitle('convenio');
        self::guardarLibro();
    }

}

?>