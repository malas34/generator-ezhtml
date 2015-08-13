<!DOCTYPE html>
<html lang="fr">

<head>
    <title>Page Title</title>
    <meta charset="utf-8" />
    {{$include 'commons/head'}}
    {{$include 'commons/styles'}}
</head>

<body>

    <div class="before-body">
        {{$include 'commons/happy_browser'}}
    </div>

    <div class="other">
        <!-- content -->
        <h1>Page <span>title</span></h1>
        <h2>Page subtitle</h2>
    </div>

    <div class="after-body">
        <!-- scripts -->
        {{$include 'commons/scripts'}}
        {{$livereload 35729}}
    </div>
</body>

</html>
