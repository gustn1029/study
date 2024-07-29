#### 2.2.2.5 step5
* class로 linked list를 구현합니다.
* node만 구현
```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    };
};

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);
const head = node1;

node1.next = node2;
node2.next = node3;
```

#### 2.2.2.6 step6
* class로 linked list를 구현합니다.
* 자동으로 값이 연결되게 구현
```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    };
};

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
    };

    push(data) {
        let newNode = new Node(data);
        // 마지막 값은 새로운 노드가 되어야 함.
        this.tail.next = newNode;
        // 마지막 노드는 새로운 노드가 되어야 함.
        this.tail = newNode;
    };
};

const l = new LinkedList();
l.push(10);
l.push(20);
l.push(30);
l.push(40);
```

#### 2.2.2.7 step7
* class로 linked list를 구현합니다.
* length, toString을 구현
```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    };
};

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
        this.displayData = "";
    };

    push(data) {
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        this.displayData += `${data}, `;
    };

    toString() {
        return `<${this.displayData.slice(0,-2)}>`;
    }
};

const l = new LinkedList();
l.push(10);
l.push(20);
l.push(30);
l.push(40);
```

#### 2.2.2.8 step8
* class로 linked list를 구현합니다.
* toString을 앞에서 object로 했던 것처럼 순회해서 구현
```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    };
};

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
    };

    push(data) {
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    };

    toString() {
        let current = this.head.next; // init
        let result = "";
        while (current) {
            result += `${current.data}, `;
            current = current.next;
        };

        return `<${result.slice(0, -2)}>`;
    }
};

const l = new LinkedList();
l.push(10);
l.push(20);
l.push(30);
l.push(40);
```

#### 2.2.2.9 step9
* class로 linked list를 구현합니다.
* 데이터를 삽입하는 insert를 구현
```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    };
};

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
    };

    push(data) {
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    };

    toString() {
        let current = this.head.next; // init
        let result = "";
        while (current) {
            result += `${current.data}, `;
            current = current.next;
        };

        return `<${result.slice(0, -2)}>`;
    }

    insert(idx, data) {
        let newNode = new Node(data);
        let current = this.head.next;
        while (current) {
            if(this.length === idx) {
                newNode.next = current.next;
                current.next = newNode;
            }
        };
    };
};

const l = new LinkedList();
l.push(10);
l.push(20);
l.push(30);
l.push(40);
```

#### 2.2.3.1 Doubly linked list 형태
```js
const list = {
    head: null,
};

let list1 = { value: 12, next: null, pre: null };
let list2 = { value: 99, next: null, pre: null };
let list3 = { value: 37, next: null, pre: null };
let list4 = { value: 2, next: null, pre: null };

list.head = list1;
list1.next = list2;
list2.next = list3;
list3.next = list4;

list1.pre = list;
list2.pre = list1;
list3.pre = list2;
list4.pre = list3;

list1.next.next.value;
// 37
list3.pre.pre.value;
// 12
list4.pre.pre.pre.next.next.value;
// 37
```
```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.pre = null;
    }
}

class DoubleLinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
    }

    append(data) {
        let 새로운노드 = new Node(data);

        this.tail.next = 새로운노드;
        새로운노드.pre = this.tail;

        this.tail = 새로운노드;
    }
}

l = new DoubleLinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```