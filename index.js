function getFirstSelector(selector) {
  if (!selector) { return 'No Selector'}
  return document.querySelector(selector)
}

function nestedTarget() {
  return getFirstSelector('#nested').querySelector('.target')
}

function deepestChild() {
  let currentNode = getFirstSelector('#grand-node')
  var lastNode = currentNode

  function getNext(nodeList) {
    const result = nodeList.querySelector('*')
    return result
  }

  while(lastNode && currentNode) {
    lastNode = getNext(currentNode)
    if (lastNode) {
      currentNode = lastNode
    }
  }
  return currentNode
}

function increaseRankBy(amount = 0) {
  const parents = document.querySelectorAll('.ranked-list')
  const allChildren = []

  for (let i = 0; i < parents.length; i++) {
    let children = parents[i].children
    for (let j = 0; j < children.length; j++) {
      allChildren.push(children[j])
    }
  }

  for (var i = 0; i < allChildren.length; i++) {
    let child = allChildren[i]
    child.innerHTML = parseInt(child.innerHTML) + amount
  }

  return allChildren
}
