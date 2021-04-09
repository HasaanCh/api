<?php

$msg = "First line of text\nSecond line of text";

$msg = wordwrap($msg,70);

mail("hamzanazir0@gmail.com","I will haunt you every 5 miuntes",$msg);

$url = 'https://usman-recipes.herokuapp.com/api/recipes/';
$options = array(
    'http' => array(
        'method'  => 'GET',
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

$result=json_decode($result);


foreach($result as $single)
{
    $data = array('title' => 'I will haunt you every 5 miuntes', 'body' => 'I will haunt you every 5 miuntes');
        $urll = 'https://usman-recipes.herokuapp.com/api/recipes/'.$single->_id;
      
        $options = array(
            'http' => array(
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
                'method'  => 'PUT',
                'content' => http_build_query($data)
            )
        );
        $nanu  = stream_context_create($options);
        $rr = file_get_contents($urll, false, $nanu);
}




?>