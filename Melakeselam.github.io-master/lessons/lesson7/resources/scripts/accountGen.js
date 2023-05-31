/*Melakeselam Moges Mengistu (611124)
CS472 Web Application Programming
submission date: May 30, 2020

Task: createa small JavaScript application that uses a module for creating different kinds of banking accounts.

associated html file: accountGen.html, 
associated css file: accountGen.css
*/


    loader = function() {

        const acctName = document.getElementById("accountName");
        const deposit = document.getElementById("deposit");
        const createAcc = document.getElementById("createAcc");
        const display = document.getElementById("displayArea");
        let accountInfoList =[];

        //the module
        const acctGen = (function(){

            //private attributes
            let account;
            let balance;

            //public function
            const create = function(){
                const validName = /^[A-Za-z]+(?=\d*)/;
                const validBalance = /^\d+(\.\d{2})?$/;
                if( validName.test(acctName.value) && validBalance.test(deposit.value)){
                    
                    account = acctName.value;
                    balance = deposit.value;

                    return {
                        //the newly created account object
                        account_name : account,
                        account_balance: balance
                    };
                }
                else{
                    return null;
                } 
            }

            return {
                creator: create
            };  
        })();

        //event handler
        createAcc.onclick = ()=> {
            const newAccount = acctGen.creator();
            if(newAccount){
                accountInfoList.push(newAccount); //insert new account object to list
                display.value = display.value + "Account name:   " + 
                                newAccount.account_name + "    Balance:   " + 
                                newAccount.account_balance + "\n";  
            } 
            acctName.value = "";
            deposit.value = ""; 
            acctName.focus();    
        };
    };
    
    window.onload = loader;
