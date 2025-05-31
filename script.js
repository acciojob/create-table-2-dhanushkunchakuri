function createTable() {
	let table = document.getElementById("myTable");
	let rows = parseInt(prompt("Input number of rows"));
	let cols = parseInt(prompt("Input number of columns"));

	if (isNaN(rows) || isNaN(cols)) {
		alert("Please enter valid numbers.");
		return;
	}

	if (rows <= 0 || cols <= 0) {
		alert("Please enter positive numbers.");
		return;
	}

	table.innerHTML = "";

	for (let i = 0; i < rows; i++) {
		let curr = document.createElement("tr");

		for (let j = 0; j < cols; j++) {
			let data;
			if (i === 0) {
				data = document.createElement("th");
			} else {
				data = document.createElement("td");
			}
			data.innerHTML = `Row-${i} Column-${j}`;
			curr.appendChild(data);
		}
		table.appendChild(curr);
	}
}
