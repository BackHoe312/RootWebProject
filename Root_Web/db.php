<?php
    session_start();
    header('Content-Type: text/html; charset=utf-8'); // utf-8 encoding

    // localhost = DB 주소, 계정아이디, DB비밀번호, DB이름
    $db = new mysqli("localhost", "rootWeb", "jynhub2112", "root_board");
    $db->set_charset("utf8");

    function mq($sql) {
        global $db;
        return $db->query($sql);
    }
?>