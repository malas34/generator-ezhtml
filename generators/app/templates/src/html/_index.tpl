<!DOCTYPE html>
<html lang="fr">

<head>  
    <title></title>
    {{$include 'body_head'}}
</head>

<body class="">

    <div id="before-body">
        {{$include 'body_before'}}
    </div>

    <div id="page">
        <div id="main-header"></div>
        <div id="main-body"></div>
        <div id="main-footer"></div>
    </div>

    <div id="after-body">
        {{$include 'body_after'}}
        {{$livereload 1337}}
    </div>
 
</body> 

</html>
