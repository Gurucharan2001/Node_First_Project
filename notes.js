const fs = require("fs")
const chalk = require('chalk')

const getNotes = function(){
    return "Your's notes ...."
}
//add the notes 
const addNotes = function(title,body){
    const notes = loadNotes()
    const duplicate = notes.filter(function(note){
        return note.title === title
    })

    if(duplicate.length === 0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("Successfully add The notes"))
    }
    else{
        console.log(chalk.bgRed("Oh! the Notes is already exist!!"))
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataStr = dataBuffer.toString()
        const data = JSON.parse(dataStr)
        return data
    }
    catch(e){
        return []
    }
}

//remove notes
const removeNotes = function(title){
    const notes = loadNotes()
    const findTitle = notes.filter(function(note){
        return note.title !== title
    })
    if(findTitle)
    {
        console.log(chalk.bgGreen("Successfully removed"))
        saveNotes(findTitle)
    }
    else{
        console.log(chalk.bgRed("Not found"))
    }
    
}




module.exports = {
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes
}