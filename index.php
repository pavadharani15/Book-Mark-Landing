<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Website Bookmarker</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

</head>

<body onload="fetchBookmarks()">

    <div class="container">
        <div class="header clearfix">
            <nav>

            </nav>
            <h3 class="text-muted">Website Bookmarker</h3>
        </div>

        <div class="jumbotron">
            <h2>Bookmark Your Favorite Websites</h2>
            <form id="myForm">
                <div class="form-group">
                    <label>Site Name</label>
                    <input type="text" class="form-control" id="siteName" placeholder="Website Name">
                </div>
                <div class="form-group">
                    <label>Site URL</label>
                    <input type="text" class="form-control" id="siteUrl" placeholder=" Website URL">
                    <br>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

        <div class="row marketing">
            <div class="col-lg-12">
                <div id="bookmarksResults"></div>
            </div>
        </div>

    </div>
    <!-- /container -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js "></script>
    <script src="js/main.js"></script>
</body>

</html>