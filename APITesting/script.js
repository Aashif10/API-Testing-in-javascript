fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  .then(response => {
    return response.json();
  })
  .then(objectData => {
    console.log(objectData);
    let tableData = "";
      objectData.data.forEach(value => {
          tableData += `<tr>
        <td>${value.ID}</td>
          <td>${value.Nation}</td>
          <td>${value.Population}</td>
          <td>${value.Year}</td>
          </tr>`;
      });
    
    document.getElementById("result").innerHTML = tableData;
  })
  
