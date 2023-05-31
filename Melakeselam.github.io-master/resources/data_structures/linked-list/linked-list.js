// AUTHOR: MELAKESELAM MOGES MENGISTU
// DATE: JUNE 1, 2020 
// ``````````````````````````````````````````````````````````````````````````````````````````````
// This is a javascript linked list data structure with some useful methods including an internal
// iterator. This is code can be used in any way the user sees fit and can be modified accordingly.
// 
// You can create a linked list with it using the following approach:
//
// SETTING UP
// ==========
//   [list-name] = linkedList();
// 
// The following methods are available for use with each linked list that is generated.
//
//  METHODS:
//  ========
//   [list-name].add() 
//   [list-name].clear() 
//   [list-name].dequeue()
//   [list-name].enqueue()
//   [list-name].findAllElements()
//   [list-name].findAnElement()
//   [list-name].isEmpty()
//   [list-name].iterateNext()
//   [list-name].itrIsNext()
//   [list-name].length()
//   [list-name].pop()       
//   [list-name].push()
//   [list-name].remove()
//   [list-name].removeAllElements()
//   [list-name].removeAnElement()
//   [list-name].removeFirst()
//   [list-name].removeLast()
//   [list-name].resetIterator()
//   [list-name].toString()


let linkedList = function(){
    let head;
    let tail;
    let size;
    let currItrNode;//pointer to the current position of the iterator
    
    //private
    //input: none
    //return type: object
    //test passed
    node = function(){
        let prev,next,value = null;
        return {
            prev: prev,
            next: next,
            value: value
        }; 
    };
    
    //private
    //input: none
    //return type: void
    //test passed
    const init = function(){
        head = node();
        tail = node();
        currItrNode = head.next;
        size = 0;
    };

    //public
    //input: none
    //return type: current size of the list
    //test passed
    const length = ()=>(size);
    
    //public
    //input: an element of any type
    //return type: void
    //this adds new element to the head hence the first element is found at the tail
    //test passed
    const add = function(val){
        let newNode = node();
        newNode.value = val;
        
        if(!head.next){
            //if the new node is the first node, 
            // it resets the iterator position
            //and the tail to this node
            tail.next = currItrNode = newNode;
        }else{
            //if there is an existing element, it will point to the new element as previous
            head.next.prev = newNode;
        }
        newNode.next = head.next;
        head.next = newNode;
        size++;
    };

    //public
    //alternative api to add
    //test passed
    const push = add;
    const enqueue = add;


    //private
    //input: a node
    //return type: void
    //this function assumes that delNode already exists and will not check
    //test passed
    const deleteNode = function(delNode){
        let pos;
        //checks the position of the node
        if(!delNode.next && !delNode.prev){
            pos = 'only';
        }else if(!delNode.next){
            pos = 'tail';
        }else if(!delNode.prev){
            pos = 'head';
        }else {
            pos = 'middle';
        }

        switch(pos){
            case 'only':
                //only one node in the list, head and tail both pointing to it
                head.next = tail.next = null;
                currItrNode = tail.next;
                break;
            case 'head':
                delNode.next.prev = delNode.prev;//null grounding
                head.next = delNode.next;//shifted head pointer to next
                break;
            case 'tail':
                delNode.prev.next = delNode.next;//null grounding
                tail.next = delNode.prev;//shifted tail pointer to previous
                currItrNode = tail.next;
                break;
            default: 
                delNode.prev.next = delNode.next;
                delNode.next.prev = delNode.prev;
                break;
        }
        
        size--;
    };
    
    //public
    //input: none
    //return type: boolean
    //test passed
    const isEmpty = ()=>(head.next == null);

    //public
    //finds the first element that has a value of val
    //if the element does not exist it returns null
    //input: an element of any type
    //return type: a node
    //test passed
    const findAnElement = function(val){
        current = head.next;
        while(current){
            if(current.value.toString() === val.toString()){
                return current;
            }
            current = current.next;
        }
        return null; 
    };

    //public
    //finds all elements that have a value of val
    //if the element does not exist it returns an empty array
    //input: an element of any type
    //return type: an array of nodes
    //test passed
    const findAllElements = function(val){
        current = head.next;
        elements = [];
        while(current){
            if(current.value.toString() === val.toString()){
                elements.push(current);
            }
            current = current.next;
        }
        return elements; 
    };

    //public
    //remove all nodes
    //test passed
    const clear = ()=>{head.next = tail.next = null;};

    //public
    //removes the first element it finds with a value of val
    //parameter type; any type
    //return type: void
    //test passed
    const removeAnElement = function(val) {
        if(!isEmpty()){
            delNode = findAnElement(val);
            if(delNode){
                deleteNode(delNode);
            }
        }
    };

    //public
    //removes the earliest element entered in the list 
    //parameter type: none
    //return type: an element of any type
    //test passed
    const remove = function() {
        if(!isEmpty()){
            let remElement = tail.next;
            let value = remElement.value;
            deleteNode(remElement);
            return value;
        }
        return null;
    };

    //public
    //alternative api to remove
    const removeFirst = remove;
    //when used as a queue
    const dequeue = remove;
   

    //public
    //removes all element it finds with a value of val
    //parameter type: any type
    //return type: void
    //test passed
    const removeAllElements = function(val) {
        let elements = findAllElements(val);
        for(const e of elements){
            deleteNode(e);
        }
    };

    //public
    //removes the first element in the list
    //parameter type: any type
    //return type: an element of any type added last to the list
    //test passed
    const removeLast = function() {
        if(!isEmpty()){
            let remNode = head.next;
            let value = remNode.value;//sets the value of the first node to return
            deleteNode(remNode);
            return value;
        }
        return null;
    };

    //public
    //alternative to the removeFirst function
    //when list is used as stack
    //test passed
    const pop = removeLast;

    //pubic
    //iterator
    //parameter type: none
    //return type: an element on any type
    //iterates starting from the first element added hence starts from the tail
    //test passed
    const iterateNext = function() {
        
        if(!isEmpty() && currItrNode){
            let value = currItrNode.value;
            currItrNode = currItrNode.prev;
            return value;
        } else if(isEmpty() || !currItrNode){
            //automatically resets the iterator and return null
            currItrNode = tail.next;
            console.log("The iterator is being reset!");
            return null;
        }
    };

    //public
    //iterator stopper
    //test passed
    const itrIsNext = ()=>{
        if(!currItrNode){console.log("Reset the iterator with [list-name].resetIterator() or on the next call to [list-name].iteratorNext(), it will reset.");}
        return currItrNode != null;};

    //public
    //reset iterator
    //parameter type: none
    //return type: none
    //resets the iterate to point to the tail - the first element added
    //test passed
    const resetIterator = ()=>{
        currItrNode = tail.next; 
    };

    //public
    //returns the values of the contained elements in a string format
    //test passed
    const toString = ()=>{
        let string ="[";
        let current = tail.next;
        while(current){
            string = string + current.value.toString();
            current = current.prev;
            if(current){
                string = string + ", " ;
            }
        }
        string = string + "]";
        return string; 
    };

    //called on definition of a list
    //test passed
    init();

    //returned apis
    return {
        add: add,
        clear: clear,
        dequeue: dequeue,
        enqueue: enqueue,
        findAllElements: findAllElements,
        findAnElement: findAnElement,
        isEmpty: isEmpty,
        iterateNext: iterateNext,
        itrIsNext: itrIsNext,
        length: length,
        pop: pop,        
        push: push,
        remove: remove,
        removeAllElements: removeAllElements,
        removeAnElement: removeAnElement,
        removeFirst: removeFirst,
        removeLast: removeLast, 
        resetIterator: resetIterator,
        toString: toString
    };
};


