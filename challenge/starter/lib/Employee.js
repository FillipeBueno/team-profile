// TODO: Write code to define and export the Employee class
const promptManager = require('../promptManager');
//const inquirer = require("inquirer");



class Employee {
    constructor(name,id,email){
        this.name= name;
        this.id = id;
        this.email= email;
    }
    async getName() {
        const dataName = await promptManager();
            this.name = dataName.name;
            return this.name;
            //new Employee (firstInput,this.id,this.email);
    
        

};
};




module.exports = Employee
