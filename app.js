let bank_open=true
function time(ms){
    return new Promise((resolve,reject)=>{
        if(bank_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log(`Bank is closed`))
        }
    })
}
 
async function open(){
    try{

        await time(10000)
        console.log(`Please wait until you are attended to`)

        await time(10000)
        console.log(`Please go to teller number 15`)

        await time(17000)
        console.log(`Leave teller number 15's desk`)

        await time(17000)
        console.log(`Go to cashier's desk in case of any complaints`)

        await time(10000)
        console.log(`Report complaints to cashier`)

        await (1000)
        console.log(`Walk to reviews desk`)

        await (15000)
        console.log(`Write down reviews for services rendered`)
    }
    finally{
        await time(2000)
        console.log(`THANK YOU FOR VISITING US. WELCOME AGAIN!!!`)
    }
}
open()