 let cl = console.log;
 
 let players = ["Alice", "Bob", "Charlie", "David", "Eve"];
 
 let a = document.getElementById("info")
 
	let result = "";
	
players.forEach(player => {
	result +=
	`
	<li class="list-group"> ${player} </li>`;
	
});

a.innerHTML = result