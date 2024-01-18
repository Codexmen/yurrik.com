---
title: Trees, graphs and nested DS in Javascript and React
description: using tree structures in Javascript and React 
summary: What is tree structure and how to use it in Javascript and React
length: 4 minutes read
date: 16-01-2024
author: Yurii Kovalenko
order: 4
head:
  meta:
    - name: 'author'
      content: 'Yurii Kovalenko'
    - name: 'keywords'
      content: 'javascript, trees, graph, nested data structures, react, react components, react tree, react nested tree, react nested menu'
---
# 

A tree structure is a widely used data structure in Javascript, particularly in browsers. It can be described succinctly. The main character here is a type `Node` that can contain some data and can also contain children of the same type - `Node`. So, it is a nested data structure that starts from a root node and contains nested nodes with varying levels of depth.

In a browser, we use tree structures so often that we think of them as [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) which is a tree, [React components](https://react.dev/learn/understanding-your-ui-as-a-tree) that contain some children are also trees, even comments with replies on YouTube are also trees. In this article, I try to summarize some basic algorithms and approaches related to trees or graphs.

The basic type definition of a tree structure in TypeScript looks like this:

```tsx
type Tree = {
  id: string,
  data: {
    name: string
  },
  children?: Tree[]
}
```

It has an identifier, some node data (which depends on the tree's purpose), and may contain an array of children. In computer science and graph theory, trees can contain cycles—when some children have their parent nodes as children. I will not handle these cases in this article. I am focusing only on tree structures without cycles.So, we've described the tree data structure, and now we need some algorithms to work with it.

The most important algorithm is to visit all nodes of the tree. It can be used for rendering the tree or finding a specific node. There are two approaches. The first one is Depth-First Search or DFS. It is usually a recursive method that goes deep into the children from the first Node. If a node has children, it visits the first child. If this child or subsequent children have children, it visits them and so on. When a branch of the tree is exhausted, the algorithm uses backtracking to go to the next child until all nodes have been listed or visited.

How it could be implemented with `Tree` type that we described:

```tsx
function deepFirstSearch(tree: Tree) {
  // list node
  console.log(tree.data.name) 
  // if node has children call deepFirstSearch for each children
  if (tree.children) {
    //  go to the next level
    tree.children.forEach(child => deepFirstSearch(child))
  }
}
```

The second approach is Breadth-First Search, or BFS. It visits nodes in level order, meaning it visits the direct children of the root node (the first level ), then the children of the first child node (the second level), and so on until it visits all levels of the tree. For implementation, it uses a queue to hold nodes that should be visited in the future and does not use recursive calls.

How it could be implemented with `Tree` type that we described:

```tsx
function breadthFirstSearch(tree: Tree) {
  // create a queue
  const queue: Tree[] = []
    // add the root node to the queue
  queue.push(tree)
    // while the queue is not empty
  while (queue.length > 0) {
    // get the first node from the queue
    const node = queue.shift()  as Tree
    // list the node
    console.log(node.data.name)
    // add all children to the end of the queue
    if (node.children) {
      queue.push(...node.children)
    }
  }
}
```

DFS can be used to list or render all nodes of a tree, while BFS can be used to locate a specific node and immediately return from the function.

Let’s see how we could render this nested trees in React.
In this example, I created a simple menu. The first level of the menu is usually an array of items, so our data will look like an array of type Tree.

```tsx
const menu: Tree[] = [
    {
        id: "1",
        data: {
            name: "Menu Item 1"
        },
        children: [
            {
                id: "2",
                data: {
                    name: "Sub Menu Item 1"
                },
                children: [
                    {
                        id: "3",
                        data: {
                            name: "Sub Sub Menu Item 1"
                        }
                    },
                    {
                        id: "4",
                        data: {
                            name: "Sub Menu Item 2"
                        }
                    }
                ]
            }],
    },
    {
        id: "5",
        data: {
            name: "Menu Item 2"
        },
        children: [
            {
                id: "6",
                data: {
                    name: "Sub Menu Item 2-2"
                }
            }
        ]
    },
    {
        id: "7",
        data: {
            name: "Menu Item 3"
        }
    }
]
```

And React recursive render of menu:

```tsx
// component that renders menu children
function Menu({trees}: { trees: Tree[] }) {
    return (<ul style={{paddingLeft: '20px'}}>
        {trees.map(tree => <MenuItem tree={tree}/>)}
    </ul>)
}

// component that renders menu item name and children
function MenuItem({tree}: { tree: Tree }) {
    return (
        <li>
            {tree.data.name}
            {tree.children && <Menu trees={tree.children}/>}
        </li>
    )
}

// root component
export default function NestedMenu() {
    return <Menu trees={menu} />
}
```

The output of  `NestedMenu` render will looks next way:

<img src="/blog/trees-1.png" alt="Nested menu" style="width: 100%;">
If you would like to practice on it and get your hands dirty, I have a few ideas for us:

- Implement a non-recursive implementation of DFS (like BFS implementation but using a stack as storage)
- Implement an interactive nested menu on React. By default, the user sees only the first level of nodes and can open submenus by clicking (if this item has a submenu)
- Implement a nested menu with a selected item on React that recursively opens submenus and highlights a submenu by the provided id (from URL as an example)
- Create an editable tree on React where the user could add/edit/delete nodes from the UI
- As an HTML document is also a tree, try to implement the function `document.getElementByClassName()`

Recap

Trees, graphs, and nested data structures are often used data structures. Basic knowledge about them could be crucial for some everyday developer tasks that might not look connected to them at first glance. The two algorithms that we implemented (BSF and DFS) with modifiers cover 80-90% of everyday usage of tree-related structures. You can easily render nested trees using a React component by passing Tree children to the same component.

See you!
