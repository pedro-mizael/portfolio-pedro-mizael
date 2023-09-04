function show(item) {
	let div = document.getElementById(item.id);
	let menu = "menu-"+ item.id;
	let navitem = document.getElementById(menu);

	window.location.replace(window.location.hash = "#"+ item.id)
}

function focus() {
	let hash = window.location.hash;
	hash = hash.substring(1);
	document.getElementById(hash).style = "display: block";

	let active = document.querySelectorAll(".sobre");

	for (let act of active) {
		if (act.id != hash ) {
			act.style = "display: none;"
		}else{
			act.style = "display: flex;"
		}
	}
}