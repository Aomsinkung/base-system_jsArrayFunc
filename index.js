let AddTSrvBtn = document.getElementById("addToServer-btn");
let serverName = document.getElementById("serverName-inp");
let serverID = document.getElementById("serverID-inp");
let isPublicInp = document.getElementById("ispublic-inp");
let serverIDGet = document.getElementById("serverID-get-inp");

console.log("Pro tip: Use clear() function to clear the console if the console is messy.");

function getIsPublic() {
	return isPublicInp.checked;
}

function addToServer() {
	alert("Are you sure to add your project to the BrowserExtend servers, you can't change this.");

	if (serverID.value === "" || serverName.value === "")
	{
		alert("Can't Generate Server, ServerID or ServerName is missing check if you maded a typo");
		console.log("Stopped")
		return;
	}

	console.log("Adding Server...");
	servers.pop();
	resetServer();
	console.log("Added Server");
}

let server = {
	name: "NaN",
	id: "NaN",
	isPublic: false,
}

let servers = [server];

function resetServer() {
	console.log("Resetting server system : " + serverID.value.toString());

	servers.push({
		name: serverName.value,
		id: serverID.value,
		isPublic: isPublicInp.checked,
	});

	console.log(servers)

	console.log("Resetted server system : " + serverID.value.toString());
}

function getServer() {
	alert("Finding Server...");
	console.log(servers.length)

	for (let i = 0; i < servers.length; i++)
	{
		console.log("Finding...");
		if (servers[i].id === serverIDGet.value) {
			console.log("Found It!");
			server.name = servers[i].name;
			server.id = servers[i].id;
			server.isPublic = servers[i].isPublic;

			console.log("\n");
			console.log("Data: ");
			console.log(server);
		}
	}
}