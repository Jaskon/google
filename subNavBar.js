function subNavBar() {
	this.offset = 5;
	this.accept = function(object, parent) {
		object.classList.add("subNavBar");
		var left = parent.offsetLeft + (parent.clientWidth - object.clientWidth)/2;
		if (left < 5)
			left = 5;
		else if (left > document.body.clientWidth - object.clientWidth - this.offset)
			left = document.body.clientWidth - object.clientWidth - this.offset;
		object.style.left = left;
	}

	this.recount = function(object, parent) {
		object.style.top = parent.offsetTop + parent.clientHeight + this.offset;
		var left = parent.offsetLeft + (parent.clientWidth - object.clientWidth)/2;
		if (left < 5)
			left = 5;
		else if (left > document.body.clientWidth - object.clientWidth - this.offset)
			left = document.body.clientWidth - object.clientWidth - this.offset;
		object.style.left = left;
	}
}
// change