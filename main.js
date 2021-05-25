document.querySelector('#btn').onclick = function(){
  if(document.querySelector('#input_div input').value.length == 0){
    alert("Please Enter a task");
  }
  else{
    document.querySelector('#tasks').innerHTML += `
    <div class="task">
    <span id="taskname">
      ${document.querySelector('#input_div input').value}
    </span>
    <button class="delete">
    <i class="fas fa-trash-alt"></i></button>
    
        </div>`;
        var current_task=document.querySelectorAll(".delete");
        for(var i=0;i<current_task.length;i++)
        {
          current_task[i].onclick=function(){
            this.parentNode.remove();
          }
        }
        var tasks=document.querySelectorAll(".task");
        for(var i=0;i<tasks.length;i++)
        {
          tasks[i].onclick= function(){
            this.classList.toggle('completed');
        }
  }
}
document.querySelector("#input_div input").value="";
}
