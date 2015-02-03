<!DOCTYPE html>
<html lang="fr">

<head>
    {{$include 'head/metas'}}
    <title></title>
    {{$include 'head/stylesheets'}}
    {{$include 'head/scripts'}}
</head>

<body class="">

    <div id="before-body">
        {{$include 'before_body'}}
    </div>

    <div id="page">
        <div id="main-header"></div>
        <div id="main-body"></div>
        <div id="main-footer"></div>
    </div>

    <div id="after-body">
        {{$include 'after_body'}}
    </div>

</body>

</html>
