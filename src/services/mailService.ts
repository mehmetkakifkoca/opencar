export interface MailPayload {
  type: 'termin' | 'werkstatt_kontakt' | 'autohandel_kontakt' | 'b2b_kontakt' | 'allgemein';
  name: string;
  email: string;
  phone: string;
  message?: string;
  
  // Specific to Termin
  service?: string;
  serviceLabel?: string;
  date?: string;
  time?: string;
  carMarke?: string;
  carModell?: string;
  carBaujahr?: string;
  carKennzeichen?: string;
  
  // Specific to Werkstatt Kontakt
  company?: string;
  car?: string;
  
  // Specific to Autohandel
  carInterest?: string;
  inquiryType?: string;
  inquiryTypeLabel?: string;
  
  // Specific to B2B
  companyName?: string;
  businessType?: string;
  businessTypeLabel?: string;
  
  [key: string]: any;
}

export async function sendMail(payload: MailPayload): Promise<{ success: boolean; message?: string }> {
  // Uses custom API endpoint if configured in .env (e.g. https://opencarbox.co.at/api/send-mail.php)
  // or falls back to current domain's /api/send-mail.php
  const apiUrl = import.meta.env.VITE_MAIL_API_URL || '/api/send-mail.php';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const errorMsg = data?.message || `Fehler beim Senden (${response.status})`;
      return { success: false, message: errorMsg };
    }

    return { 
      success: true, 
      message: data?.message || 'Ihre Nachricht wurde erfolgreich gesendet.' 
    };
  } catch (error: any) {
    console.error('E-Mail Versandfehler:', error);
    return { 
      success: false, 
      message: error?.message || 'Verbindungsfehler beim E-Mail-Server.' 
    };
  }
}
