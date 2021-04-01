
const fs = require('fs')

// Load data
const loadData = ()=>{
    try{
        const data = fs.readFileSync('grade.json').toString()
        return JSON.parse(data) 
    }catch(e){
       return[]

    }
    

}
// Save Data 
const saveData = (information)=>{
const saveInfo = JSON.stringify(information)
fs.writeFileSync('grade.json', saveInfo)
}

// Add information 
 const AddData = (name ,subject , grade , comments)=>{

    const info = loadData()
    const dublicatName = info.filter((element)=>
     element.name === name
     ) 
     if(dublicatName.length === 0 ){
         info.push({
             name , subject , grade , comments
         })
         saveData(info)
    console.log('Saved Successfully')
     }else{
         console.log('name already exsist')
     }
    

 }

 // Delet Data by name

 const delData = (name)=>{
     const info = loadData()
     const remianeData = info.filter((element)=>{
         
         return element.name !== name
        
     })

     console.log(remianeData)
     saveData(remianeData)

 }

 //Read Data

 const readInfo = (name) =>{ 
     const data = loadData()
     const searchData = data.find((element)=>{
        return element.name === name
     } )
     if(data){
        console.log('This is name '+ searchData.name)
        console.log('This is subject '+ searchData.subject)
        console.log('This is grade '+ searchData.grade)
    }
    else{
        console.log('name not found')
    }

 }

 // List of Data

 const infoList = ()=>
 {
     const data = loadData()
     data.forEach((info)=>{
        console.log(info.name)
     })
     
 }


 module.exports ={
     AddData,
     delData,
     readInfo,
     infoList
 }


 