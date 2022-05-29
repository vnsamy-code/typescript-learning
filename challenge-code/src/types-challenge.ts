enum ToDoStatus {
    Done = 'done',
    InProgress = 'in-progress',
    ToDo = 'todo'
}

interface TodoItem {
    id: number;
    title: string;
    status: ToDoStatus;
    completedOn?: Date;
}

const todoItems: TodoItem[] = [

]

function addToDoItem(todo: string): TodoItem {
    const id = getNextId(todoItems);

    const newTodo = {
        id,
        title: todo,
        status: ToDoStatus.ToDo
    }

    todoItems.push(newTodo);

    return newTodo;
}

function getNextId<T extends { id: number }>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1;
}