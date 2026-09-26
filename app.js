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
const nameInput = document.getElementById('nameSearchInput');
const modalContainer = document.getElementById('modal-container');
const modalResult = document.getElementById('modal-result');
const searchButton = document.getElementById('search-button');

let currentBillData = null;
let lastNameSearchQuery = '';

function closeModal() {
    modalContainer.style.display = 'none';
    modalResult.innerHTML = '';
    accountInput.value = '';
    nameInput.value = '';
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
            .select('*')
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
function toggleSearchType(type) {
    const searchLabel = document.getElementById('searchLabel');
    const toggleOptions = document.querySelectorAll('.toggle-option');

    toggleOptions.forEach(option => {
        const radio = option.querySelector('input[type="radio"]');
        if (radio && radio.value === type) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    if (type === 'account') {
        accountInput.style.display = 'block';
        nameInput.style.display = 'none';
        searchLabel.textContent = 'Account Number';
        accountInput.placeholder = 'e.g., 011-101-001';
        accountInput.focus();
        nameInput.value = '';
    } else {
        accountInput.style.display = 'none';
        nameInput.style.display = 'block';
        searchLabel.textContent = 'Concessionaire Name';
        nameInput.placeholder = 'Enter last name or full name...';
        nameInput.focus();
        accountInput.value = '';
    }
}

function handleSearch() {
    const searchType = document.querySelector('input[name="searchType"]:checked').value;
    if (searchType === 'account') {
        fetchAccountData();
    } else {
        fetchByName();
    }
}

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

    modalContainer.style.display = 'none';
    loadingMessage.style.display = 'flex';
    searchButton.disabled = true;

    try {
        const { data, error } = await sb
            .from('balances')
            .select('*')
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

            document.getElementById('register-email-btn').style.display = 'block';
            document.getElementById('qr-modal-container').style.display = 'none';

            try {
                if (data['account_no'] && data['name']) logInquiry(data['account_no'], data['name']);
            } catch (e) {}
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

// ============================================================
// 🔥 SUPABASE: NAME SEARCH
// ============================================================
async function fetchByName() {
    const searchName = nameInput.value.trim();
    lastNameSearchQuery = searchName;

    if (!searchName || searchName.length < 2) {
        alert("Please enter at least 2 characters.");
        return;
    }

    modalContainer.style.display = 'none';
    loadingMessage.style.display = 'flex';
    searchButton.disabled = true;

    try {
        const { data, error } = await sb
            .from('balances')
            .select('account_no, name, address')
            .ilike('name', `%${searchName}%`)
            .limit(50);

        let resultTitle = '';
        let resultHtml = '';

        if (error) {
            resultTitle = `Search Failed`;
            resultHtml = `<p style="color: #e53e3e; font-weight: bold;">${error.message}</p>`;
        } else if (data && data.length > 0) {
            resultTitle = `Search Results for "${searchName}"`;
            resultHtml = formatNameSearchResults(data);
        } else {
            resultTitle = `No Results`;
            resultHtml = `<p style="text-align: center; color: #718096; margin: 10px 0;">No accounts found matching "${searchName}".</p>`;
        }

        document.getElementById('register-email-btn').style.display = 'none';
        modalResult.innerHTML = `
            <h3>${resultTitle}</h3>
            <div style="border: 1px solid #e2e8f0; padding: 10px; background: #f8fafc; border-radius: 12px;">
                ${resultHtml}
            </div>
        `;
        modalContainer.style.display = 'flex';
        addRowClickHandlers();
    } catch (error) {
        modalResult.innerHTML = `<h3>Network Error</h3><p>Could not connect to the server.</p>`;
        modalContainer.style.display = 'flex';
    } finally {
        loadingMessage.style.display = 'none';
        searchButton.disabled = false;
    }
}

function formatNameSearchResults(results) {
    let html = `<div class="result-count">📊 ${results.length} record(s)</div>`;
    html += `
        <div style="overflow-x: auto;">
            <table class="results-table">
                <thead>
                    <tr>
                        <th>Account</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
    `;

    results.forEach((result) => {
        const accountNo = result['account_no'] || 'N/A';
        const name = maskName(result['name'] || 'N/A');
        const address = result['address'] || 'N/A';

        html += `
            <tr class="result-row" data-account="${accountNo}">
                <td><strong>${accountNo}</strong></td>
                <td>${name}</td>
                <td>${address}</td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </div>
        <p style="font-size: 11px; color: #718096; margin: 8px 0 0 0; text-align: center;">
            💡 Tap any row to view complete details
        </p>
    `;
    return html;
}

function addRowClickHandlers() {
    document.querySelectorAll('.result-row').forEach(row => {
        row.addEventListener('click', function() {
            fetchAccountDetails(this.getAttribute('data-account'));
        });
    });
}

// ============================================================
// 🔥 SUPABASE: FETCH FULL ACCOUNT DETAILS
// ============================================================
async function fetchAccountDetails(accountNo) {
    const cleanAcc = String(accountNo).replace(/[\s\-\–]/g, '');
    let formattedAcc = cleanAcc;
    if (cleanAcc.length === 9) {
        formattedAcc = `${cleanAcc.slice(0,3)}-${cleanAcc.slice(3,6)}-${cleanAcc.slice(6,9)}`;
    }

    const renderDetails = (data) => {
        currentBillData = data;
        document.getElementById('register-email-btn').style.display = 'block';
        document.getElementById('qr-modal-container').style.display = 'none';
        modalResult.innerHTML = `
            <h3>Account: ${accountNo}</h3>
            <div style="border: 1px solid #e2e8f0; padding: 12px; background: #f8fafc; border-radius: 12px;">
                ${formatResult(data)}
            </div>
            <button onclick="goBackToSearchResults()" style="margin-top: 12px; background: #64748b; color: white; padding: 8px 14px; font-size: 12px; border-radius: 8px;">
                ← Back to List
            </button>
        `;
    };

    loadingMessage.style.display = 'flex';
    try {
        const { data, error } = await sb
            .from('balances')
            .select('*')
            .eq('account_no', formattedAcc)
            .maybeSingle();

        if (!error && data) {
            renderDetails(data);

            try {
                if (data['account_no'] && data['name']) logInquiry(data['account_no'], data['name']);
            } catch (e) {}
        }
    } catch (error) {
        console.error(error);
    } finally {
        loadingMessage.style.display = 'none';
    }
}

async function goBackToSearchResults() {
    if (lastNameSearchQuery) {
        nameInput.value = lastNameSearchQuery;
        await fetchByName();
    }
}

async function logInquiry(accountNo, name) {
    try {
        await sb.from('inquiries').insert({
            account_no: accountNo,
            name: name
        });
    } catch (err) {
        console.log('Log error:', err);
    }
}

accountInput.addEventListener('keypress', e => { if (e.key === 'Enter') handleSearch(); });
nameInput.addEventListener('keypress', e => { if (e.key === 'Enter') handleSearch(); });

function openReadingSchedule() {
    document.getElementById('image-viewer-modal').style.display = 'flex';
}

function closeReadingSchedule() {
    document.getElementById('image-viewer-modal').style.display = 'none';
}

// ============================================================
// 🔐 SECRET ADMIN PANEL
// ============================================================
document.getElementById('site-logo').addEventListener('dblclick', function() {
    openPasswordModal();
});

function openPasswordModal() {
    document.getElementById('password-modal').style.display = 'flex';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('adminPasswordInput').value = '';
    setTimeout(() => document.getElementById('adminPasswordInput').focus(), 100);
}

function closePasswordModal() {
    document.getElementById('password-modal').style.display = 'none';
}

function verifyAdminPassword() {
    const input = document.getElementById('adminPasswordInput').value;
    const ADMIN_PASSWORD = 'pulpitobayagbag';

    if (input === ADMIN_PASSWORD) {
        closePasswordModal();
        openAdminPanel();
    } else {
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('adminPasswordInput').value = '';
        document.getElementById('adminPasswordInput').focus();
    }
}

function openAdminPanel() {
    document.getElementById('admin-panel').style.display = 'flex';
    switchAdminTab('inquiries');
    loadAdminInquiries();
}

function closeAdminPanel() {
    document.getElementById('admin-panel').style.display = 'none';
}

function switchAdminTab(tab) {
    const inquiryTab = document.getElementById('admin-inquiries-tab');
    const emailTab = document.getElementById('admin-emails-tab');
    const complaintTab = document.getElementById('admin-complaints-tab');

    const inquiryBtn = document.getElementById('tab-inquiries');
    const emailBtn = document.getElementById('tab-emails');
    const complaintBtn = document.getElementById('tab-complaints');

    // Reset styles
    [inquiryTab, emailTab, complaintTab].forEach(el => { if (el) el.style.display = 'none'; });
    [inquiryBtn, emailBtn, complaintBtn].forEach(btn => {
        if (btn) {
            btn.style.background = 'transparent';
            btn.style.borderBottom = '3px solid transparent';
            btn.style.color = '#718096';
        }
    });

    if (tab === 'inquiries') {
        inquiryTab.style.display = 'block';
        inquiryBtn.style.background = 'white';
        inquiryBtn.style.borderBottom = '3px solid #1e3c72';
        inquiryBtn.style.color = '#1e3c72';
        loadAdminInquiries();
    } else if (tab === 'emails') {
        emailTab.style.display = 'block';
        emailBtn.style.background = 'white';
        emailBtn.style.borderBottom = '3px solid #1e3c72';
        emailBtn.style.color = '#1e3c72';
        loadAdminEmails();
    } else if (tab === 'complaints') {
        complaintTab.style.display = 'block';
        complaintBtn.style.background = 'white';
        complaintBtn.style.borderBottom = '3px solid #dc2626';
        complaintBtn.style.color = '#dc2626';
        loadAdminComplaints();
    }
}

async function loadAdminInquiries() {
    const tbody = document.getElementById('adminInquiryTableBody');
    const stats = document.getElementById('adminInquiryStats');

    tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px; color: #718096;">Loading...</td></tr>';

    try {
        const { data, error } = await sb
            .from('inquiries')
            .select('*')
            .order('inquiry_at', { ascending: false })
            .limit(200);

        if (error) throw error;

        if (!data || data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px; color: #718096;">Walang inquiries.</td></tr>';
            stats.textContent = '';
            return;
        }

        stats.textContent = `📊 ${data.length} inquiries (pinakabago muna)`;

        tbody.innerHTML = data.map((inq, idx) => {
            const date = new Date(inq.inquiry_at);
            const formattedDate = date.toLocaleString('en-PH', {
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', hour12: true
            });

            return `
                <tr style="border-bottom: 1px solid #edf2f7;">
                    <td style="padding: 10px; color: #718096;">${idx + 1}</td>
                    <td style="padding: 10px;"><strong>${inq.account_no || '-'}</strong></td>
                    <td style="padding: 10px;">${inq.name || '-'}</td>
                    <td style="padding: 10px; color: #718096; font-size: 11px;">${formattedDate}</td>
                </tr>
            `;
        }).join('');

    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: #ef4444;">❌ Error: ${err.message}</td></tr>`;
    }
}

async function loadAdminEmails() {
    const tbody = document.getElementById('adminEmailTableBody');
    const stats = document.getElementById('adminEmailStats');

    tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px; color: #718096;">Loading...</td></tr>';

    try {
        const { data, error } = await sb
            .from('emails')
            .select('*')
            .order('timestamp', { ascending: false })
            .limit(200);

        if (error) throw error;

        if (!data || data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px; color: #718096;">Walang registered emails.</td></tr>';
            stats.textContent = '';
            return;
        }

        stats.textContent = `📊 ${data.length} registered emails`;

        tbody.innerHTML = data.map((em, idx) => {
            return `
                <tr style="border-bottom: 1px solid #edf2f7;">
                    <td style="padding: 10px; color: #718096;">${idx + 1}</td>
                    <td style="padding: 10px;"><strong>${em.account_number || '-'}</strong></td>
                    <td style="padding: 10px; font-size: 11px;">${em.email_address || '-'}</td>
                    <td style="padding: 10px; font-size: 11px; color: #718096;">${em.contact_number || '-'}</td>
                </tr>
            `;
        }).join('');

    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: #ef4444;">❌ Error: ${err.message}</td></tr>`;
    }
}

async function loadAdminComplaints() {
    const tbody = document.getElementById('adminComplaintTableBody');
    const stats = document.getElementById('adminComplaintStats');

    tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 20px; color: #718096;">Loading...</td></tr>';

    try {
        const { data, error } = await sb
            .from('complaints')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(200);

        if (error) throw error;

        if (!data || data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 20px; color: #718096;">Walang naitalang reports o complaints.</td></tr>';
            stats.textContent = '';
            return;
        }

        stats.textContent = `📊 ${data.length} complaint report(s) (pinakabago muna)`;

        tbody.innerHTML = data.map((item) => {
            const date = new Date(item.created_at);
            const formattedDate = date.toLocaleString('en-PH', {
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', hour12: true
            });

            return `
                <tr style="border-bottom: 1px solid #edf2f7; vertical-align: top;">
                    <td style="padding: 10px;">
                        <span style="font-weight: 700; color: #dc2626; font-size: 11px;">${item.reference_no || '-'}</span><br>
                        <span style="color: #718096; font-size: 10px;">${formattedDate}</span>
                    </td>
                    <td style="padding: 10px;"><strong>${item.account_no || 'N/A'}</strong></td>
                    <td style="padding: 10px;">
                        <div><strong>${item.account_name || '-'}</strong></div>
                        <div style="color: #0284c7; font-size: 11px;">📱 ${item.contact_no || '-'}</div>
                    </td>
                    <td style="padding: 10px; font-size: 11.5px; line-height: 1.4; color: #2d3748; max-width: 230px; word-break: break-word;">
                        ${item.complaint_details || '-'}
                    </td>
                    <td style="padding: 10px; text-align: center;">
                        <button onclick="deleteComplaint(${item.id}, '${item.reference_no}')" 
                                title="Burahin ang complaint"
                                style="background: #fee2e2; color: #dc2626; border: 1px solid #fecaca; border-radius: 6px; padding: 6px 10px; font-size: 12px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; width: auto;">
                            🗑️ Delete
                        </button>
                    </td>
                </tr>
            `;
        }).join('');

    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 20px; color: #ef4444;">❌ Error: ${err.message}</td></tr>`;
    }
}

// Function para magbura ng record sa complaints table
async function deleteComplaint(id, refNo) {
    const confirmed = confirm(`Sigurado ka bang nais mong burahin ang complaint report na ito?\n\nReference: ${refNo}`);
    if (!confirmed) return;

    try {
        const { error } = await sb
            .from('complaints')
            .delete()
            .eq('id', id);

        if (error) throw new Error(error.message);

        alert(`✅ Matagumpay na nabura ang complaint (${refNo})!`);
        loadAdminComplaints(); // I-refresh ang listahan

    } catch (err) {
        alert('❌ Nabigong burahin ang complaint: ' + err.message);
    }
}

// ============================================================
// 🚨 REPORT LEAK / COMPLAINTS TO SUPABASE
// ============================================================

// 1. Tagagawa ng awtomatikong Reference Number
async function generateComplaintRefNo() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const datePrefix = `REF-${year}${month}${day}-`;

    try {
        // Alamin kung ilan na ang nagawang reference number na nagsisimula sa REF-YYYYMMDD-
        const { count, error } = await sb
            .from('complaints')
            .select('*', { count: 'exact', head: true })
            .ilike('reference_no', `${datePrefix}%`);

        if (error) throw error;

        // Kung wala pa, magsisimula sa 1 (001), kung mayroon na ay +1 sa total count
        const nextSequence = (count || 0) + 1;
        const paddedSeq = String(nextSequence).padStart(3, '0'); // magiging 001, 002, 003...

        return `${datePrefix}${paddedSeq}`;
    } catch (err) {
        console.error('Sequence counter error, fallback to timestamp:', err);
        return `${datePrefix}001`;
    }
}

// 2. Tagapagbukas ng modal at auto-fill ng mga detalye kung may sinearch na
async function openComplaintModal() {
    document.getElementById('compRefNo').value = 'Generating...';
    
    // Hintayin ang bagong sequence number mula sa Supabase
    const nextRefNo = await generateComplaintRefNo();
    document.getElementById('compRefNo').value = nextRefNo;

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
