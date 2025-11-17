/**
 * Task Class
 * 
 * A class to manage tasks with title, priority, completion status, and time tracking.
 */

class Task {
 //write your code here
 #completed;
 #minutesSpent;
 constructor(title, priority){
    this.title = title;
    this.priority = priority;
    this.#completed = false;
    this.minutesSpent = 0;
 }
 workOn(minutes){
    this.minutesSpent += minutes;
    return `Worked on ${this.title} for ${this.minutes} minutes. Total time: ${this.minutesSpent} minutes`
 }
 complete(){
    this.#completed = true;
    return `${this.title} has been completed!`
 }
 iscomplete(){
    return this.#completed;
 }
}

//Test class with examples below:


// Export the Task class for testing
module.exports = { Task };
