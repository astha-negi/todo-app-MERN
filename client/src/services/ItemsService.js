const API_URL = "https://todo-app-mern-er4l.onrender.com/api/todo";

export const addItemToServer = async (task, date) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });
  return mapServerItemToLocalItem(await response.json());
};

export const getItemsFromServer = async () => {
  const response = await fetch(API_URL);
  const items = await response.json();
  return items.map(mapServerItemToLocalItem);
};

export const markItemCompletedOnServer = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
  });
  return mapServerItemToLocalItem(await response.json());
};

export const deleteItemFromServer = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return { id };
};

const mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
};