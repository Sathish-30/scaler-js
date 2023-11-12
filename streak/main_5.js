// Write a JavaScript program to get the filename extension.

const getFileExtensionName = (fileName) => {
    return fileName.split(".").pop();
}

const fileName = "index.html";
console.log(`The file extension of ${fileName} is ${getFileExtensionName(fileName)}`)