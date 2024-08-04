 let cl = console.log;
 
 let Info=document.getElementById("info");
 
 
const players = [
    {
        playerName: "Lionel Messi",
        game: "Soccer",
        country: "Argentina",
        skills: ["Dribbling", "Passing", "Shooting"]
    },
    {
        playerName: "LeBron James",
        game: "Basketball",
        country: "USA",
        skills: ["Dunking", "Passing", "Defense"]
    },
    {
        playerName: "Virat Kohli",
        game: "Cricket",
        country: "India",
        skills: ["Batting", "Fielding", "Leadership"]
    },
    {
        playerName: "Richie McCaw",
        game: "Rugby",
        country: "New Zealand",
        skills: ["Tackling", "Leadership", "Stamina"]
    },
    {
        playerName: "Serena Williams",
        game: "Tennis",
        country: "USA",
        skills: ["Serving", "Baseline Play", "Mental Toughness"]
    },
    {
        playerName: "Ma Long",
        game: "Table Tennis",
        country: "China",
        skills: ["Speed", "Spin", "Accuracy"]
    },
    {
        playerName: "Wayne Gretzky",
        game: "Ice Hockey",
        country: "Canada",
        skills: ["Skating", "Shooting", "Vision"]
    },
    {
        playerName: "Babe Ruth",
        game: "Baseball",
        country: "USA",
        skills: ["Hitting", "Pitching", "Base Running"]
    }
];

	let result="";
	
 players.forEach(player =>{
	 result+=
	 `
	 <tr>
		<td>${player.playerName}</td>
		<td>${player.game}</td>
		<td>${player.country}</td>
		<td>${player.skills}</td>
	 </tr>
	 
	 `
	 
 });
 
 Info.innerHTML=result;
 cl(result);
