let AddTNdBtn = document.getElementById("addToNodes-btn");
let nodeName = document.getElementById("nodename-inp");
let nodeID = document.getElementById("nodeID-inp");
let isPublicInp = document.getElementById("ispublic-inp");
let serverIDGet = document.getElementById("nodeID-get-inp");
let getEl = [
	document.getElementById("get-el"),
	document.getElementById("get2-el"),
	document.getElementById("get3-el"),
	document.getElementById("get4-el"),
	document.getElementById("get5-el"),
	];
let additionalData = document.getElementById("additional-data-el");

console.log("Pro tip: Use clear() function to clear the console if the console is messy.");

function getIsPublic() {
	return isPublicInp.checked;
}

function addToServer() {
	alert("Are you sure to add your project to the BrowserExtend servers, you can't change this.");

	if (nodeID.value === "" || nodeName.value === "")
	{
		alert("Can't Generate a node, Node.ID or Node.name is missing check if you maded a typo");
		console.log("Stopped")
		return;
	}

	resetServer();
}

let node = {
	name: "NaN",
	id: "NaN",
	isPublic: false,
	additionalData: "NaN"
}

let nodes = [node];

nodes.pop();

function resetServer() {
	nodes.push({
		name: nodeName.value,
		id: nodeID.value,
		isPublic: isPublicInp.checked,
		additionalData: additionalData.value,
	});

	getEl[0].textContent = "Created A Node";
}

function getServer() {
	alert("Finding Server...");

	for (let i = 0; i < nodes.length; i++)
	{
		if (nodes[i].id === serverIDGet.value) {
			node.name = nodes[i].name;
			node.id = nodes[i].id;
			node.isPublic = nodes[i].isPublic;
			node.additionalData = nodes[i].additionalData

			let logContent = [,
			`name: ${node.name},`,
			`id: ${node.id},`,
			`isPublic: ${node.isPublic},`,
			`additionalData: ${node.additionalData},`,
			]

			for (let i2 = 0; i < getEl.length; i++)
			{
				getEl[i].textContent = logContent[i];
			}
		}
	}
}
