const initialState = {
  todoList: [
    { id: new Date().getTime(), text: "Learn REDUX", completed: false },
  ],
};

export const ADD = "ADD";
export const DEL = "DEL";
export const CLR = "CLR";
export const CMP = "CMP";

// actionCreatator
export const addTodo = (payload) => ({ type: ADD, payload });
export const delTodo = () => ({ type: DEL });
export const clrTodo = () => ({ type: CLR });
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

    default:
      return state;
  }
};
