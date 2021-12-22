const fs = require('fs')
const dirTree = require('directory-tree')

const ICONS_DIR = './public/static/icons'
const INDEX_NAME = 'index.json'

const renameTreeRecursively = tree => {
  return tree.children.reduce((prev, current) => {
    if (current.name === INDEX_NAME) {
      return prev
    }

    return {
      ...prev,
      [current.name]: current.children.every(child => child.children)
        ? renameTreeRecursively(current)
        : current.children.map(child => child.name.replace(/\.svg$/, '')),
    }
  }, {})
}

const tree = dirTree(ICONS_DIR, { normalizePath: true })
const newTree = renameTreeRecursively(tree)

fs.writeFileSync(`${ICONS_DIR}/${INDEX_NAME}`, JSON.stringify(newTree))
