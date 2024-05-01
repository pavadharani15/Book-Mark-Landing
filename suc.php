// process_form.php

<?php
// Retrieve form data
$siteName = $_POST['siteName'];
$siteUrl = $_POST['siteUrl'];

// You can perform validation or database operations here
// For now, we'll just store it in session and redirect to display page

session_start();
$_SESSION['siteName'] = $siteName;
$_SESSION['siteUrl'] = $siteUrl;

echo "success"; // Send success response to AJAX
?>
