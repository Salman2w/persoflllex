<?php
// send-mail.php
header("Access-Control-Allow-Origin: *");

// --- KONFIGURATION ---
// 1. WO SOLL DIE BEWERBUNG HIN?
$empfaenger = "info@persoflex-gmbh.de"; 

// 2. WER IST DER ABSENDER? (Muss im KAS existieren!)
$absender_adresse = "web-bewerbung@persoflex-gmbh.de"; 

$betreff = "Neue Initiativbewerbung über Webseite";
// ---------------------

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Daten sammeln
    $firstName = $_POST['firstName'] ?? '';
    $lastName = $_POST['lastName'] ?? '';
    $email = $_POST['email'] ?? ''; // Die E-Mail des Bewerbers
    $phone = $_POST['phone'] ?? '';
    $field = $_POST['field'] ?? '';
    $availability = $_POST['availability'] ?? '';
    $message = $_POST['message'] ?? '';

    // Text-Teil der E-Mail
    $text_body = "Neue Bewerbung eingegangen:\n\n" .
                 "Name: $firstName $lastName\n" .
                 "Email (Bewerber): $email\n" .
                 "Telefon: $phone\n" .
                 "Bereich: $field\n" .
                 "Verfügbar ab: $availability\n\n" .
                 "Nachricht:\n$message\n";

    // Boundary für Anhänge
    $boundary = md5(time());
    
    // Header bauen
    $headers = "From: $absender_adresse\r\n";
    $headers .= "Reply-To: $email\r\n"; // Damit du direkt auf "Antworten" klicken kannst
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    // Body zusammenbauen
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $body .= $text_body . "\r\n";

    // Datei verarbeiten
    if (isset($_FILES['attachment']) && $_FILES['attachment']['error'] === UPLOAD_ERR_OK) {
        $fileName = $_FILES['attachment']['name'];
        $fileType = $_FILES['attachment']['type'];
        $fileTmpName = $_FILES['attachment']['tmp_name'];
        
        $fileContent = chunk_split(base64_encode(file_get_contents($fileTmpName)));
        
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= $fileContent . "\r\n";
    }

    $body .= "--$boundary--";

    // SENDEN MIT "-f" PARAMETER (WICHTIG FÜR ALL-INKL!)
    // Das "-f" sorgt dafür, dass der Server den Absender technisch korrekt setzt.
    if (mail($empfaenger, $betreff, $body, $headers, "-f" . $absender_adresse)) {
        http_response_code(200);
        echo "Erfolg";
    } else {
        http_response_code(500);
        echo "Fehler beim Senden";
    }

} else {
    http_response_code(405);
}
?>