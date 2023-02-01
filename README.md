
# nodestorage2 

nodestorage2 is a simple, fast and lightweight library for Node.js to store data in the file system. This library provides an easy-to-use API for reading and writing data to the file system, making it ideal for use in a variety of applications.



## Installation

To install nodestorage2, simply run the following command in your terminal:

```bash
  npm install nodestorage2
```

## Usage 

Using nodestorage2 is simple and straightforward. Simply require the library in your project and use the provided API to read and write data to the file system.

Here's a basic example that demonstrates how to use nodestorage2 to store data in a file:
    

## Usage/Examples

```javascript
const nodeStorage = require('nodestorage2');

nodeStorage.set('key', 'value')
nodeStorage.get('key')
nodeStorage.clear('key')
nodeStorage.clearAll()

```
In this example, we use the set method to store the data, 'get' to get the data and clear and clearAll to delete the data and delete all the data respectively.

## Conclusion

nodestorage2 is a simple and easy-to-use library for Node.js that makes it easy to store data in the file system. Whether you're building a small application or a complex system, nodestorage2 provides a reliable and convenient way to persist data and manage files.
