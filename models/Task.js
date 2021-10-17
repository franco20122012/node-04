const { v4: uuidv4 } = require('uuid');
class Task{
    id='';
    title='';
    done=null;
    created=null;//xq va a ser una fecha
    finished=null;

    constructor(title){
        this.id=uuidv4;
        this.title=title;
        this.done=false;
        this.created=new Date();
    }
}
module.exports=Task;