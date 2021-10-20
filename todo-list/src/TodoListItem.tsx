import React from 'react';


// TodoListItemのコンポネンは,Todoアイテムをプロップとして受け取る．
// そのTodoアイテムは，文字列であるtextプロパティと、ブール値であるcompleteプロパティを持つ．

// Todoの設定：string
interface Todo {
    text: string;
    complete: boolean;
}

// Propsの設定
interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

// export const TodoListItem = () => {
// Propsを組み込む
export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    //ここにコンテンツを書いていく
    //return <li>content</li>;
    return (
        // 各リストアイテムにチェックボックスの追加．
        // todo.completがtrueのときにチェックされる．
        // Todoアイテムが完了した場合に横線を付与．style属性を使用．
        <li>
            <label 
                style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
            >
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onClick={() => {
                        toggleTodo(todo);
                    }}
                />{' '}
                {todo.text}
            </label>
        </li>
    );
};