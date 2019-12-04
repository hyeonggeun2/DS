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
    if (!currentNode) this.head = newNode;
    // 그렇지 않으면 마지막 노드의 다음에 추가한다.
    else {
      while(currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  // 가장 마지막 노드를 삭제
  LinkedList.prototype.deleteLastNode = function() {
    let currentNode = this.head;
    while(currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }

    // 값을 받아서 맞는 노드를 삭제
    LinkedList.prototype.deleteNode = function(data) {
      let currentNode = this.head;
      let prevNode;
      while(currentNode.data !== data) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = currentNode.next;
    }

  // 전체 노드 출력
  LinkedList.prototype.printAllNode = function() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(currentNode.data);
  }
}

const list = new LinkedList();
list.addNode('a');
list.addNode('b');
list.addNode('c');
list.addNode('d');
list.addNode('e');
list.addNode('f');
list.printAllNode();
list.deleteNode('c');
list.deleteLastNode();
console.log('-----------')
list.printAllNode();