function firstNonRepeatedChar(str) {
	let s="";
 for(let i=0;i<str.length;i++){
	 let x=str.charAt(i);
	 let c=0;

	 for(let j=0;j<str.length;j++){
		 if(x===str.charAt(j)){
			 c++;
		 }
	 }
	 if(c==1){
		 s=s+str.charAt(i);
	 }
 }
 return s;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
