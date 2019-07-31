export const getTodoState=store=>store.todos

export const getTodoList = store =>
  store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store, id) =>
  store && store.todos && store.todos.byIds
    ? { ...store.todos.byIds[id], id }
    : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getActiveFilter=store=>store.visibilityFilter

export const getTodosByVisibilityFilter=store=>{
  if(store && store.todos){
    const todos=getTodos(store) || []
    let filter=()=>true
    //debugger
    if(store.visibilityFilter){
      switch (store.visibilityFilter){
        case 'completed':
          filter=(todo)=>{return todo.completed}
          break
        case 'incomplete':
          filter=(todo)=>{return !todo.completed}
          break
      }
    }
    return todos.filter(filter)
  }
}