//stack의 규격사항을 설정
interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): void;
}

type StackNode = {
  //불변성을 위해 readonly 적용
  readonly value: string;
  readonly next: StackNode | undefined;
};

class StackImplementation implements Stack {
  //_size의 의미 내부에서만 사용되며 이에관련 publireadonly c method가 있음을 의미
  private _size: number = 0;
   head: StackNode | undefined;
  //내부적으로 읽을 수만 읽게
  get size() {
    return this._size;
  }
  push(value: string) {
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    //null ==undefined이기에 아래의 조건을 통해 null 과 undefined를 둘다 막을수있다.
    if (this.head == null) {
      throw new Error("stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImplementation();


stack.push("1");
console.log(stack.head)
stack.push("2");
console.log(stack.head)
stack.push("3");
console.log(stack.head)

stack.pop()
console.log(stack)
// while (stack.size !== 0) {
//   console.log(stack.pop());
//   // console.log(stack.size);
// }
