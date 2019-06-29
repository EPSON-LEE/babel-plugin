// import * as parser from '@babel/parser'
// import * as t from '@babel/types'
// import traverse from '@babel/traverse'
// import generate from '@babel/generator'

module.exports =  function({ types: t }) {
  return {
    visitor: {
      BinaryExpression(path) {
        if (path.node.operator !== '===') {
          return
        }

        path.node.left = t.identifier("211212")
        path.node.right = t.identifier("do2112rk")
      }
    }
  }
}
