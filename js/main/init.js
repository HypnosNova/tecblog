$(document).foundation();
//$("#mainView").load("pages/home.html");


function changePage(pageName) {
	$("#mainBody").empty();
	$("#mainBody").load("pages/" + pageName + ".html");
	storage.historyPage=pageName;
	localStorage.historyPage=pageName;
}

function changeMenu(menuName) {
	$("#leftSide").empty();
	$("#leftSide").load("menu/" + menuName + ".html");
	$(".menu ul li").menu();
	storage.menuName=menuName;
	localStorage.menuName=menuName;
}

function goHome(){
	$("#mainBody").empty();
	$("#mainBody").load("pages/home.html");
	$("#leftSide").empty();
	pageName="home";
	storage.historyPage=pageName;
	localStorage.historyPage=pageName;
	localStorage.menuName=pageName;
}
