let navbar = (function () {
	pub = {};

	createHTML = (currentPage) => {
		let html = [
			'<nav role="navigation" class="nav-menu w-nav-menu">',
			//'<a href="index.html" aria-current="page" class="nav-link w-nav-link %">Home</a>',
			'<a href="asm.html" class="nav-link w-nav-link %" style="color:rgb(255, 100, 0)"><b>Structural Geology - Advanced Structural Mapping - Bermagui</a>',
			'<a href="gfg.html" class="nav-link w-nav-link %" style="color:rgb(12, 255, 25)"><b>Structural Geophysics - VIEPS GFG</a>',
			'<a href="#" class="close-x w-hidden-main w-hidden-medium w-hidden-small">×</a>',
			"</nav>",
		];
		for (let i = 1; i < html.length - 2; i += 1) {
			let pageRef = html[i].split('"')[1];
			let unformatted = html[i].split("%");
			if (pageRef == currentPage) {
				html[i] = unformatted[0] + "w--current" + unformatted[1];
			} else {
				html[i] = unformatted[0] + "" + unformatted[1];
			}
			//console.log(html[i]);
		}
		return html.join("\n");
	};

	pub.setup = () => {
		let path = window.location.pathname;
		let currentPage = path.split("/").pop();

		$("#navbar").append(createHTML(currentPage));
		console.log("Navbar loaded via js");
	};

	return pub;
})();

$(document).ready(pub.setup);
