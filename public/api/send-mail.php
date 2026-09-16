<?php
/**
 * OpenCarBox - PHP Mail Handler
 * Empfängt Formulardaten von der React-Webseite und versendet E-Mails an office@opencarbox.co.at
 */

// 1. CORS-Header (Erlaubt Anfragen von der React-Webseite egal auf welcher Domain/Vercel)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// 2. Preflight-Check für OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 3. Nur POST-Anfragen erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Nur POST-Anfragen sind erlaubt."]);
    exit;
}

// 4. Daten einlesen (JSON oder POST)
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!$data) {
    $data = $_POST;
}

if (empty($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Keine Formulardaten empfangen."]);
    exit;
}

// 5. Hilfsfunktion zur Bereinigung
function sanitize($input) {
    if (is_array($input)) return '';
    return htmlspecialchars(trim((string)$input), ENT_QUOTES, 'UTF-8');
}

// 6. Konfiguration
$empfaenger = "office@opencarbox.co.at"; // Zieladresse für alle Anfragen
$type = sanitize($data['type'] ?? 'allgemein');
$name = sanitize($data['name'] ?? 'Unbekannt');
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = sanitize($data['phone'] ?? '');
$message = sanitize($data['message'] ?? '');

// Pflichtfelder prüfen
if (!$name || !$phone || !$email) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Bitte Name, Telefonnummer und eine gültige E-Mail-Adresse angeben."]);
    exit;
}

// 7. Betreff und Details je nach Formulartyp erstellen
$titel = "Neue Anfrage über opencarbox.co.at";
$detailsRows = "";

switch ($type) {
    case 'termin':
        $service = sanitize($data['serviceLabel'] ?? $data['service'] ?? 'Serviceanfrage');
        $date = sanitize($data['date'] ?? 'Nicht angegeben');
        $time = sanitize($data['time'] ?? 'Nicht angegeben');
        $carMarke = sanitize($data['carMarke'] ?? '');
        $carModell = sanitize($data['carModell'] ?? '');
        $carBaujahr = sanitize($data['carBaujahr'] ?? '');
        $carKennzeichen = sanitize($data['carKennzeichen'] ?? '');

        $fahrzeugInfo = trim("$carMarke $carModell");
        if ($carBaujahr) $fahrzeugInfo .= " (Bj. $carBaujahr)";
        if ($carKennzeichen) $fahrzeugInfo .= " [Kennzeichen: $carKennzeichen]";
        if (!$fahrzeugInfo) $fahrzeugInfo = "Nicht angegeben";

        $betreff = "📅 [Terminanfrage] $service von $name";
        $titel = "Neue Online-Terminbuchung (Werkstatt)";

        $detailsRows = "
            <tr><td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; width: 160px; color: #555;'>Leistung:</td><td style='padding: 10px 14px; border-bottom: 1px solid #eee; color: #111; font-weight: bold;'>$service</td></tr>
            <tr><td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;'>Wunschtermin:</td><td style='padding: 10px 14px; border-bottom: 1px solid #eee; color: #d97706; font-weight: bold;'>$date um $time Uhr</td></tr>
            <tr><td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;'>Fahrzeug:</td><td style='padding: 10px 14px; border-bottom: 1px solid #eee; color: #111;'>$fahrzeugInfo</td></tr>
        ";
        break;

    case 'werkstatt_kontakt':
        $service = sanitize($data['serviceLabel'] ?? $data['service'] ?? 'Allgemeine Anfrage');
        $company = sanitize($data['company'] ?? '');
        $car = sanitize($data['car'] ?? '');

        $betreff = "🔧 [Werkstatt Kontakt] Anfrage von $name";
        $titel = "Neue Werkstatt-Kontaktanfrage";

        $detailsRows = "
            <tr><td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; width: 160px; color: #555;'>Bereich / Service:</td><td style='padding: 10px 14px; border-bottom: 1px solid #eee; color: #111; font-weight: bold;'>$service</td></tr>
        ";
        if ($company) {
            $detailsRows .= "<tr><td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;'>Firma:</td><td style='padding: 10px 14px; border-bottom: 1px solid #eee; color: #111;'>$company</td></tr>";
        }
        if ($car) {
            $detailsRows .= "<tr><td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;'>Fahrzeug:</td><td style='padding: 10px 14px; border-bottom: 1px solid #eee; color: #111;'>$car</td></tr>";
        }
        break;

    case 'autohandel_kontakt':
        $carInterest = sanitize($data['carInterest'] ?? 'Allgemeines Interesse');
        $inquiryType = sanitize($data['inquiryTypeLabel'] ?? $data['inquiryType'] ?? 'Besichtigung / Anfrage');

        $betreff = "🚗 [Autohandel] $inquiryType für $carInterest von $name";
        $titel = "Neue Autohandel-Anfrage";

        $detailsRows = "
            <tr><td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; width: 160px; color: #555;'>Art der Anfrage:</td><td style='padding: 10px 14px; border-bottom: 1px solid #eee; color: #111; font-weight: bold;'>$inquiryType</td></tr>
            <tr><td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;'>Interesse an:</td><td style='padding: 10px 14px; border-bottom: 1px solid #eee; color: #d97706; font-weight: bold;'>$carInterest</td></tr>
        ";
        break;

    case 'b2b_kontakt':
        $companyName = sanitize($data['companyName'] ?? $data['company'] ?? 'Unbekannt');
        $businessType = sanitize($data['businessTypeLabel'] ?? $data['businessType'] ?? 'Werkstatt / Händler');

        $betreff = "💼 [B2B Kooperation] Anfrage von $companyName ($name)";
        $titel = "Neue B2B-Geschäftskunden-Anfrage";

        $detailsRows = "
            <tr><td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; width: 160px; color: #555;'>Firmenname:</td><td style='padding: 10px 14px; border-bottom: 1px solid #eee; color: #111; font-weight: bold;'>$companyName</td></tr>
            <tr><td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;'>Unternehmensart:</td><td style='padding: 10px 14px; border-bottom: 1px solid #eee; color: #111;'>$businessType</td></tr>
        ";
        break;

    default:
        $betreff = "📩 [Webseite Kontakt] Anfrage von $name";
        $titel = "Neue Anfrage über die Webseite";
        break;
}

// 8. Schöne HTML-E-Mail formatieren
$jetzt = date('d.m.Y H:i');
$nachrichtHtml = nl2br($message ?: 'Keine zusätzliche Nachricht angegeben.');

$htmlBody = "
<!DOCTYPE html>
<html lang='de'>
<head>
  <meta charset='UTF-8'>
  <title>$titel</title>
</head>
<body style='margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color: #2d3748;'>
  <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='background-color: #f4f5f7; padding: 30px 15px;'>
    <tr>
      <td align='center'>
        <table role='presentation' width='600' cellspacing='0' cellpadding='0' style='background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; max-width: 600px; width: 100%;'>
          
          <!-- Header -->
          <tr>
            <td style='background-color: #0d1117; padding: 25px 30px; text-align: left; border-bottom: 3px solid #FFA800;'>
              <h1 style='margin: 0; color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: -0.02em;'>
                <span style='color: #FFA800;'>OpenCar</span>Box
              </h1>
              <p style='margin: 4px 0 0 0; color: #94a3b8; font-size: 13px;'>$titel</p>
            </td>
          </tr>

          <!-- Hauptinhalt -->
          <tr>
            <td style='padding: 30px;'>
              <h2 style='margin: 0 0 16px 0; font-size: 18px; color: #0f172a;'>Kontaktdaten des Kunden</h2>
              
              <!-- Kundendaten-Tabelle -->
              <table width='100%' cellspacing='0' cellpadding='0' style='border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; margin-bottom: 24px;'>
                <tr>
                  <td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; width: 160px; color: #555; background: #fafafa;'>Name:</td>
                  <td style='padding: 10px 14px; border-bottom: 1px solid #eee; color: #111; font-weight: bold; background: #fafafa;'>$name</td>
                </tr>
                <tr>
                  <td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;'>Telefon:</td>
                  <td style='padding: 10px 14px; border-bottom: 1px solid #eee;'>
                    <a href='tel:$phone' style='color: #d97706; text-decoration: none; font-weight: bold;'>$phone</a>
                  </td>
                </tr>
                <tr>
                  <td style='padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;'>E-Mail:</td>
                  <td style='padding: 10px 14px; border-bottom: 1px solid #eee;'>
                    <a href='mailto:$email' style='color: #2563eb; text-decoration: none;'>$email</a>
                  </td>
                </tr>
                $detailsRows
              </table>

              <!-- Nachricht -->
              <h3 style='margin: 20px 0 8px 0; font-size: 15px; color: #0f172a;'>Nachricht / Notizen:</h3>
              <div style='background-color: #f8fafc; border-left: 4px solid #FFA800; padding: 14px 18px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #334155;'>
                $nachrichtHtml
              </div>

              <!-- Direkt-Antworten Button -->
              <div style='margin-top: 30px; text-align: center;'>
                <a href='mailto:$email?subject=Re: $betreff' style='display: inline-block; background-color: #FFA800; color: #000000; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 14px;'>
                  Direkt per E-Mail antworten
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style='background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 30px; font-size: 12px; color: #64748b; text-align: center;'>
              Eingegangen am $jetzt Uhr über das Webseitenformular von <a href='https://opencarbox.co.at' style='color: #64748b;'>opencarbox.co.at</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
";

// 9. E-Mail Header zusammenstellen
$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/html; charset=UTF-8";
$headers[] = "From: OpenCarBox Web-System <noreply@opencarbox.co.at>";
$headers[] = "Reply-To: $name <$email>";
$headers[] = "X-Mailer: PHP/" . phpversion();

// 10. E-Mail versenden
$erfolg = @mail($empfaenger, $betreff, $htmlBody, implode("\r\n", $headers));

if ($erfolg) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt."
    ]);
} else {
    // Falls mail() auf dem Server fehlschlägt
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Beim Senden der E-Mail ist ein Serverfehler aufgetreten. Bitte rufen Sie uns direkt an."
    ]);
}
