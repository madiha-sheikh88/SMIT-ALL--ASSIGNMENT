// ---- Setup: declared once, used everywhere below ----
const form = document.getElementById('registration-form');
const submitBtn = form.querySelector('button[type="submit"]'); // adjust selector if your button has a different id/class
let editingRow = null; // null = adding new employee, otherwise holds the <tr> being edited

// ---- FORM SUBMIT: Add new employee OR update existing one ----
form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop page reload — we are NOT using a backend

    // Read values using your exact field IDs
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone-number').value.trim();
    const employeeId = document.getElementById('Employee-ID').value.trim();
    const department = document.getElementById('Department').value.trim();
    const position = document.getElementById('Position').value.trim();
    const salary = document.getElementById('salary').value.trim();
    const doj = document.getElementById('doj').value.trim();
    const status = document.getElementById('status').value.trim();

    // ---- VALIDATION (if / else-if style — stops at first empty field) ----
    let isFormValid = true;

    if (fullName === "") {
        alert("Please enter full name.");
        document.getElementById('full-name').focus();
        document.getElementById('full-name').style.backgroundColor = "yellow";
        isFormValid = false;
    }
    else if (!email.includes('@') || !email.includes('.')) {
        alert("Please enter a valid email address.");
        document.getElementById('email').focus();
        document.getElementById('email').style.backgroundColor = "yellow";
        isFormValid = false;
    }
    else if (phone === "") {
        alert("Please enter phone number.");
        document.getElementById('phone-number').focus();
        document.getElementById('phone-number').style.backgroundColor = "yellow";
        isFormValid = false;
    }
    else if (employeeId === "") {
        alert("Please enter Employee ID.");
        document.getElementById('Employee-ID').focus();
        document.getElementById('Employee-ID').style.backgroundColor = "yellow";
        isFormValid = false;
    }
    else if (department === "") {
        alert("Please select a department.");
        document.getElementById('Department').focus();
        document.getElementById('Department').style.backgroundColor = "yellow";
        isFormValid = false;
    }
    else if (position === "") {
        alert("Please enter position.");
        document.getElementById('Position').focus();
        document.getElementById('Position').style.backgroundColor = "yellow";
        isFormValid = false;
    }
    else if (salary === "") {
        alert("Please enter salary.");
        document.getElementById('salary').focus();
        document.getElementById('salary').style.backgroundColor = "yellow";
        isFormValid = false;
    }
    else if (doj === "") {
        alert("Please select date of joining.");
        document.getElementById('doj').focus();
        document.getElementById('doj').style.backgroundColor = "yellow";
        isFormValid = false;
    }
    else if (status === "") {
        alert("Please select status.");
        document.getElementById('status').focus();
        document.getElementById('status').style.backgroundColor = "yellow";
        isFormValid = false;
    }

    // If anything failed validation, stop here — do NOT add/update the row
    if (!isFormValid) {
        return;
    }

    // ---- Build the row's HTML (only runs if validation passed) ----
    const formattedSalary = 'PKR ' + Number(salary).toLocaleString('en-US');
    const dateObj = new Date(doj);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    const statusClass = status === 'Active' ? 'badge-active' : 'badge-inactive';

    const rowHTML = `
        <td>#${employeeId}</td>
        <td class="fw-semibold">${fullName}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${department}</td>
        <td>${position}</td>
        <td>${formattedSalary}</td>
        <td>${formattedDate}</td>
        <td><span class="badge-status ${statusClass}">${status}</span></td>
        <td>
            <div class="d-flex gap-2 justify-content-center">
                <button type="button" class="btn-action btn-view" title="View">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </button>
                <button type="button" class="btn-action btn-edit" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                    </svg>
                </button>
                <button type="button" class="btn-action btn-delete" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        </td>
    `;

    if (editingRow) {
        // ---- UPDATE existing row ----
        editingRow.innerHTML = rowHTML;
        setRowData(editingRow, { employeeId, fullName, email, phone, department, position, salary, doj, status });
        editingRow = null;
        submitBtn.textContent = 'Add New Employee';
        alert("Employee updated successfully!");
    } else {
        // ---- ADD new row ----
        const row = document.createElement('tr');
        row.innerHTML = rowHTML;
        setRowData(row, { employeeId, fullName, email, phone, department, position, salary, doj, status });
        document.querySelector('.employee-table').appendChild(row);
        alert("Your form is submitted successfully!");
    }

    // Clear yellow highlights left over from a previous failed attempt
    document.getElementById('full-name').style.backgroundColor = '';
    document.getElementById('email').style.backgroundColor = '';
    document.getElementById('phone-number').style.backgroundColor = '';
    document.getElementById('Employee-ID').style.backgroundColor = '';
    document.getElementById('Department').style.backgroundColor = '';
    document.getElementById('Position').style.backgroundColor = '';
    document.getElementById('salary').style.backgroundColor = '';
    document.getElementById('doj').style.backgroundColor = '';
    document.getElementById('status').style.backgroundColor = '';

    this.reset();
});

// ---- Helper: store raw (unformatted) values on the row ----
// so Edit/View can read back exact original data (not the display-formatted text)
function setRowData(row, data) {
    row.dataset.employeeId = data.employeeId;
    row.dataset.fullName = data.fullName;
    row.dataset.email = data.email;
    row.dataset.phone = data.phone;
    row.dataset.department = data.department;
    row.dataset.position = data.position;
    row.dataset.salary = data.salary;
    row.dataset.doj = data.doj;
    row.dataset.status = data.status;
}

// ---- TABLE CLICK: View / Edit / Delete ----
document.querySelector('.employee-table').addEventListener('click', function (e) {
    const row = e.target.closest('tr'); // find which row was clicked
    if (!row) return; // clicked outside any row — ignore

    // DELETE (with confirmation)
    if (e.target.closest('.btn-delete')) {
        const name = row.dataset.fullName || 'this employee';
        const confirmDelete = confirm(`Are you sure you want to delete ${name}? This cannot be undone.`);
        if (confirmDelete) {
            row.remove();
        }
        return;
    }

    // VIEW (simple alert)
    if (e.target.closest('.btn-view')) {
        const formattedSalary = 'PKR ' + Number(row.dataset.salary).toLocaleString('en-US');
        const formattedDoj = new Date(row.dataset.doj).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
        });

        alert(
            `Employee ID: #${row.dataset.employeeId}\n` +
            `Name: ${row.dataset.fullName}\n` +
            `Email: ${row.dataset.email}\n` +
            `Phone: ${row.dataset.phone}\n` +
            `Department: ${row.dataset.department}\n` +
            `Position: ${row.dataset.position}\n` +
            `Salary: ${formattedSalary}\n` +
            `Date of Joining: ${formattedDoj}\n` +
            `Status: ${row.dataset.status}`
        );
        return;
    }

    // EDIT (fills the form, remembers which row to update on next submit)
    if (e.target.closest('.btn-edit')) {
        document.getElementById('full-name').value = row.dataset.fullName;
        document.getElementById('email').value = row.dataset.email;
        document.getElementById('phone-number').value = row.dataset.phone;
        document.getElementById('Employee-ID').value = row.dataset.employeeId;
        document.getElementById('Department').value = row.dataset.department;
        document.getElementById('Position').value = row.dataset.position;
        document.getElementById('salary').value = row.dataset.salary;
        document.getElementById('doj').value = row.dataset.doj;
        document.getElementById('status').value = row.dataset.status;

        editingRow = row;
        submitBtn.textContent = 'Update Employee';

        form.scrollIntoView({ behavior: 'smooth' });
        return;
    }
});