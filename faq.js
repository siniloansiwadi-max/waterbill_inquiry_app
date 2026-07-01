// ======================================================================
// FAQ DATA PARA KAY TUBIBOT (ANG TUBERONG BIBO!)
// DITO LANG MAGDAGDAG NG BAGONG TANONG-SAGOT!
// ======================================================================

const FAQ_NI_SIWADI = [

    // ========== PANGUNGUMUSTA AT USAPAN ==========
    {
        keywords: ["hello", "hi", "hoy", "uy", "oi", "magandang umaga", "magandang hapon", "magandang gabi", "magandang araw", "good morning", "good afternoon", "good evening"],
        answer: "Magandang araw po! 😊 Ako po si Tubibot (Ang Tuberong Bibo!), ang inyong masipag na AI assistant dito sa SIWADI. Kumusta po ang araw ninyo? May maitutulong po ba ako tungkol sa inyong water bill, application, o iba pang serbisyo? 💧"
    },

    {
        keywords: ["kumusta", "kamusta", "how are you", "okay ka lang"],
        answer: "Okay na okay po ako! Masayang-masaya po akong makatulong sa inyo ngayong araw na ito. Sana po ay nasa mabuti rin kayong kalagayan. Ano pong maitutulong ko? 😊💧"
    },

    {
        keywords: ["sino ka", "ano ka", "what are you", "kilala"],
        answer: "Ako po si Tubibot (Ang Tuberong Bibo!), ang opisyal na AI customer service assistant ng SIWADI (Siniloan Water District). Nandito po ako para sumagot sa inyong mga katanungan tungkol sa water billing, application, reconnection, leak reports, at iba pa. Tubig at serbisyo—'yan po ang aking misyon! 💧🤖"
    },

    {
        keywords: ["ano ang siwadi", "siwadi", "what is siwadi", "tungkol sa siwadi", "about siwadi", "water district", "ano ito", "sino kayo", "organization"],
        answer: "Ang <strong>SIWADI</strong> o <strong>Siniloan Water District</strong> ay isang <strong>Government-Owned and Controlled Corporation (GOCC)</strong> na nagbibigay ng serbisyong tubig sa bayan ng Siniloan at Famy,  Laguna. 🏢💧<br><br>📍 <strong>Lokasyon:</strong> P. Burgos St., Siniloan, Laguna<br>📞 <strong>Telepono:</strong> (049) 501-6656<br>🕗 <strong>Oras ng Opisina:</strong> Lunes hanggang Huebes, 7:00 AM - 6:00 PM<br><br>Ang aming misyon ay maghatid ng <strong>Serbisyong Tapat, Serbisyong Sapat</strong> sa bawat konsyumer. Kami po ay naglilingkod upang matiyak na may sapat at malinis na tubig ang bawat tahanan. May iba pa po ba kayong katanungan? 😊💧"
    },

    {
        keywords: ["salamat", "thank you", "thanks", "tenkyu"],
        answer: "Walang anuman po! Masaya po akong makatulong. Kung may iba pa po kayong katanungan, huwag mag-atubiling magtanong. Nandito lang po si Tubibot! 😊💧"
    },

    {
        keywords: ["paalam", "bye", "goodbye", "sige", "wala na", "salamat"],
        answer: "Sige po! Salamat sa pakikipag-usap. Kung may katanungan pa po kayo, huwag mag-atubiling bumalik. Ingat po palagi at magtipid ng tubig! 💧👋"
    },

    {
        keywords: ["bukas ba", "bukas po ba", "open ba", "bukas ngayon", "may pasok", "office hours", "oras ng opisina", "bukas pa ba", "sarado ba", "bukas ba opisina", "bukas po ba kayo"],
        answer: "Ang aming opisina po ay bukas mula <strong>Lunes hanggang Huwebes, 7:00 AM hanggang 6:00 PM</strong>. 🏢⏰<br><br>Para naman po sa mga araw na walang pasok (Biyernes, Sabado, Linggo, at holidays), mayroon pong <strong>skeletal force</strong> na naka-duty para sa mga emergency repairs at maintenance. 💧🔧<br><br>May iba pa po ba kayong katanungan? 😊"
    },

    // ========== APPLICATION AT REQUIREMENTS ==========
    {
        keywords: ["Magkano po ang pakabit", "Paano po magpakabit"],
        answer: "Reconnection po Ba? or New Connection?"
    },

    {
        keywords: ["apply", "application", "new connection", "mag-apply", "bagong connection", "requirements", "requirement", "kailangan", "dalhin"],
        answer: "Para po mag-apply ng bagong water connection, pumunta po sa opisina at magdala ng: (1) Dalawang photocopy ng valid government-issued ID na may original signature. (2) Proof of ownership ng lupa—alinman sa mga sumusunod: Land Title, Tax Declaration of Real Property, OHA, o Notarized Deed of Sale. Kung nakikigamit ng lupa: magdala ng Notarized Authorization na may kalakip na proof of ownership ng may-ari, at photocopy ng government-issued ID ng may-ari. May paunang bayad na anim na libong piso(6000), at ang magiging balanse at maaaring bayaran ng hanggang anim na buwan 😊"
    },

    {
        keywords: ["online application", "online apply", "apply online", "may online ba", "google form", "form", "online registration", "mag-apply online", "paano mag-apply online"],
        answer: "Opo, mayroon po tayong <strong>Online Application</strong>! 📱💻<br><br>📋 <a href='https://docs.google.com/forms/d/e/1FAIpQLSfSohwI-ApoA9RCKmuyycSnauCCvwsAxziUCuX4qAr44Jd9SA/viewform' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>I-click po ito para sa Online Application Form</a><br><br>Puwede po kayong mag-apply kahit nasa bahay lang—hindi na kailangang pumunta ng opisina. Punan lang po ang Google Form at kami na ang bahala sa susunod na hakbang. May iba pa po ba kayong katanungan? 😊💧"
    },

    {
        keywords: ["change", "change of name", "name", "palit ng pangalan", "transfer"],
        answer: "Para po mag-apply ng <strong>Change of Name</strong>, kailangan lamang po ang mga sumusunod:<br><br>📋 <strong>1. Nabiling ari-arian mula sa dating may-ari:</strong><br>• Katibayan ng bilihan<br>• Notaryadong Authorization mula sa dating may-ari<br><br>💀 <strong>2. Namayapang asawa:</strong><br>• Death Certificate<br><br>🕊️ <strong>3. Namayapang kamag-anak o magulang:</strong><br>• Notaryadong Authorization mula sa mga naiwan<br><br>📄 <strong>Kalakip ng lahat ng ito:</strong><br>• Dalawang photocopy ng valid government-issued ID na may original signature (mula sa aplikante at dating may-ari)<br><br>May iba pa po ba kayong katanungan? 😊"
    },

    {
        keywords: ["transfer", "transfer of location", "lipat", "maglipat", "ilipat", "lipat ng metro", "relocation"],
        answer: "Para po sa <strong>Transfer of Location</strong>, narito ang mga kailangan:<br><br>📋 <strong>1. Dokumento ng pagmamay-ari ng paglilipatan:</strong><br>• Patunay na pag-aari nila ang lupang paglilipatan<br>• Kung HINDI nila pag-aari: Notaryadong Authorization mula sa may-ari ng lupa<br><br>🔍 <strong>2. Inspeksyon:</strong><br>• Pagkatapos maitala ang mga dokumento, iinspeksyunin ng aming inspector ang lugar upang malaman kung saan magandang ilagay ang metro<br><br>💰 <strong>3. Mga Bayarin:</strong><br>• Paunang bayad para sa materyales: <strong>₱2,000</strong><br>• Transfer fee: <strong>₱125</strong><br><br>Pumunta lamang po sa opisina para ma-process ang inyong transfer of location. May iba pa po ba kayong katanungan? 🏠💧"
    },

    {
        keywords: ["downpayment", "down payment", "6000", "anim na libo", "deposito", "deposit", "paunang bayad", "advance", "bakit 6000", "para saan 6000"],
        answer: "Ang <strong>₱6,000 downpayment</strong> ay paunang bayad para sa kabuuang halaga ng new connection—gaya ng metro at iba pang kagamitan.<br><br>💰 <strong>Halimbawa 1 — Mas mataas ang total:</strong><br>Kung ang kabuuang halaga pagkatapos makabitan ay umabot ng <strong>₱10,000</strong>, ibabawas ang ₱6,000 deposito kaya ang matitirang bayarin ay <strong>₱4,000</strong> na maaaring bayaran sa loob ng <strong>anim na buwan</strong>.<br><br>💵 <strong>Halimbawa 2 — Mas mababa ang total:</strong><br>Kung ang kabuuang halaga ay <strong>₱5,000</strong> lamang, mayroon kayong <strong>₱1,000 sukli</strong> na magsisilbing advance payment sa inyong water bill.<br><br>⚠️ <strong>Mahalagang Paalala:</strong><br>Kung HINDI nabayaran ang balanse sa itinakdang due date, maaari pa rin kayong <strong>maputulan</strong> kahit na bayad ang inyong water bill.<br><br>Sana po ay inyong naunawaan. May iba pa po ba kayong katanungan? 😊💧"
    },

    {
        keywords: ["customer deposit", "customers deposit", "320", "400", "80"],
        answer: "Ang <strong>Customer's Deposit</strong> ay ang halagang napagkasunduan na inyong babayaran kasama sa new connection. Ito ay katumbas ng <strong>dalawang buwang minimum na singil</strong> na nagkakahalaga ng <strong>₱400</strong>.<br><br>🆕 <strong>Para sa bagong koneksyon:</strong><br>• Kasama ito sa babayaran bilang bahagi ng new connection<br><br>🔄 <strong>Para sa lumang konto na sinisingilan ng customer's deposit:</strong><br>• Ito ang halagang kailangan upang ma-update ang inyong customer's deposit<br><br>📊 <strong>Halimbawa:</strong><br>Kung ang inyong natitirang customer's deposit ay <strong>₱320</strong>, kailangan ng karagdagang <strong>₱80</strong> bukod pa sa <strong>₱200 reconnection fee</strong>. Kaya: ₱320 + ₱80 = <strong>₱400</strong>.<br><br>💡 <strong>Sa madaling salita:</strong> Kailangang updated ang customer's deposit. Sa susunod na kayo ay maputulan at updated naman ang inyong customer's deposit, <strong>hindi na kayo kailangang singilin ng karagdagang halaga</strong>.<br><br>Sana po ay naunawaan ninyo. May iba pa po ba kayong katanungan? 😊💧"
    },

    {
        keywords: ["flushing", "flush", "flusing", "paglinis", "linis ng linya", "hydrant", "bakit nagtatapon", "bakit nagbubuga", "nagbubuga ng tubig", "nag-aaksaya", "aksaya", "bakit nag-aaksaya"],
        answer: "Ang <strong>flushing</strong> ay ang paraan ng pagtatapon ng tubig mula sa mga <strong>fire hydrants</strong> upang linisin ang ating mga linya ng tubig. 🚿💧<br><br>🧹 <strong>Bakit ito ginagawa?</strong><br>• Upang alisin ang mga <strong>sediments</strong> (dumi, buhangin, kalawang)<br>• Upang alisin ang iba pang uri ng <strong>impurities</strong> sa tubo<br>• Upang mapanatili ang <strong>malinis at ligtas</strong> na daloy ng tubig<br><br>📅 <strong>Kailan ito ginagawa?</strong><br>• Tuwing <strong>huling Biyernes ng buwan</strong><br><br>💡 <strong>Paalala:</strong> Kapag may nakikita kayong tubig na bumubuga mula sa fire hydrant, ito ay <strong>hindi aksaya</strong>—ito ay regular maintenance para sa inyong kaligtasan. Pasensya na po kung may pansamantalang abala. May iba pa po ba kayong katanungan? 😊💧"
    },


    // ========== BILLING AT PAYMENT ==========
    {
        keywords: ["bayad", "payment", "magbayad", "bill", "landbank", "saan magbayad", "paano magbayad", "gcash", "linkbiz"],
        answer: "Puwede po kayong magbayad sa:<br><br>🏢 <strong>Opisina</strong> — 7AM-6PM, Lunes hanggang Huwebes<br>📱 <strong>GCash</strong> — <a href='https://siniloansiwadi-max.github.io/waterbill_inquiry_app/services2.html' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>I-click po ito para sa GCash Payment Guide</a><br>🏦 <strong>Landbank LinkBiz</strong> — online payment<br><br>⚠️ <strong>Mahalagang paalala:</strong> Kapag online payment (GCash o LinkBiz), i-send agad ang confirmation sa amin dahil hindi ito real-time—dalawa hanggang tatlong araw bago namin matanggap at ma-update sa system. May iba pa po ba kayong katanungan? 💳"
    },

    {
        keywords: ["due date", "deadline", "kailan bayad", "payment due"],
        answer: "15 araw po mula sa reading date ang due date. Halimbawa: kung na-reading kayo ng July 1, ang due date ay July 16, at ang putol ay July 17 (nakadepende sa araw na may pasok ang opisina). Para makasigurado, i-check din po ang aming Facebook page. May iba pa po ba kayong katanungan? 📅"
    },

    {
        keywords: ["water bill", "bill inquiry", "alamin ang bill", "check bill", "tingnan ang bill", "balance", "how much", "magkano babayaran", "amount due", "total bill"],
        answer: "Kung nais niyo pong malaman ang inyong water bill, magpunta po kayo dito: <a href='index.html' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>Water Bill Inquiry</a>. Ilagay po ang tamang account number—mahalaga pong alam ninyo ang eksaktong account number ninyo. Kung hindi po kayo sigurado, maaari ninyong gamitin ang <strong>Name Search</strong>, ilagay lamang ang pangalan o apelyido ng nais hanapin. 💧🔍 Mag antay lamang po ng ilang segundo at lalabas ang resulta"
    },

    {
    keywords: ["putol", "putulan", "disconnection", "diskoneksyon", "kailan putol", "kailan mapuputulan", "disconnection schedule", "iskedyul ng putol"],
    answer: "Para po malaman ang disconnection schedule sa inyong lugar, <a href='https://siniloansiwadi-max.github.io/waterbill_inquiry_app/services.html' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>i-click po ito para makita ang Disconnection Schedule ⚠️📅</a>. Makikita niyo po doon ang petsa ng putulan para sa inyong area. May iba pa po ba kayong katanungan?"
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

    {
    keywords: ["seminar", "tuwing kailan seminar", "iskedyul ng seminar", "orientation", "oras ng seminar", "schedules", "araw ng seminar", "paano dumalo", "requirement seminar"],
    answer: "Ang seminar po ay kailangan para ating malaman ang mga umiiral na alintuntunin hinggil sa pagpapakabit ng serbisyo ng tubig. Ito po ay ginaganap tuwing <strong>Miyerkules, ala-una ng hapon (1:00 PM)</strong> sa <strong>SIWADI Building</strong>. 🏢📋<br><br>Kung kayo po ay na-inspeksyon na, maaari na po kayong dumalo ng seminar. Ito po ay bahagi ng proseso para sa bagong service connection. May iba pa po ba kayong katanungan? 😊💧"
    },

    {
        keywords: ["madumi", "marumi", "dumi", "malabo", "kulay", "brown", "putik", "maitim", "kakaiba", "quality", "malinis", "linis", "bakit madumi", "maruming tubig"],
        answer: "Ang pagkakaroon po ng marumi o malabong tubig ay maaaring dahil sa mga sumusunod:<br><br>🔧 <strong>Pipe maintenance o repair</strong> — Kapag may ginagawang pagkukumpuni sa linya, pansamantalang pumapasok ang dumi o kalawang sa tubo.<br>🌧️ <strong>Malakas na ulan o bagyo</strong> — Maaaring maapektuhan ang water source at magdulot ng sediment.<br>🏠 <strong>Lumang tubo sa inyong bahay</strong> — Ang mga lumang galvanized na tubo ay kinakalawang at nag-iiwan ng kalawang sa tubig.<br>🔄 <strong>Pag-flush ng linya</strong> — May pagkakataong nagfa-flush ang SIWADI ng main lines na nagdudulot ng pansamantalang paglabo.<br><br>💡 <strong>Ano ang dapat gawin:</strong><br>1. Buksan ang gripo at hayaang umagos ng 3-5 minuto.<br>2. Kung hindi pa rin bumalik sa normal, tumawag sa (049) 501-6656.<br>3. I-report sa aming <a href='https://www.facebook.com/SiniloanWaterDistrict/' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>Facebook page 📘</a> para maaksyunan agad.<br><br>Ang inyong kaligtasan ay aming prayoridad. May iba pa po ba kayong katanungan? 💧🔍"
    },

    {
        keywords: ["mahina", "hina", "mahinang daloy", "low pressure", "walang pressure", "bakit mahina", "humina", "walang lakas", "tumilamsik", "patak", "patak-patak", "pressure"],
        answer: "Ang mahina pong daloy ng tubig ay maaaring dahil sa mga sumusunod:<br><br>⚡ <strong>Power interruption o fluctuation</strong> — Ang SIWADI po ay gumagamit ng pumping station na pinapatakbo ng submersible pump. Kapag nagkakaroon ng power outage o voltage fluctuation, pansamantalang humihina ang daloy ng tubig.<br>🔧 <strong>Pump maintenance o technical issue</strong> — May mga pagkakataong sumasailalim sa regular maintenance ang aming pumping station para masiguro ang maayos na serbisyo.<br>📈 <strong>Peak hours o mataas na demand</strong> — Kapag sabay-sabay pong gumagamit ng tubig ang maraming konsyumer, bumababa ang water pressure.<br>🔍 <strong>Leak sa main line</strong> — Kung may tagas sa pangunahing linya, nababawasan ang pressure na umaabot sa inyong lugar.<br>🏠 <strong>Baradong tubo o gripo sa bahay</strong> — Maaaring may bara sa inyong sariling linya kaya humihina ang daloy.<br><br>💡 <strong>Ano ang dapat gawin:</strong><br>1. Tingnan kung may sariling leak o bara ang inyong linya sa bahay.<br>2. Kung patuloy na mahina, tumawag sa (049) 501-6656 para ma-check namin ang linya.<br>3. I-report sa aming <a href='https://www.facebook.com/SiniloanWaterDistrict/' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>Facebook page 📘</a> para maimbestigahan agad.<br><br>Patuloy po naming pinagbubuti ang serbisyo. Pasensya na po sa abala! May iba pa po ba kayong katanungan? 💧🔧"
    },

    {
        keywords: ["magwenta", "magkwenta", "kwentahin", "kalkulahin", "pano malaman", "paano i-compute", "sample computation", "halimbawa", "pano magcompute", "mag compute", "wenta", "tuition", "calculation example", "example"],
        answer: "Narito po ang halimbawa ng pagwenta ng water bill para sa <strong>Residential/Government (1/2\" meter)</strong> kung ang konsumo ay <strong>25 cubic meters</strong>:<br><br>📊 <strong>Minimum Charge</strong> (first 10 m³) = <strong>₱ 200.00</strong><br><br>📏 <strong>Commodity Charges:</strong><br>• 11–20 m³ (10 m³ × ₱21.13) = <strong>₱ 211.30</strong><br>• 21–30 m³ (5 m³ × ₱23.25) = <strong>₱ 116.25</strong><br><br>💰 <strong>Total Bill:</strong> ₱ 200.00 + ₱ 211.30 + ₱ 116.25 = <strong>₱ 527.55</strong><br><br>🧮 Kung nais niyo pong mag-compute ng sarili ninyong konsumo, gamitin po ang aming <a href='https://siniloansiwadi-max.github.io/waterbill_inquiry_app/calculator.html' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>Water Bill Calculator dito</a>. Piliin lang po ang klasipikasyon at ilagay ang inyong konsumo. May iba pa po ba kayong katanungan? 🧮💧"
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
    },

    {
        keywords: ["reklamo", "complaint", "ireklamo", "may reklamo", "complain", "report concern", "problem", "issue"],
        answer: "Para po sa mga complaints o reklamo, may dalawa po kayong pagpipilian:<br><br>🏢 <strong>Magtungo sa opisina</strong> — Bukas po mula Lunes hanggang Huwebes, 7:00 AM hanggang 6:00 PM. Personal po ninyong makakausap ang aming Customer Service.<br><br>💬 <strong>Mag-message sa Facebook Messenger</strong> — <a href='https://business.facebook.com/latest/inbox/all/?asset_id=138114919663818&business_id=1271512611614176&ir_qe_exposed=1&nav_ref=manage_page_ap_plus_inbox_message_button' target='_blank' style='color: #1e3c72; font-weight: bold; text-decoration: underline;'>I-click po ito para direktang mag-message sa aming Facebook Messenger 📘💬</a><br><br>Pakibanggit po ang inyong account number at detalye ng reklamo para agad naming maaksyunan. May iba pa po ba kayong katanungan? 😊"
    },

    {
        keywords: ["kapatalan", "walang tubig kapatalan", "bakit walang tubig kapatalan", "kapatalan area", "tubig kapatalan", "rationing", "water rationing"],
        answer: "Paumanhin po sa mga taga-<strong>Kapatalan</strong>. 🚰💧<br><br>Dahil po sa patuloy na <strong>tag-init</strong>, bumababa ang suplay ng tubig sa mga source natin sa Kapatalan na nagreresulta sa <strong>mahinang pressure</strong>. Dahil dito, hindi po sapat ang lakas ng daloy upang makarating sa mga <strong>matataas at malalayong lugar</strong>.<br><br>💡 <strong>Huwag po kayong mag-alala:</strong><br>• Lahat po ay aming ginagawa upang maayos ang problemang ito<br>• Mayroon po kaming <strong>scheduled Water Rationing</strong> upang mapagsilbihan ang lahat<br>• Patuloy po ang aming pagsisikap na mapabuti ang serbisyo<br><br>Muli po, humihingi kami ng paumanhin sa abala. Maraming salamat po sa inyong pang-unawa at patuloy na pagtitiwala sa SIWADI. May iba pa po ba kayong katanungan? 🙏💧"
    },

    {
        keywords: ["/help", "help", "tulong", "ano ang pwede itanong", "list", "menu", "commands"],
        answer: "Narito po ang mga puwede ninyong itanong kay Tubibot:<br><br>💳 <strong>Billing at Payment</strong><br>• Paano magbayad ng bill?<br>• Magkano ang water bill ko?<br>• Kailan ang due date?<br>• Bakit malaki ang bill ko?<br>• Water Bill Inquiry.<br>• Paano magbayad sa GCash?<br>• Bakit ako naputulan? Bayad naman ako sa GCash!<br><br>🔌 <strong>Reconnection</strong><br>• Magkano ang reconnection fee?<br>• Ano ang Customer's Deposit?<br><br>📋 <strong>New Connection Application</strong><br>• Paano mag-apply ng connection?<br>• Ano ang mga requirements?<br>• May online application ba?<br>• Magkano ang downpayment (₱6,000)?<br>• Paano mag-apply ng Change of Name?<br>• Paano ang Transfer of Location?<br><br>🎓 <strong>Seminar</strong><br>• Tuwing kailan ang seminar?<br>• Kailangan ba ng seminar?<br>• Saan gaganapin ang seminar?<br><br>🔧 <strong>Maintenance at Emergency</strong><br>• Paano mag-report ng leak?<br>• Bakit walang tubig?<br>• Bakit mahina ang tubig?<br>• Bakit madumi ang tubig?<br>• Ano ang flushing?<br>• Bakit walang tubig sa Kapatalan?<br><br>📅 <strong>Schedules</strong><br>• Kailan ang reading schedule?<br>• Kailan ang putulan?<br>• Bukas ba kayo ngayon?<br><br>🏢 <strong>General Info</strong><br>• Ano ang SIWADI?<br>• Paano mag-reklamo?<br>• Contact number ng SIWADI<br>• Facebook page ng SIWADI<br><br>🧮 <strong>Calculator</strong><br>• Paano magwenta ng bill?<br>• Sample computation<br><br>💡 I-type lang po ang inyong tanong at sasagutin ko po agad! May iba pa po ba kayong katanungan? 😊💧"
    },


];

const DEFAULT_ANSWER = "Pasensya na po, hindi ko po masyadong naintindihan ang inyong katanungan. Puwede po bang pakiusapan na mas detalyado ang tanong? Puwede rin po kayong tumawag sa (049) 501-6656 o bumisita sa opisina ng SIWADI, Lunes hanggang Huebes(opisina), 7:00 AM hanggang 6:00 PM. May iba pa po ba kayong maitutulong ko? 😊";
