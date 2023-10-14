document.addEventListener('DOMContentLoaded', function() {

  document.querySelector("#new-task").onsubmit = function () {
      
      const li = document.createElement('li');
      let task_text = document.querySelector("#task").value;
      if (task_text.trim() === '') { 
          return false;
      }

      let priority = document.querySelector("#task-priority").value; 
      if (priority === 'medium') {
          li.classList.add('Blue-text'); 
      } else if (priority === 'high') {
          li.classList.add('Red-text'); 
      }

      let new_task_html = `<span class="task">${task_text}</span><button class="remove">Remove</button><button class="complete">Complete</button>`;

      li.innerHTML= new_task_html;

      document.querySelector("#tasks_list").append(li);
      document.querySelector("#task").value='';

      return false;
  }

  document.addEventListener('click', function (event){

      element = event.target;
      if (element.className === 'remove') {
          element.parentElement.remove();
      }

      if (element.className === 'complete') {
          let task = element.previousElementSibling.previousElementSibling;
          task.style.textDecoration = "line-through";
      }
  });
});
