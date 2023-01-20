const generateManager = function (manager) {
  return `
        <div class="cards">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="fa fa-coffee" aria-hidden="true"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    `;
};

const generateEngineer = function (engineer) {
  return `
        <div class="cards">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="fa fa-desktop" aria-hidden="true"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    `;
};

const generateIntern = function (intern) {
  return `
        <div class="cards">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="fa fa-graduation-cap" aria-hidden="true"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    `;
};

// Push array to HTML
generateHTML = (data) => {
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
    <title>Meet My Team</title>
  </head>
  <body>
      <header>
          <nav class="nav" id="nav">
              <a href="#home" id="home">Meet My Team</a>
          </nav>
      </header>
      <main>
          <div class="container" id="team-cards">
                <!-- Display Cards -->
                ${employeeCards}
          </div>
      </main>
      <footer>
        <h3>Designed By:</h3>
        <p><a href="http://github.com/imjustSahen">imjustSahen</a></p>
      </footer>
    </body>
    </html>
    `;
};

module.exports = generateHTML;
