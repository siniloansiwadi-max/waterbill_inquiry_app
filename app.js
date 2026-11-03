// ============================================================
// 🔥 SUPABASE CONFIGURATION
// ============================================================
const SUPABASE_URL = 'https://eavuwdjjmofxuwhtompp.supabase.co';
const SUPABASE_KEY = 'sb_publishable_kRq0ET-3jP4Ul6DoGSxjrQ_GqmVdPaI';

// Initialize Supabase client
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================================
// 📋 DISPLAY MAP
// ============================================================
const DISPLAY_MAP = {
    'account_no': 'Account Number',
    'name': 'Name',
    'address': 'Billing Address',
    'meter_no': 'Meter Number',
    'status_for_app': 'Account Status',
    'balance': 'Water Bill',
    'arobalance': 'S.C. / Materials',
    'total': 'Total Amount Due',
    'reading_date': 'Reading Date',
    'due_date': 'Payment Due Date',
    'discon_date': 'Disconnection Date',
    'status': 'Status',
    'zone': 'Zone'
};

const loadingMessage = document.getElementById('loading-message');
const accountInput = document.getElementById('accountNumber');
const modalContainer = document.getElementById('modal-container');
const modalResult = document.getElementById('modal-result');
const searchButton = document.getElementById('search-button');

let currentBillData = null;

function closeModal() {
    modalContainer.style.display = 'none';
    modalResult.innerHTML = '';
    accountInput.value = '';
    accountInput.focus();
    document.getElementById('qr-modal-container').style.display = 'none';
    currentBillData = null;
}

function maskName(fullName) {
    if (!fullName || typeof fullName !== 'string') return '';
    const nameParts = fullName.toUpperCase().trim().split(/\s+/);

    let maskedParts = nameParts.map((part) => {
        if (part.length <= 3) return part;
        if (part.length >= 8) {
            return part.substring(0, 2) + '*'.repeat(part.length - 4) + part.substring(part.length - 2);
        }
        return part.substring(0, 2) + '*'.repeat(part.length - 3) + part.substring(part.length - 1);
    });

    return maskedParts.join(' ');
}

function formatResult(data) {
    let output = '<ul>';
    for (const key in data) {
        if (!data.hasOwnProperty(key)) continue;
        if (key === 'id' || key === 'updated_at') continue;

        let value = String(data[key] ?? '').replace(/"/g, '');
        let label = DISPLAY_MAP[key] || key;

        if (key.toLowerCase().includes('name')) {
            value = maskName(value);
        }

        if (key.toLowerCase().includes('date') && value) {
            const dateObj = new Date(value);
            if (!isNaN(dateObj.getTime())) {
                const month = String(dateObj.getMonth() + 1).padStart(2, '0');
                const day = String(dateObj.getDate()).padStart(2, '0');
                const year = String(dateObj.getFullYear()).slice(-2);
                value = `${month}-${day}-${year}`;
            }
        }

        if (key.toLowerCase().includes('balance') || key.toLowerCase().includes('total') || key.toLowerCase().includes('amount') || key.toLowerCase().includes('bill')) {
            let num = parseFloat(value);
            if (!isNaN(num)) value = `₱ ${num.toFixed(2)}`;
        }

        output += `<li><strong>${label}:</strong> <span>${value}</span></li>`;
    }
    output += '</ul>';
    return output;
}

function generateQRCodeLink(billData) {
    const params = new URLSearchParams({
        account: billData['account_no'] || '',
        name: billData['name'] || '',
        address: billData['address'] || '',
        meter: billData['meter_no'] || '',
        waterBill: billData['balance'] || '0',
        scMaterials: billData['arobalance'] || '0',
        total: billData['total'] || '0',
        dueDate: billData['due_date'] || '',
        readingDate: billData['reading_date'] || ''
    });

    const baseUrl = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');
    const billPageUrl = `${baseUrl}bill_viewer.html?${params.toString()}`;

    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = '';

    new QRCode(qrContainer, {
        text: billPageUrl,
        width: 160,
        height: 160,
        colorDark: "#1e3c72",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.L
    });
}

function showQRCode() {
    if (!currentBillData) {
        alert('Please search for an account first.');
        return;
    }
    const qrContainer = document.getElementById('qr-modal-container');
    if (qrContainer.style.display === 'none' || qrContainer.style.display === '') {
        generateQRCodeLink(currentBillData);
        qrContainer.style.display = 'block';
    } else {
        qrContainer.style.display = 'none';
    }
}

// ============================================================
// 📧 EMAIL REGISTRATION FUNCTIONS
// ============================================================
function openDirectEmailRegistrationModal() {
    const accField = document.getElementById('regAccountNo');
    const nameWrapper = document.getElementById('regAccountNameWrapper');

    accField.value = accountInput.value.trim();
    accField.readOnly = false;
    accField.style.background = '#ffffff';
    accField.style.cursor = 'text';

    nameWrapper.style.display = 'none';
    document.getElementById('regEmailAddress').value = '';

    document.getElementById('email-modal-container').style.display = 'flex';
}

function openEmailRegistrationModal() {
    if (!currentBillData) return;
    const accountNo = currentBillData['account_no'] || '';
    const rawName = currentBillData['name'] || '';

    const accField = document.getElementById('regAccountNo');
    const nameWrapper = document.getElementById('regAccountNameWrapper');

    accField.value = accountNo;
    accField.readOnly = true;
    accField.style.background = '#f1f5f9';
    accField.style.cursor = 'not-allowed';

    nameWrapper.style.display = 'block';
    document.getElementById('regAccountName').value = rawName;
    document.getElementById('regEmailAddress').value = '';

    document.getElementById('email-modal-container').style.display = 'flex';
}

function closeEmailRegistrationModal() {
    document.getElementById('email-modal-container').style.display = 'none';
}

async function submitEmailRegistration() {
    const rawAccountNo = document.getElementById('regAccountNo').value.trim();
    const email = document.getElementById('regEmailAddress').value.trim();
    const contactNumber = document.getElementById('regContactNumber').value.trim();
    const btnSubmit = document.getElementById('btnSubmitRegistration');

    if (!rawAccountNo) {
        alert('Pakilagay ang inyong Account Number.');
        return;
    }

    const validAccountPattern = /^(\d{3}-\d{3}-\d{3}|\d{9})$/;
    if (!validAccountPattern.test(rawAccountNo)) {
        alert('❌ Mali ang format ng Account Number!\n\nAng tinatanggap lamang ay 9-digit format tulad ng:\n• 063-101-074\n• 063101074\n\nPaki-check kung may kulang na numero o leading zero.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        alert('Pakilagay ang isang wastong email address.');
        return;
    }

    if (!contactNumber) {
        alert('❌ Kailangan ang Contact Number!\n\nPakilagay ang inyong 11-digit contact number tulad ng:\n• 09171234567');
        document.getElementById('regContactNumber').focus();
        return;
    }

    const contactPattern = /^09\d{9}$/;
    if (!contactPattern.test(contactNumber)) {
        alert('❌ Mali ang format ng Contact Number!\n\nAng tinatanggap lamang ay 11-digit format tulad ng:\n• 09171234567');
        document.getElementById('regContactNumber').focus();
        return;
    }

    const cleanDigits = rawAccountNo.replace(/\D/g, '');
    const formattedAccountNo = `${cleanDigits.slice(0, 3)}-${cleanDigits.slice(3, 6)}-${cleanDigits.slice(6, 9)}`;

    btnSubmit.disabled = true;
    btnSubmit.textContent = '⏳ Sine-save...';

    try {
        const { data: existing, error: checkError } = await sb
            .from('emails')
            .select('id')
            .eq('account_number', formattedAccountNo)
            .maybeSingle();

        if (checkError && checkError.code !== 'PGRST116') {
            throw new Error(checkError.message);
        }

        if (existing) {
            const { error: updateError } = await sb
                .from('emails')
                .update({
                    email_address: email,
                    contact_number: contactNumber,
                    timestamp: new Date().toISOString()
                })
                .eq('account_number', formattedAccountNo);

            if (updateError) throw new Error(updateError.message);
        } else {
            const { error: insertError } = await sb
                .from('emails')
                .insert({
                    account_number: formattedAccountNo,
                    email_address: email,
                    contact_number: contactNumber,
                    timestamp: new Date().toISOString()
                });

            if (insertError) throw new Error(insertError.message);
        }

        alert('🎉 Matagumpay na nairehistro ang iyong email!\nMakakatanggap ka na ng billing notifications tuwing pagkatapos ng reading sa inyong area.');
        closeEmailRegistrationModal();

    } catch (err) {
        alert('❌ Error sa koneksyon: ' + err.message);
    } finally {
        btnSubmit.disabled = false;
        btnSubmit.textContent = '💾 I-save ang Email';
    }
}

// ============================================================
// SEARCH CONTROLS
// ============================================================


// ============================================================
// 🔥 SUPABASE: ACCOUNT SEARCH
// ============================================================
async function fetchAccountData() {
    let rawAccountNumber = accountInput.value.trim();
    let searchKey = rawAccountNumber.replace(/[\s\-\–]/g, '');

    if (!searchKey) {
        alert("Please enter an account number.");
        return;
    }

    if (searchKey.length === 9) {
        searchKey = `${searchKey.slice(0,3)}-${searchKey.slice(3,6)}-${searchKey.slice(6,9)}`;
    }

    // 🔥 CACHE CHECK — bago mag-query sa Supabase
    const cacheKey = `account_${searchKey}`;
    const cacheTimeKey = `${cacheKey}_time`;
    const CACHE_DURATION = 1000 * 60 * 60; // 1 oras (60 min * 60 sec * 1000 ms)
    const cached = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);

    if (cached && cachedTime && (Date.now() - parseInt(cachedTime)) < CACHE_DURATION) {
        try {
            const data = JSON.parse(cached);
            modalContainer.style.display = 'none';
            loadingMessage.style.display = 'none';

            modalResult.innerHTML = `
                <h3>Results for Account: ${rawAccountNumber}</h3>
                <div style="border: 1px solid #e2e8f0; padding: 12px; background: #f8fafc; border-radius: 12px;">
                    ${formatResult(data)}
                </div>
            `;
            currentBillData = data;
            document.getElementById('register-email-btn').style.display = 'block';
            document.getElementById('qr-modal-container').style.display = 'none';

            // 📝 I-log din ang inquiry kahit cache hit (para mabilang lahat)
            logInquiry(data['account_no'], data['name']);

            modalContainer.style.display = 'flex';
            return; // ⛔ huwag nang mag-query sa Supabase
        } catch (e) {
            // kung sira ang cache, ituloy lang sa normal na query
        }
    }

    // 🟢 NORMAL QUERY SA SUPABASE (kung walang cache o expired na)
    modalContainer.style.display = 'none';
    loadingMessage.style.display = 'flex';
    searchButton.disabled = true;

    try {
        const { data, error } = await sb
            .from('balances')
            .select('account_no, name, address, meter_no, status_for_app, balance, arobalance, total, reading_date, due_date, discon_date, status, zone')
            .eq('account_no', searchKey)
            .maybeSingle();

        let resultTitle = `Results for Account: ${rawAccountNumber}`;
        let resultHtml = '';

        if (error) {
            resultTitle = `Search Failed`;
            resultHtml = `<p style="color: #e53e3e; font-weight: bold; margin: 0;">${error.message}</p>`;
            currentBillData = null;
            document.getElementById('register-email-btn').style.display = 'none';
        } else if (!data) {
            resultTitle = `No Results`;
            resultHtml = `<p style="text-align: center; color: #718096; margin: 10px 0;">No account found with number "${rawAccountNumber}".</p>`;
            currentBillData = null;
            document.getElementById('register-email-btn').style.display = 'none';
        } else {
            resultHtml = formatResult(data);
            currentBillData = data;

            // 💾 I-save sa cache
            try {
                localStorage.setItem(cacheKey, JSON.stringify(data));
                localStorage.setItem(cacheTimeKey, Date.now().toString());
            } catch (e) {
                console.log('Cache save error:', e);
            }

            document.getElementById('register-email-btn').style.display = 'block';
            document.getElementById('qr-modal-container').style.display = 'none';

            // (logInquiry removed — admin panel removed)
        }

        modalResult.innerHTML = `
            <h3>${resultTitle}</h3>
            <div style="border: 1px solid #e2e8f0; padding: 12px; background: #f8fafc; border-radius: 12px;">
                ${resultHtml}
            </div>
        `;
        modalContainer.style.display = 'flex';
    } catch (error) {
        modalResult.innerHTML = `<h3>Network Error</h3><p>Could not connect to the server.</p>`;
        modalContainer.style.display = 'flex';
    } finally {
        loadingMessage.style.display = 'none';
        searchButton.disabled = false;
    }
}

// (fetchAccountDetails removed — name search removed)


// ============================================================
// 📝 INQUIRY LOGGING (Supabase — view via Dashboard)
// Cooldown: 1 oras per account para makatipid sa Supabase free tier
// ============================================================
async function logInquiry(accountNo, name) {
    if (!accountNo || !name) return;

    // 🔥 COOLDOWN CHECK — nai-log na ba ito sa loob ng 1 oras?
    const logKey = `logged_${accountNo}`;
    const logTimeKey = `${logKey}_time`;
    const lastLogged = localStorage.getItem(logTimeKey);
    const LOG_COOLDOWN = 1000 * 60 * 60; // 1 oras

    if (lastLogged && (Date.now() - parseInt(lastLogged)) < LOG_COOLDOWN) {
        return; // Nai-log na kamakailan — skip para tipid sa Supabase
    }

    try {
        await sb.from('inquiries').insert({
            account_no: accountNo,
            name: name
        });
        // 💾 I-save ang timestamp para hindi maulit sa loob ng 1 oras
        localStorage.setItem(logTimeKey, Date.now().toString());
    } catch (err) {
        console.log('Inquiry log error:', err);
    }
}


function openReadingSchedule() {
    document.getElementById('image-viewer-modal').style.display = 'flex';
}

function closeReadingSchedule() {
    document.getElementById('image-viewer-modal').style.display = 'none';
}


// ============================================================
// 🚨 REPORT LEAK / COMPLAINTS TO SUPABASE
// ============================================================


// 1. Tagagawa ng awtomatikong Reference Number (Client-side, 0 Database reads)
function generateComplaintRefNo() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const datePrefix = `REF-${year}${month}${day}-`;

    // 4-character random unique alphanumeric code (hal. 7K2M, B9X1)
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();

    return `${datePrefix}${randomSuffix}`;
}

// 2. Tagapagbukas ng modal at auto-fill ng mga detalye kung may sinearch na
async function openComplaintModal() {
    document.getElementById('compRefNo').value = generateComplaintRefNo();

    if (currentBillData) {
        document.getElementById('compAccountNo').value = currentBillData['account_no'] || '';
        document.getElementById('compAccountName').value = currentBillData['name'] || '';
    } else if (accountInput && accountInput.value.trim()) {
        document.getElementById('compAccountNo').value = accountInput.value.trim();
        document.getElementById('compAccountName').value = '';
    } else {
        document.getElementById('compAccountNo').value = '';
        document.getElementById('compAccountName').value = '';
    }

    document.getElementById('compContactNo').value = '';
    document.getElementById('compDetails').value = '';

    document.getElementById('complaint-modal-container').style.display = 'flex';
}

// 3. Tagasara ng modal
function closeComplaintModal() {
    document.getElementById('complaint-modal-container').style.display = 'none';
}

// 4. ANG PAGSESAVE DERETSO SA SUPABASE TABLE NA 'complaints'
async function submitComplaint() {
    const refNo = document.getElementById('compRefNo').value.trim();
    const rawAccountNo = document.getElementById('compAccountNo').value.trim();
    const accountName = document.getElementById('compAccountName').value.trim();
    const contactNo = document.getElementById('compContactNo').value.trim();
    const complaints = document.getElementById('compDetails').value.trim();
    const btnSubmit = document.getElementById('btnSubmitComplaint');

    // 1. Validation ng Account Number (Required at 9-digit format check)
    if (!rawAccountNo) {
        alert('❌ Pakilagay ang Account Number.');
        document.getElementById('compAccountNo').focus();
        return;
    }

    const validAccountPattern = /^(\d{3}-\d{3}-\d{3}|\d{9})$/;
    if (!validAccountPattern.test(rawAccountNo)) {
        alert('❌ Mali ang format ng Account Number!\n\nAng tinatanggap lamang ay 9-digit format tulad ng:\n• 011-101-001\n• 011101001\n\nPaki-check kung may kulang o sumobrang numero.');
        document.getElementById('compAccountNo').focus();
        return;
    }

    // 2. Validation ng Account Name (Required)
    if (!accountName) {
        alert('❌ Pakilagay ang Account Name o Pangalan.');
        document.getElementById('compAccountName').focus();
        return;
    }

    // 3. Validation ng Contact Number (Required & 11 digits: 09xxxxxxxxx)
    if (!contactNo) {
        alert('❌ Pakilagay ang Contact Number.');
        document.getElementById('compContactNo').focus();
        return;
    }

    const contactPattern = /^09\d{9}$/;
    if (!contactPattern.test(contactNo)) {
        alert('❌ Mali ang format ng Contact Number!\nGamitin ang 11-digit format tulad ng:\n• 09171234567');
        document.getElementById('compContactNo').focus();
        return;
    }

    // 4. Validation ng Complaints Details (Required)
    if (!complaints) {
        alert('❌ Pakilagay ang detalye ng inyong sumbong o reklamo.');
        document.getElementById('compDetails').focus();
        return;
    }

    // I-format ang Account Number sa standard na xxx-xxx-xxx bago i-save
    const cleanDigits = rawAccountNo.replace(/\D/g, '');
    const formattedAccountNo = `${cleanDigits.slice(0, 3)}-${cleanDigits.slice(3, 6)}-${cleanDigits.slice(6, 9)}`;

    // Loading status ng button
    btnSubmit.disabled = true;
    btnSubmit.textContent = '⏳ Ipinapadala sa database...';

    try {
        // 🔥 SUPABASE INSERT OPERATION papunta sa 'complaints' table
        const { data, error } = await sb
            .from('complaints')
            .insert([
                {
                    reference_no: refNo,
                    account_no: formattedAccountNo,
                    account_name: accountName,
                    contact_no: contactNo,
                    complaint_details: complaints,
                    status: 'PENDING'
                }
            ]);

        if (error) {
            throw new Error(error.message);
        }

        // Tagumpay na naipasok sa Supabase
        alert(`🎉 Salamat po!\n\nMatagumpay na naipadala ang inyong report sa aming database.\n\nAccount Number: ${formattedAccountNo}\nReference Number: ${refNo}`);
        closeComplaintModal();

    } catch (err) {
        alert('❌ Error sa pag-save sa Supabase: ' + err.message);
    } finally {
        btnSubmit.disabled = false;
        btnSubmit.textContent = '📤 I-submit ang Report';
    }
}
