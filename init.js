const mongooes=require("mongoose");
const Chat=require("./models/chat.js");

async function main(){
    await mongooes.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main().then((result)=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});

// let allChats=[
//     {
//         from: "Pravin",
//         to: "Prateek",
//         message: "Hello prateek",
//         created_at: new Date()
//     },
//     {
//         from:"Akhilesh",
//         to:"Deepak",
//         message:"plz send me picture",
//         created_at:new Date()
//     },
//     {
//         from:"Aman",
//         to:"Sumit",
//         message:"plz give my money",
//         created_at:new Date()
//     }
// ]
// Chat.insertMany(allChats);
Chat.deleteMany({from:"Pravin"});