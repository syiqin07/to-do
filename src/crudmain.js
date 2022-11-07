const { app, BrowserWindow } = require('electron');

const path = require('path')
const fs = require('fs')

var btnCreate = document.getElementById("btnCreate")
var btnUpdate = document.getElementById('btnUpdate')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files')
//alert(document.getElementById('btnRead'))

btnCreate.addEventListener('click', function (){  //creating text file when user click CREATE button
  
  let file = path.join(pathName, fileName.value)
  let contents = fileContents.value
  fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
    if(err){
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " planner successfully created")    
    console.log("The planner was created")
    fileName.value = ""
    fileContents.value = ""
  
  })
  
})

btnUpdate.addEventListener('click', function(){  //creating text file when user click UPDATE button
    let file = path.join(pathName, fileName.value)
    fs.readFile(file, function(err,data){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
        if(err){
            return console.log(err)
        }
        fileContents.value = data  
    })
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
        if(err){
            return console.log(err)
        }
        var txtfile = document.getElementById("fileName").value
        alert(txtfile + " planner was updated")    
        console.log("The file was updated")
        fileName.value = ""
        fileContents.value = ""
  })
    
})

btnRead.addEventListener('click', function(){  //read contents of the created text file
  let file = path.join(pathName, fileName.value)
 
  fs.readFile(file, function(err, data){ 
    if(err){
      return console.log(err)
    }
    fileContents.value = data
    console.log("The file was read!")
  })
  
})

btnDelete.addEventListener('click', function(){  
  let file = path.join(pathName, fileName.value)
 
  fs.unlink(file, function(err){ 
    if(err){
      return console.log(err)
    }
    fileName.value = ""
    fileContents.value = ""
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " planner successfully deleted")    
    console.log("The file was deleted!")
  })
  
})

function mainpage(){
    window.location.href="index.html"
  }