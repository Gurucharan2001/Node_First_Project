const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')
const chalk = require('chalk')

yargs.version('1.0.0')
//create add command
yargs.command({
    command:'add',
    describe:'To add a new Note!',
    builder:{
        title:{
            describe:'Title of the note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Body of the notes",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})
//create remove command!!
yargs.command({
    command:'remove',
    describe:'To remove any note',
    builder:{
        title:{
            describe:"Title",
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
//create list command
yargs.command({
    command:'list',
    describe:'To list out all notes',
    handler(){
        console.log("listing notes!!")
    }
})
//create read command
yargs.command({
    command:'read',
    describe:'To read notes',
    handler(){
        console.log("Please enter your name.....")
    }
})
//console.log(yargs.argv)
yargs.parse()