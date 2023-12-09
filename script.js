const corsAnywhereUrl = 'http://localhost:8081'; // Use the URL where your cors-anywhere server is running
function submitForm() {
    // Get form values
    var rollNo = document.getElementById("rollNo").value;
    var name = document.getElementById("name").value;
    var branch = document.getElementById("branch").value;
    var section = document.getElementById("section").value;
    var currentYear = document.getElementById("currentYear").value;

    // Create an object with form values
    var formData = {
        "rollNo": rollNo,
        "name": name,
        "branch": branch,
        "section": section,
        "currentYear": currentYear
    };

    // Send POST request to the API endpoint via cors-anywhere proxy
    fetch(`${corsAnywhereUrl}/http://localhost:8080/student`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the API (if needed)
        console.log('Success:', data);
        alert('Form submitted successfully!');
        fetchData();
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });
}

function fetchData() {
    fetch(`${corsAnywhereUrl}/http://localhost:8080/students`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the data from the API (modify this part based on your requirements)
            console.log('Data from API:', data);
            displayData(data); // Call a function to display the data
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('Error fetching data:', error);
        });
}

// Function to display data (modify this based on your requirements)
function displayData(data) {
    // Get the table body element
    const tableBody = document.querySelector('table tbody');

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Loop through the data and create a table row for each student
    data.forEach(student => {
        const row = document.createElement('tr');

        // Create table cells for each property
        const rollNoCell = document.createElement('td');
        rollNoCell.textContent = student.rollNo;
        row.appendChild(rollNoCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        const branchCell = document.createElement('td');
        branchCell.textContent = student.branch;
        row.appendChild(branchCell);

        const sectionCell = document.createElement('td');
        sectionCell.textContent = student.section;
        row.appendChild(sectionCell);

        const currentYearCell = document.createElement('td');
        currentYearCell.textContent = student.currentYear;
        row.appendChild(currentYearCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Call the fetchData function when the script is loaded (you can trigger this based on user interactions or other events)
fetchData();


function submitFacultyForm() {
    // Get form values
    var facultyId = document.getElementById("facultyId").value;
    var name = document.getElementById("name").value;
    console.log("name val",name);
    var dept = document.getElementById("dept").value;


    // Create an object with form values
    var formData = {
        "facultyId": facultyId,
        "name": name,
        "dept": dept,
    };

    // Send POST request to the API endpoint via cors-anywhere proxy
    fetch(`${corsAnywhereUrl}/http://localhost:8080/faculties`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the API (if needed)
        console.log('Success:', data);
        alert('Form submitted successfully!');
        fetchFacultyData();
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });
}

function fetchFacultyData() {
    fetch(`${corsAnywhereUrl}/http://localhost:8080/faculties`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the data from the API (modify this part based on your requirements)
            console.log('Data from API:', data);
            displayFacultyData(data); // Call a function to display the data
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('Error fetching data:', error);
        });
}

// Function to display data (modify this based on your requirements)
function displayFacultyData(data) {
    // Get the faculty table body element
    const facultyTableBody = document.querySelector('#facultyTable tbody');

    // Clear existing faculty table rows
    facultyTableBody.innerHTML = '';

    // Loop through the data and create a table row for each faculty
    data.forEach(faculty => {
        const row = document.createElement('tr');

        // Create table cells for each property
        const facultyIdCell = document.createElement('td');
        facultyIdCell.textContent = faculty.facultyId;
        row.appendChild(facultyIdCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = faculty.name;
        row.appendChild(nameCell);

        const deptCell = document.createElement('td');
        deptCell.textContent = faculty.dept;
        row.appendChild(deptCell);

        // Append the row to the faculty table body
        facultyTableBody.appendChild(row);
    });
}

// Call the fetchData function when the script is loaded (you can trigger this based on user interactions or other events)
fetchFacultyData();