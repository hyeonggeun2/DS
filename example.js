function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  // 링크드 리스트는 처음(head)를 기준으로 탐색함
  this.head = null;

  // 가장 값을 마지막에 추가
  LinkedList.prototype.addNode = function(data) {
    const newNode = new Node(data);
    let currentNode = this.head;
    // head가 null이면 처음에 추가해야 한다.
    if () ;
    // 그렇지 않으면 마지막 노드의 다음에 추가한다.
    else {

    }
  }

  // 가장 마지막 노드를 삭제
  LinkedList.prototype.deleteNode = function() {
    let currentNode = this.head;

  // 전체 노드 출력
  LinkedList.prototype.printAllNode = function() {
    let currentNode = this.head;
  }
}

const list = new LinkedList();
list.addNode('a');
console.log(list);
list.addNode('b');
console.log(list);
list.addNode('c');
console.log(list);
list.printAllNode();

const list2 = new LinkedList();
list2.addNode('asd');
console.log(list2);