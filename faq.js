// ======================================================================
// FAQ DATA PARA KAY TUBIBOT (ANG TUBERONG BIBO!)
// DITO LANG MAGDAGDAG NG BAGONG TANONG-SAGOT!
// ======================================================================

const FAQ_NI_SIWADI = [

    // ========== PANGUNGUMUSTA AT USAPAN ==========
    {
        keywords: ["hello", "hi", "hoy", "uy", "oi", "magandang umaga", "magandang hapon", "magandang gabi", "magandang araw", "good morning", "good afternoon", "good evening"],
        answer: "Magandang araw din po! 😊 Ako po si Tubibot (Ang Tuberong Bibo!), ang inyong masipag na AI assistant dito sa SIWADI. Kumusta po ang araw ninyo? May maitutulong po ba ako tungkol sa inyong water bill, application, o iba pang serbisyo? 💧"
    },
    {
        keywords: ["kumusta", "kamusta", "how are you", "okay ka lang"],
        answer: "Okay na okay po ako! Masayang-masaya po akong makatulong sa inyo ngayong araw na ito. Sana po ay nasa mabuti rin kayong kalagayan. Ano pong maitutulong ko? 😊💧"
    },
    {
        keywords: ["sino ka", "ano ka", "what are you", "kilala", "pangalan mo", "name"],
        answer: "Ako po si Tubibot (Ang Tuberong Bibo!), ang opisyal na AI customer service assistant ng SIWADI (Siniloan Water District). Nandito po ako para sumagot sa inyong mga katanungan tungkol sa water billing, application, reconnection, leak reports, at iba pa. Tubig at serbisyo—'yan po ang aking misyon! 💧🤖"
    },
    {
        keywords: ["salamat", "thank you", "thanks", "tenkyu"],
        answer: "Walang anuman po! Masaya po akong makatulong. Kung may iba pa po kayong katanungan, huwag mag-atubiling magtanong. Nandito lang po si Tubibot! 😊💧"
    },
    {
        keywords: ["paalam", "bye", "goodbye", "sige", "wala na", "salamat"],
        answer: "Sige po! Salamat sa pakikipag-usap. Kung may katanungan pa po kayo, huwag mag-atubiling bumalik. Ingat po palagi at magtipid ng tubig! 💧👋"
    },

    // ========== APPLICATION AT REQUIREMENTS ==========
    {
        keywords: ["apply", "application", "new connection", "mag-apply", "bagong connection", "requirements", "requirement", "kailangan", "dalhin"],
        answer: "Para po mag-apply ng bagong water connection, pumunta po sa opisina at magdala ng: (1) Dalawang photocopy ng valid government-issued ID na may original signature. (2) Proof of ownership ng lupa—alinman sa mga sumusunod: Land Title, Tax Declaration of Real Property, OHA, o Notarized Deed of Sale. Kung nakikigamit ng lupa: magdala ng Notarized Authorization na may kalakip na proof of ownership ng may-ari, at photocopy ng government-issued ID ng may-ari. May iba pa po ba kayong katanungan? 😊"
    },

    // ========== BILLING AT PAYMENT ==========
    {
        keywords: ["bayad", "payment", "magbayad", "bill", "landbank", "saan magbayad", "paano magbayad", "gcash", "linkbiz"],
        answer: "Puwede po kayong magbayad sa:<br><br>🏢 <strong>Opisina</strong> — 7AM-6PM, Lunes hanggang Huebes(opisina)<br>📱 <strong>GCash</strong> — <a href='https://siniloansiwadi-max.github.io/waterbill_inquiry_app/services2.html' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>I-click po ito para sa GCash Payment Guide</a><br>🏦 <strong>Landbank LinkBiz</strong> — online payment<br><br>⚠️ <strong>Mahalagang paalala:</strong> Kapag online payment (GCash o LinkBiz), i-send agad ang confirmation sa amin dahil hindi ito real-time—dalawa hanggang tatlong araw bago namin matanggap at ma-update sa system. May iba pa po ba kayong katanungan? 💳"
    },
    
    {
        keywords: ["due date", "deadline", "kailan bayad", "payment due", "putol", "disconnection"],
        answer: "15 araw po mula sa reading date ang due date. Halimbawa: kung na-reading kayo ng July 1, ang due date ay July 16, at ang putol ay July 17 (nakadepende sa araw na may pasok ang opisina). Para makasigurado, i-check din po ang aming Facebook page. May iba pa po ba kayong katanungan? 📅"
    },

    {
        keywords: ["magkano ang bill", "water bill", "magkano bill ko", "alamin ang bill", "check bill", "tingnan ang bill", "balance", "how much", "magkano babayaran", "amount due", "total bill"],
        answer: "Kung nais niyo pong malaman ang inyong water bill, magpunta po kayo dito: <a href='index.html' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>Water Bill Inquiry</a>. Ilagay po ang tamang account number—mahalaga pong alam ninyo ang eksaktong account number ninyo. Kung hindi po kayo sigurado, maaari ninyong gamitin ang <strong>Name Search</strong>, ilagay lamang ang pangalan o apelyido ng nais hanapin. 💧🔍 Mag antay lamang po ng ilang segundo at lalabas ang resulta"
    },

    // ========== RECONNECTION ==========
    {
        keywords: ["reconnection", "reconnect", "kabit", "balik", "naputulan", "reconnection fee", "magkano reconnect"],
        answer: "Ang reconnection fee po ay 200 pesos. Pumunta lang po sa opisina para ma-process ang reconnection. May iba pa po ba kayong katanungan? 🔌"
    },

    // ========== LEAK AT EMERGENCY ==========
    {
        keywords: ["leak", "report", "tulo", "sirain", "mag-report", "emergency", "sira"],
        answer: "Para mag-report ng leak o sirang tubo, tumawag po agad sa (049) 501-6656 o i-message ang aming <a href='https://www.facebook.com/SiniloanWaterDistrict/' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>Facebook page 📘</a>. Ibigay ang eksaktong lokasyon para mabilis na maaksyunan. Maraming salamat po sa pag-report! 🚨"
    },

    // ========== WATER INTERRUPTION ==========
    {
        keywords: ["walang tubig", "bakit wala", "interruption", "no water", "putol tubig", "nawalan"],
        answer: "Maaaring may scheduled interruption o emergency repair sa inyong lugar. I-check po ang aming Facebook page para sa latest advisory. Kung wala pong announcement, tumawag sa (049) 501-6656 para ma-verify. Pasensya na po sa abala. 🙏"
    },
    {
        keywords: ["interruption schedule", "iskedyul", "schedule", "kailan mawawalan", "advisory", "announcement", "update"],
        answer: "Mag-follow po sa aming Facebook page para laging updated sa mga announcements tungkol sa water interruptions. Doon po namin pino-post ang lahat ng schedule at updates. 📢"
    },

    {
        keywords: ["bakit malaki", "bakit tumaas", "laki ng bill", "malaki bill", "taas ng bill", "biglang taas", "sobrang laki", "bakit ganun", "bill ko", "singil", "bakit mataas"],
        answer: "Ang biglaang pagtaas ng bill ay maaaring dahil sa: <br><br>🔧 <strong>Undetected leak</strong> — sirang toilet flush, tubo sa ilalim ng lababo, o outdoor hose. <br>👥 <strong>Dagdag na gumagamit</strong> — bagong miyembro ng pamilya, bisita, swimming pool, o washing machine. <br>📏 <strong>Maling pagbasa ng metro</strong> — human error o hindi nabasang numero. <br><br>💡 <strong>Inirerekomendang gawin:</strong> <br>1. Makipag-ugnayan agad sa opisina para sa <strong>re-reading</strong>. <br>2. Hilingin ang pagkukumpuni ng nasirang linya. <br>3. Ipa-testing ang metro kung kinakailangan. <br>4. Maghain ng reklamo para sa billing adjustment kung nararapat. <br><br>Tumawag po sa (049) 501-6656 para maaksyunan agad. 💧📞"
    },

    // ========== READING ==========
    {
        keywords: ["reading", "meter reading", "kailan reading", "tuwing kailan", "metro", "reading schedule"],
        answer: "May 8-araw pong reading schedule simula sa unang araw ng buwan na may pasok, depende sa inyong lokasyon. <br><br>📅 <a href='https://siniloansiwadi-max.github.io/waterbill_inquiry_app/services.html' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>I-click po ito para makita ang buong Reading Schedule</a>"
    },

    // ========== WATER BILL CALCULATOR ==========
    {
        keywords: ["kwentahin", "konsumo", "compute", "calculation", "calculator", "kalkulahin", "magkano bill", "estimate", "consumption", "tantiya", "paano malaman"],
        answer: "Para po malaman ang inyong konsumo sa tubig, <a href='https://siniloansiwadi-max.github.io/waterbill_inquiry_app/calculator.html' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>i-click po ito para magamit ang aming Water Bill Calculator 🧮💧</a>. Ilagay lang po ang inyong konsumo (cubic meters) at ang klasipikasyon. May iba pa po ba kayong katanungan?"
    },

    // ========== SENIOR CITIZEN ==========
    {
        keywords: ["senior", "discount", "senior citizen", "diskwento", "matanda"],
        answer: "Para po sa senior citizen discount, kailangan ng Senior Citizen ID, at dapat nakapangalan sa ID holder ang account sa SIWADI. Pumunta lang po sa opisina para mag-apply. Tandaan lamang po na 30 cubic pababa lamang po ang maaaring bigyan ng diskwento.👴👵"
    },

    // ========== LIFELINE AT IBA PA ==========
    {
        keywords: ["lifeline", "subsidy", "discount program", "libre", "tulong"],
        answer: "Wala po tayong lifeline subsidy sa kasalukuyan. Pero kung may iba po kayong concern tungkol sa billing, maaari nating pag-usapan. May iba pa po ba kayong katanungan? 🙂"
    },

    // ========== OFFICE INFO ==========
    {
        keywords: ["office", "opisina", "location", "saan", "address", "open", "oras", "punta", "bisitahin"],
        answer: "Ang opisina po ng SIWADI ay bukas mula Lunes hanggang Huebes(opisina), 7:00 AM hanggang 6:00 PM. Matatagpuan po ito sa aming main office. Para sa eksaktong direksyon, tumawag po sa (049) 501-6656. 🏢"
    },

    // ========== CONTACT ==========
    {
        keywords: ["contact", "tawag", "number", "telepono", "phone", "cellphone", "tumawag"],
        answer: "Tumawag po sa (049) 501-6656. Bukas po ang opisina mula Lunes hanggang Huebes(opisina), 7:00 AM hanggang 6:00 PM. Puwede rin po kayong mag-message sa aming <a href='https://www.facebook.com/SiniloanWaterDistrict/' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>Facebook page 📘</a>📞"
    },

    // ========== FACEBOOK AT SOCIAL MEDIA ==========
    {
        keywords: ["facebook", "fb", "social media", "page", "online"],
        answer: "I-like at i-follow po ang aming opisyal na <a href='https://www.facebook.com/SiniloanWaterDistrict/' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>Facebook page 📘</a> para sa mga updates, announcements, at advisories. Doon din po kayo puwedeng mag-message para sa mabilis na tugon. 👍📱"
    }

];

const DEFAULT_ANSWER = "Pasensya na po, hindi ko po masyadong naintindihan ang inyong katanungan. Puwede po bang pakiusapan na mas detalyado ang tanong? Puwede rin po kayong tumawag sa (049) 501-6656 o bumisita sa opisina ng SIWADI, Lunes hanggang Huebes(opisina), 7:00 AM hanggang 6:00 PM. May iba pa po ba kayong maitutulong ko? 😊";
