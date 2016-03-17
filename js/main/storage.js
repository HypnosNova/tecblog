var storage=localStorage;
//storage.historyPage="home"
//storage.menuName=""
console.log(storage.historyPage);
if(!storage.historyPage){
	storage.historyPage="home"
	changePage(storage.historyPage);
	changeMenu(storage.menuName);
}else{
	changePage(storage.historyPage);
	changeMenu(storage.menuName);
}
