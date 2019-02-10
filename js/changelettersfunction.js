function changeLettersInInventory(name) {
	let newName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
	return newName;
}