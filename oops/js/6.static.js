class user{
    static id =1;
    constructor( name,age ,income){
    this.name=name;
    this.age=age;
    this.income= income;
    this.id = user.id++;                       // bcos of 'static id' it point to class so user.id otherwise  use "user.id"/////
    }
    static compareByAge(user1, user2){         //****************to sort ****** *//
        return user1.age - user2.age;
    }
    static compareByIncome(user1, user2){         //****************to sort ****** *//
        return user1.income - user2.income;
    }
}  
const user1 = new user('rakesh', 50 ,1000);
const user2 = new user('john', 20 ,5000);
const user3 = new user('rohan', 30 ,70000);  

const users =[user1, user2 ,user3];
// users.sort(user.compareByAge);     //****************to sort ****** */
users.sort(user.compareByIncome);     //****************to sort ****** */

console.log(users);
