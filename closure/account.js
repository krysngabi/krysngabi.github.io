(function () {
    "use strict"
window.onload=function(){
	document.getElementById("create").onclick=createaccount;
}

var accountlist=[];
var i=0;
var createaccount=(function clickacc(){
	
	var bankHandler=function(){
		
		var acctType=document.getElementById("account").value;
		var deposit=document.getElementById("deposit").value;
		var getaccttype = function () {
			return acctType
			};
          var  getdeposit = function () {
			  return deposit };
			
			return {
				getaccttype:getaccttype,
				getdeposit:getdeposit
			}
		} 
		return function(){
			accountlist.push(bankHandler());
			showAccount();
		}
		
		
	})();
	var showAccount=function(){	
		var textacc="";
		for (let acct of accountlist) {
            textacc += `Account: ${acct.getaccttype()}  Balance: ${acct.getdeposit()} \n`;
        }
		  document.getElementById("mtext").value = textacc;
	}
		
   
})();
	