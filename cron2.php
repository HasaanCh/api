<?php

$url = 'https://usman-recipes.herokuapp.com/api/products/';
$options = array(
    'http' => array(
        // 'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'GET',
        // 'content' => http_build_query($data)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);



    $result=json_decode($result);

    print_r($result);
    foreach($result as $single)
{
    $data = array('name' => 'I will haunt you every 5 miuntes', 'color' => 'I will haunt you every 5 miuntes','department' => 'I will haunt you every 5 miuntes','price' => 'I will haunt you every 5 miuntes','description' => 'I will haunt you every 5 miuntes');
        $urll = 'https://usman-recipes.herokuapp.com/api/products/'.$single->_id;
      
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
if ($result === FALSE) { /* Handle error */ }



?>