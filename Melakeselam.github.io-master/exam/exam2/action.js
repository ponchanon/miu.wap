(
    function(){
        "use strict";
        const loader = function(){
            const fnInput = document.getElementById("first_name");
            const lnInput = document.getElementById("last_name");
            const phInput = document.getElementById("phone");
            const btnAdd = document.getElementById("btn_add");
            const contacts = document.getElementById("contacts");

            const btn = function(row){
                if(row){
                    return function(evt){
                        evt.preventDefault();
                        if(fnInput.value && lnInput.value && phInput.value){
                            let newRow = row; 
                            modContact(newRow);
                        }
                        btnAdd.onclick = btn();//reset
                    };
                }else{
                    return function(evt){
                        evt.preventDefault();
                        if(fnInput.value && lnInput.value && phInput.value){
                            let newRow = contacts.rows.length; 
                            addContact(newRow);
                        }
                    };
                }
            };

            const clearFields = function(){
                fnInput.value ="";
                lnInput.value = "";
                phInput.value = "";
            };

            const delHandle = function(){
                let row = parseInt(this.id);
               contacts.deleteRow(row);
            };

            const editHandle = function(){
                let row = parseInt(this.id);
                alert(row);
                fnInput.value = contacts.rows[row].cells[0].innerText;
                lnInput.value = contacts.rows[row].cells[1].innerText;
                phInput.value = contacts.rows[row].cells[2].innerText;

                btnAdd.onclick= btn(row);
            };

            const addContact = function(row){
                const col1 = document.createElement("td");
                col1.innerText = fnInput.value;
                const col2 = document.createElement("td");
                col2.innerText = lnInput.value;
                const col3 = document.createElement("td");
                col3.innerText = phInput.value;
                const col4 = document.createElement("td");

                const editContact = document.createElement("a");
                editContact.innerHTML = "Edit";
                editContact.id = (row)+"e";
                editContact.onclick = editHandle;
                

                const delContact = document.createElement("a");
                delContact.innerHTML = "Delete";
                delContact.id = (row)+"d";
                delContact.onclick = delHandle;

                const divider = document.createTextNode(" | ");
                col4.appendChild(editContact);
                col4.appendChild(divider);
                col4.appendChild(delContact);

                const contactRow = document.createElement("tr");
                contactRow.id = "c"+(row);
                
                delContact.id = "d"+(row);
                contactRow.appendChild(col1);
                contactRow.appendChild(col2);
                contactRow.appendChild(col3);
                contactRow.appendChild(col4);

                contacts.appendChild(contactRow);
                clearFields();

            };

            const modContact = function(row){
                const col1 = document.createElement("td");
                col1.innerText = fnInput.value;
                const col2 = document.createElement("td");
                col2.innerText = lnInput.value;
                const col3 = document.createElement("td");
                col3.innerText = phInput.value;
                const col4 = document.createElement("td");

                const editContact = document.createElement("a");
                editContact.innerHTML = "Edit";
                editContact.id = (row)+"e";
                editContact.onclick = editHandle;
                
                const delContact = document.createElement("a");
                delContact.innerHTML = "Delete";
                delContact.id = (row)+"d";
                delContact.onclick = delHandle;
                
                const divider = document.createTextNode(" | ");
                col4.appendChild(editContact);
                col4.appendChild(divider);
                col4.appendChild(delContact);

                const contactRow = document.createElement("tr");
                contactRow.id = "c"+(row);
                
                delContact.id = "d"+(row);
                contactRow.appendChild(col1);
                contactRow.appendChild(col2);
                contactRow.appendChild(col3);
                contactRow.appendChild(col4);

                contacts.replaceChild(contactRow,contacts.rows[row]);
                clearFields();

            };

            btnAdd.onclick= btn();
        };

        window.onload = loader;
    }
)();