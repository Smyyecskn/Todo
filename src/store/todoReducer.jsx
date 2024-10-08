const initialState = {
  todoList: [
    { id: new Date().getTime(), text: "Learn React-Redux", completed: false },
  ],
};

export const ADD = "ADD";
export const DEL = "DEL";
export const CLR = "CLR";
export const CMP = "CMP";

// actionCreatator
export const addTodo = (payload) => ({ type: ADD, payload });
export const delTodo = (payload) => ({ type: DEL, payload });
export const clearTodo = () => ({ type: CLR });
export const cmpTodo = (payload) => ({ type: CMP, payload });

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };

    case CLR:
      return {
        todoList: [],
      };
    case DEL:
      return {
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };

    case CMP:
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    default:
      return state;
  }
};
