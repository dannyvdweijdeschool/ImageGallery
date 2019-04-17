var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

function button1Active(){
	count = 1;
	if (button1.classlist.contains("active")) {
		button1.classlist.remove("active");
	}else{
		button1.classlist.add("active");
		while(document.getElementById("image" + count) != null){
			if (document.getElementById("image" + count).classlist.contains("active1")) {
				document.getElementById("image" + count).classlist.remove("remove1")
			}else if(document.getElementById("image" + count).classlist.contains("active2")){
				document.getElementById("image" + count).classlist.add("remove2")
			}else if(document.getElementById("image" + count).classlist.contains("active3")){
				document.getElementById("image" + count).classlist.add("remove3")
			}
			count++;
		}
	}
}