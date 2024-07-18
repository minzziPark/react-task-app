export interface Itask {
  taskId: string;
  taskName: string;
  taskDescription: string;
  taskOwner: string;
}

export interface IlogItem {
  logId: string;
  logAuthor: string;
  logMessage: string;
  logTimestamp: string;
}

export interface IBoard {
  boardId: string;
  boardName: string;
  lists: IList[];
}

export interface IList {
  listId: string;
  listName: string;
  tasks: Itask[];
}
