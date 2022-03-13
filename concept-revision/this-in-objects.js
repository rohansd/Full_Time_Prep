// this methos in object

let user = {
    name : "rohan",
    age : 25,
    namelog : function(){
        console.log(` Hi ${this.name}! `);
    },
    //a more compact way to define
    agelog(){
        console.log(` Your age is ${this.age} `);
    },
    prop(){
        let returnage = () => {
            return this.age;
        }
        return returnage();
    }
}

user.namelog();
user.agelog();

console.log(user.prop());