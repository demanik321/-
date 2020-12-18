<?php
require "header.php";
?>
<main>
<div style="width:100%" id="wraptwo">
<div id="priceTitle">
    <p >Прейскурант</p>
    <div>
        <img id="search" src="img/search.svg">
        <input type="text" id="search-text" placeholder="поиск по таблицам" onkeyup="tableSearch()">
    </div>
</div>
<div>
    <table id="price">
        <img src="img/select.svg" id="select">
        <tr class="header expand">
            <td colspan="2">Мужской зал</td>
        </tr>
<?php
    require_once 'PHPExcel.php';
    $excel = PHPExcel_IOFactory::load('man.xlsx');
    Foreach($excel ->getWorksheetIterator() as $worksheet) {
        $lists[] = $worksheet->toArray();
       }
       foreach($lists as $list){
        foreach($list as $row){
          echo '<tr>';
          foreach($row as $col){
            echo '<td>'.$col.'</td>';
        }
        echo '</tr>';
        }
        echo '</table>';
       }
?>
<table id="pricetwo">
<img src="img/select.svg" id="selecttwo">
    <tr class="headertwo expand">
        <td colspan="2">Женский зал</td>
    </tr>
<?php
    $two = PHPExcel_IOFactory::load('woman.xlsx');
    Foreach($two ->getWorksheetIterator() as $worksheet) {
        $name[] = $worksheet->toArray();
       }
       foreach($name as $list){
        foreach($list as $row){
          echo '<tr>';
          foreach($row as $col){
            echo '<td>'.$col.'</td>';
        }
        echo '</tr>';
        }
        echo '</table>';
       }
?>
</main>
<?php
require "footer.php";
?>