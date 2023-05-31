(function (){
    "use strict";
    function loader(){

        const fnInput = document.getElementById("fname");
        const lnInput = document.getElementById("lname");
        const phInput = document.getElementById("phone");
        const btnSubmit = document.querySelector("[type=\"submit\"]");
        const contacts = document.getElementsByTagName("table")[0];//the first elemnt of the array
        const inputFrm = document.getElementsByTagName("form")[0];
        contacts.id = "contactsTbl";

        let contactIdCounter = 0;
        
        const addContact = function (){
            alert(fnInput.value);
            const col1 = document.createElement("td");
            col1.innerText = fnInput.value;
            const col2 = document.createElement("td");
            col2.innerText= lnInput.value;
            const col3 = document.createElement("td");
            col3.innerText = phInput.value;
            const stat = document.createElement("td");
            stat.innerText = "active";
            const newContact = document.createElement("tr");
            newContact.id = "contact" + (contactIdCounter + 1);
            alert(col3.innerText);
            stat.style.display = "none";

            newContact.appendChild(col1);
            newContact.appendChild(col2);
            newContact.appendChild(col3);
            newContact.appendChild(stat);
            contacts.appendChild(newContact);

            
        };
        

        btnSubmit.onclick = function(evt){ 
            evt.preventDefault();
            if(fnInput.value && lnInput.value && phInput.value){
                addContact();
            }
        };
        
    }
    window.onload = loader;

})();