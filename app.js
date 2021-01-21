let submit = document.getElementById('submit');
submit.addEventListener('click', add);
let count=0;
let secondcount=0;
function add(){
	let name = document.getElementById('name').value;
	let course = document.getElementById('course').value;
	if(name ==="" && course ===""){
		alert("Please enter name and course!");
	}else if(name ==="" ){
		alert("Please Enter Name!");
	}else if(course ===""){
		alert("Please Enter Course!");
	}else if(count <3){
		addElement();
		clear();
		count++;
	}else{
		if(secondcount ===0){
			createDiv();
			addDiv();
			clear();
			secondcount++;
		}else if(secondcount <3){
			addDiv();
			clear();
			secondcount++;
		}else{
			alert("Student Full!");
		}
	}
	
};
function addElement(){
	let name = document.getElementById('name').value;
	let course = document.getElementById('course').value;
	let container = document.querySelector('.another_container');
	var div =  document.createElement('div');
	var passname = document.createElement('p');
	var passcourse = document.createElement('p');
	passname.appendChild(document.createTextNode("Student Name: "+ name));
	passcourse.appendChild(document.createTextNode("Student Course: "+course));
	div.id ="content";
	container.appendChild(div);
	div.appendChild(passname);
	div.appendChild(passcourse);
}
function addDiv(){
	let name = document.getElementById('name').value;
	let course = document.getElementById('course').value;
	var addDiv = document.getElementById('addDiv');
	var secondDiv = document.createElement('div');
	var passname = document.createElement('p');
	var passcourse = document.createElement('p');
	secondDiv.id= "secondContent";
	passname.appendChild(document.createTextNode("Student Name: "+ name));
	passcourse.appendChild(document.createTextNode("Student Course: "+course));
	addDiv.appendChild(secondDiv);
	secondDiv.appendChild(passname);
	secondDiv.appendChild(passcourse);
}
function clear(){
	let name = document.getElementById('name').value="";
	let course = document.getElementById('course').value="";
}
function createDiv(){
	var addDiv =  document.createElement('div');
	let body = document.body;
	body.appendChild(addDiv);
	addDiv.id ="addDiv";
}
