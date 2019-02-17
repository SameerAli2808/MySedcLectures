console.log("This script works great!");
// Program to draw a table of given number of row and column by the user

let rowNumber = document.getElementById("rowNumber");
let colNumber = document.getElementById("colNumber");
let myTable = document.getElementById("myTable");
let btnTable = document.getElementById("makeTable");

btnTable.addEventListener("click", function(){
        let tableHtml = "";
        myTable.innerHTML = "";
        for(i = 1; i <= rowNumber.value; i++){
                tableHtml += `<tr>`;
                for(x = 1; x <= colNumber.value; x++){
                        tableHtml += `<td height="50" width="50">${i},${x}</td>`;
                }
                tableHtml += `</tr>`;
        }
        rowNumber.value = "";
        colNumber.value = "";
        myTable.innerHTML = `<table align="center" border="1">${tableHtml}</table>`;
})
