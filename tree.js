class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }

traverse () {
  if (this.descendants.length == 0) {
    return this.value
  }
  else {
    let lst = []
    let children = []
    lst.push(this.value)
    for (let child of this.descendants) {
      // console.log(child.traverse_2())
      children.push(child.traverse())
    }
    lst.push(children)
    return lst
  }
}
}

const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

abe.descendants.push(homer);
homer.descendants.push(bart, lisa, maggie);

// [abe -> [homer -> [bart, lisa, maggie]]]

console.log(abe.traverse())
// console.log(abe.traverse())

const nums = new TreeNode(1)
let two = new TreeNode(2)
nums.descendants.push(two)
nums.descendants.push(new TreeNode(3))
let four = new TreeNode(4)
four.descendants.push(new TreeNode(5))
four.descendants.push(new TreeNode(6))
four.descendants.push(new TreeNode(7))
nums.descendants.push(four)

console.dir(abe.traverse(), {depth: null, colors: true, maxArrayLength: null})
console.dir(nums.traverse(), {depth: null, colors: true, maxArrayLength: null})
