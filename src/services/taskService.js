import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
  const result = await httpAxios
    .post("/api/tasks", task)
    .then((response) => response.data);
  return result;
}

export async function getTaskOfUser(userid) {
  const result = await httpAxios
    .get(`/api/user/${userid}/tasks`)
    .then((response) => response.data);
  return result;
}
