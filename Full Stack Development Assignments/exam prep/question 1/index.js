const addRow = () => {
  let table = document.getElementById("table");
  const rows = table.rows.length;
  let row = table.insertRow(rows);
  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let rollnumber = document.createElement("input");
  rollnumber.type = "text";
  let Name = document.createElement("input");
  Name.type = "text";

  c1.appendChild(checkbox)
  c2.appendChild(rollnumber)
  c3.appendChild(Name);
};


const deleteRow = () => {
    let table = document.getElementById("table");
    let rows = table.rows.length;


    for (let i = rows - 1; i >= 0; i--) {

        if (table.rows[i].cells[0].children[0].checked) {

            table.deleteRow(i);
        }
    }
};
