<?php 
$_POST = json_decode(file_get_contents('php://input'), true); // В Php Коді отримати JSON данні і з ними працювати
echo var_dump($_POST);