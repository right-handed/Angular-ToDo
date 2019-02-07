import {Component} from '@angular/core';
import {Todo} from "./todo";
import {TodoList} from "./todo-list";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "Angular ToDo";
    toDoList = TodoList;
    selectedItem: Todo;

    sort(toDoList) {
        let temp;
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i].priority > toDoList[i + 1].priority) {
                temp = toDoList[i];
                toDoList[i] = toDoList[i + 1];
                toDoList[i + 1] = temp;
            }
        }
        return toDoList;
    }

    onSelect(todo: Todo): void {
        this.selectedItem = todo;
        this.sort(this.toDoList);
    }
}
