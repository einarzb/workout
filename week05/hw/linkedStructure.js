
var makeList = function(){

    function ListConstructor() {
        this.head = null;
        this.tail = null;
    }

    var constract = {};

    //method of constract object - creates new node
    constract.node = function(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }

    constract.pushHead = function(data){

     var newNode = new this.node(data);

     if(this.head){
         this.head.prev = newNode;
         newNode.next = this.head;
         this.head = newNode;
     }
     else {
         this.head = newNode;
         this.tail = newNode;
     }
}

constract.pushTail = function(data)
{
    var newNode = new this.node(data);
    if(this.head){
        this.tail.next = newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
            }
       else
       {
        this.head = newNode;
        this.tail = newNode;
        }
   return newNode;
}

constract.popHead = function(){
    var temp = this.head;
    if(this.head){
        this.head = this.head.next;
    }
    return temp;
 }

constract.popTail= function(){
     var temp=this.tail;
     if(this.tail){
         this.tail = this.tail.prev;
     }
     return temp;
 }


 constract.find= function(data, compFunc)
    {
        if(this.head){
        var current =this.head;
        var countPos=0;
        while(current.next!=null){
            if((current.data==data && compFunc==null) || compFunc(current.data,data)){
                return countPos;
                }
            current = current.next;
            ++countPos;
        }
            }
        return -1;
    }


 constract.printList = function(){
        var printString="";
        var current =this.head;
        while(current!=null){
            printString += " " + current.data;
            current = current.next;
        }
        console.log(printString);
    }


    ListConstructor.prototype = constract;
    return ListConstructor;


}();


    var list = new makeList();
    list.pushTail(16);
    list.pushTail(30);
    list.pushHead(5);
    list.pushHead(6);
    list.pushHead(9);
    list.pushHead(20);
    list.pushHead(8);
    list.printList();
    list.popHead();
    list.printList();
    list.popTail();
    list.printList();
    console.log(list.find(30));
    console.log(list.find(16));
