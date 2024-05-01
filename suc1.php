// display_details.php

<?php
session_start();

$siteName = $_SESSION['siteName'];
$siteUrl = $_SESSION['siteUrl'];

// Display the details
echo "<h1>Bookmark Details</h1>";
echo "<p>Site Name: $siteName</p>";
echo "<p>Site URL: $siteUrl</p>";
?>
