let task_list  = JSON.parse(localStorage.getItem('tasks')) || [];
show_result();

// Made the function to enter the task into task_list
function enter_task(){

    // taking the valur from text input field
    let task_field = document.querySelector(".input-text");
    let task_value = task_field.value;

    // Taking the value from the date input field
    let date_field = document.querySelector(".input-date");
    let date_value = date_field.value;

    if(task_field.value==="" || date_field.value === ""){
        alert('Write the Date and task both ');
        task_field.value = '';
        date_field.value = '';
        return;
    }
    let formatted_date = '';
    let [year,month ,day] = date_value.split('-');
    formatted_date = `${day}-${month}-${year}`; 
    

    // Pushing the date and text into task list
    task_list.push({task:task_value , date : formatted_date});
    localStorage.setItem('tasks' , JSON.stringify(task_list));

    task_field.value = '';
    date_field.value = '';

    // To display the task or we can say result 
    show_result();

}

function show_result(){
    let display_items = document.querySelector(".tasks");
    let new_html = ``;
    for(let i = 0 ; i<task_list.length;i++){
        new_html+= `
        <div class='task-show'>
        <span class='task'>${task_list[i].task}</span>
        <span class='date-task'>${task_list[i].date}</span>
        <button class='delete-button' onclick='task_list.splice(${i},1); show_result()
        localStorage.setItem("tasks" , JSON.stringify(task_list));;'>Delete</button>
        </div>`;
    }
    display_items.innerHTML = new_html;

}

