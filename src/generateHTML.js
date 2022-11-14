function generateHTML(team) {

    var html = 
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>Employee Profile Manager</title>
    </head>
    
    <body>
        <header class="container-fluid bg-dark p-1">
            <div class="jumbotron col-11">
                <h1 class="text-center text-white">Employee's Team</h1>
            </div>
        </header>
        <main>
            <div class="container-fluid">
                <div class="row justify-content-center">
             
            ${teamgeneratHTML(team)}
    
               </div>
            </div>
        </main>

    </body>
    
    </html>`
  
    return html;
  }

  function teamgeneratHTML(team){
    var cards = [];
    for(var i = 0; i < team.length; i++){
      cards.push(`<div class="col-5 mt-5">
      <div class="card h-100">
      <div class="card-header bg-secondary"><h2>${team[i].getName()}</h2>
        <h4 class="card-title">${team[i].getRole()}</h4></div>
        <table class="table table-sm">
          <tbody>
              <tr>
              <th scope="row">ID</th>
              <td>${team[i].getId()}</td>
              </tr>
              <tr>
              <th scope="row">Email</th>
              <td><a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></td>
              </tr>
              ${getInfo(team[i])}
          </tbody>
          </table>
      </div>
      </div>
      `);
    }
    return cards.join("");
}

function getInfo(teamMember){
    switch(teamMember.getRole()){
      case "Manager" : 
          return `<tr>
          <th scope="row">Office Number</th>
          <td>${teamMember.getOfficeNumber()}</td>
          </tr>`
      case "Engineer" :
          return `<tr>
          <th scope="row">Github</th>
          <td><a href="https://github.com/${teamMember.getGithub()}" target="_blank">${teamMember.getGithub()}</a></td>
          </tr>`
      case "Intern" :
          return `<tr>
          <th scope="row">School</th>
          <td>${teamMember.getSchool()}</td>
          </tr>`

    }
}
      
  module.exports = generateHTML;
  