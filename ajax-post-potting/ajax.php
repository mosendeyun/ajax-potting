<?php
    // echo "hollow word";
    $arr=array("msg"=>"200","data" => array("username" => "xiaolan","age" => 18,"color"=>"red"));

    echo json_encode($arr);//关联数组转化为json字符串

?>