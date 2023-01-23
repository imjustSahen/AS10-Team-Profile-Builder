const generateManager = function (manager) {
  return `
        <div class="cards">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <hr class="line-spacer">
                <h4>Manager <i class="fa fa-coffee" aria-hidden="true"></i></h4>
            </div>
            <div class="card-body">
                <p class="id">ID: <span class="body-input">${manager.id}</span></p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: <span class="body-input">${manager.officeNumber}</span></p>
            </div>
        </div>
    `;
};

const generateEngineer = function (engineer) {
  return `
        <div class="cards">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <hr class="line-spacer">
                <h4>Engineer <i class="fa fa-desktop" aria-hidden="true"></i></h4>
            </div>
            <div class="card-body">
                <p class="id">ID: <span class="body-input">${engineer.id}</span></p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></p>
            </div>
        </div>
    `;
};

const generateIntern = function (intern) {
  return `
        <div class="cards">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <hr class="line-spacer">
                <h4>Intern <i class="fa fa-graduation-cap" aria-hidden="true"></i></h4>
            </div>
            <div class="card-body">
                <p class="id">ID: <span class="body-input">${intern.id}</span></p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: <span class="body-input">${intern.school}</span></p>
            </div>
        </div>
    `;
};

// Push array to HTML
renderInput = (data) => {
  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = generateManager(employee);

      pageArray.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);

      pageArray.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }
  }

  // Join strings
  const employeeCards = pageArray.join("");

  // Return generatePage
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

// Generate HTML
const generateTeamPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet">
    <title>Meet My Team</title>
  </head>
  <body>
      <header>
          <nav class="nav" id="nav">
              <a href="#home" id="home" class="team-name">Team MAKER</a>
          </nav>
      </header>
      <main>
        <h1>Meet My Team</h1>
        <hr id="header-spacer">
        <div class="container" id="team-cards">
              <!-- Display Cards -->
              ${employeeCards}
        </div>
      </main>
      <footer>
        <h3>Designed By:</h3>
        <p><a href="http://github.com/imjustSahen" target="_blank" rel="noopener noreferrer">imjustSahen</a></p>
      </footer>
    </body>
    </html>
    `;
};

module.exports = renderInput;
