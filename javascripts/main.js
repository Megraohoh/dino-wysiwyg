$.ajax('./db/dinosaurs.json').done(function(data){
	var dinoArray = data.dinosaurs;
	makeDom(dinoArray);
}).fail(function(error){
	console.log("You've made a huge mistake", error);
});

function makeDom(myArrayToPrint) {
	var myDomString = "";
	for (var i =0; i < myArrayToPrint.length; i++) {
		if (counter % 3 === 0){
			myDomString += `<div class="row">`;
		}
		myDomString += `<div class="col-xs-6 col-md-4">`;
		myDomString += `<div class="dinoCard">`;
		myDomString += `<header><h1>${myArrayToPrint[i].type}</h1></header>`;
		myDomString += `<section>`;
		myDomString += `<img src="${myArrayToPrint[i].img}">`;
		myDomString += `<p class="bio">${myArrayToPrint[i].bio}</p>`;
		myDomString += `</section>`;
		myDomString += `<footer>${myArrayToPrint[i].info}</footer>`;
		myDomString += `</div></div></div>`;

		counter++;
		if (counter % 3 === 0) {
			myDomString += `</div>`;
		}
	}
	$("#dinosaurs").append(myDomString);
}

$("#dinosaurs").on("click", ".dinoCard", function(e){
	$(".dinoCard").removeClass("dottedBorder");
	$(this).addClass("dottedBorder");
	$("#textbox").val("").focus();
});

$("#textbox").keyup(mirrorText);

function mirrorText(e) {
	var selectedCard = $(".dottedBorder");
	var bioTyped = $("#textbox").val();
	var bio = $(".dottedBorder").find("p.bio");
	bio.html(bioTyped);     // bio = bioTyped;   

	if (e.keyCode == 13) {
		$("#textbox").val("");
	}
}