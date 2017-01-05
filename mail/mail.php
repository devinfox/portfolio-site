<?php
  header('Content-type: application/json');

  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-type: text/html; charset=iso-8859-1';
  $headers[] = 'From: Contact Form <SENDER_EMAIL_ADDRESS>';
  $myEmail = "DESTINATION_EMAIL_ADDRESS";
  $subject = "Message from " . $_POST['name'];
  $message = '<html>
                <head>
                  <title>New email!</title>
                </head>
                <body>
                  <p>The following person contacted through your website form:</p>
                  <ul>
                    <li>Name: ' . $_POST['name'] . '</li>
                    <li>Email: ' . $_POST['email'] . '</li>
                  </ul>
                  <hr>
                  <p>' . $_POST['body'] . '</p>
                  <p><b>REMEMBER:</b> this is an automated message! Do <b>not</b> ' .
                  'reply directly to this message.<br>' .
                  'Instead, write an email to ' . $_POST['email'] . '.</p>
                </body>
              </html>';
  if (mail($myEmail, $subject, $message ,implode("\r\n", $headers))) {
    $response = array('success' => true);
  } else {
    $response = array('success' => false);
  }
  echo json_encode($response);
?>