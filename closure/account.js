var accountInfoList=[];
window.onload = chargement;
function chargement() {
	document.getElementById("create").onclick = createAccount;

}
function Account(accname, balance) {
	this.accname = accname,
	this.balance = balance,
	this.fulldetails = function() {
		return "\n Account Name : "+this.accname+" Balance "+this.depvalue;
	}
}
function createAccount(){
    var accnmae = document.getElementById("account").value;
    var depvalue = document.getElementById("deposit").value;

    var newAccount = new Account(accnmae, depvalue);
   
    var taille=accountInfoList.push(accnmae);
    addToArea();
   
   // var mtexta = document.getElementById("mtext");
   // mtexta.value +="\n Account Name : "+accnmae+" Balance "+depvalue;

}
function addToArea(){
  
    //const values = Object.values(accountInfoList)
    alert("ca donne ");
    for (var i = 0; i < accountInfoList.length; i++) {
        alert(accountInfoList[i]);
        //Do something
    }

}