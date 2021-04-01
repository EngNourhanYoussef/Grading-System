
const { number } = require('yargs')
const yargs = require('yargs')
const gradeSystem = require('./operation')

console.log('hi')
//Add
yargs.command({
    command:'add',
    describe:'add information in grade system',
    builder:{
        name:{
            describe:' add name to grade system',
            demandOption : true,
            type :'string' 
        },
        subject:{
            describe:'add subject to grade system',
            demandOption : true,
            type:' string'
        },
        grade:{
            describe :'add grade to grad system',
            demandOption:true,
            type: 'number'
        },
        comments : {
            describe :'add grade to grad system',
            type : 'string'
        }
       

    },
    handler:(argv)=>{
       
        gradeSystem.AddData(argv.name , argv.subject, argv.grade , argv.comments)


    }
})

//Remove
yargs.command({

    command : 'delet',
    describe : ' delet elements from grade system',
    builder:{
        name:{
            describe:' name is require',
            demandOption : true,
            type : 'string'
        }

    },

    handler:(argv)=>{
        gradeSystem.delData(argv.name)

    }

})

//Read
yargs.command({

    command : 'read',
    describe : ' Read elements from grade system',
    builder:{
        name:{
            describe:' name is require',
            demandOption : true,
            type : 'string'
        }

    },

    handler:(argv)=>{
        gradeSystem.readInfo(argv.name)

    }
})

//List
yargs.command({
    command:'list',
    describe: ' list of data in grade system',
    handler:(argv)=>{
        gradeSystem.infoList(argv.name)


    }
    

})
yargs.parse()