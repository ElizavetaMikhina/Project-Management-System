import { TBoard, TTask } from "@/types";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

export const getBoards = async (): Promise<{ data: TBoard[] }> => {
  try {
    const response = await axios.get(`${API_URL}/boards`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении досок:", error);
    throw error;
  }
};

export const getBoardTasks = async (boardId: string): Promise<TTask[]> => {
  try {
    const response = await axios.get(`${API_URL}/boards/${boardId}`);
    return response.data.data;
  } catch (error) {
    console.error(`Ошибка при получении задач для доски ${boardId}:`, error);
    throw error;
  }
};

export const getTasks = async (): Promise<TTask[]> => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data.data;
  } catch (error) {
    console.error("Ошибка при получении задач:", error);
    throw error;
  }
};

export const createTask = async (task: TTask): Promise<TTask> => {
  try {
    const response = await axios.post(`${API_URL}/tasks/create`, task);
    return response.data;
  } catch (error) {
    console.error("Ошибка при создании задачи:", error);
    throw error;
  }
};

export const updateTask = async (
  taskId: string,
  task: TTask
): Promise<TTask> => {
  try {
    const response = await axios.put(`${API_URL}/tasks/update/${taskId}`, task);
    return response.data;
  } catch (error) {
    console.error("Ошибка при обновлении задачи:", error);
    throw error;
  }
};

export const updateTaskStatus = async (
  taskId: string,
  status: string
): Promise<TTask> => {
  try {
    const response = await axios.put(
      `${API_URL}/tasks/updateStatus/${taskId}`,
      { status }
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка при обновлении статуса задачи:", error);
    throw error;
  }
};

export const getTaskById = async (taskId: string): Promise<TTask> => {
  try {
    const response = await axios.get(`${API_URL}/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Ошибка при получении задачи с ID ${taskId}:`, error);
    throw error;
  }
};

// export const getTeams = async (): Promise<TTeam[]> => {
//   try {
//     const response = await axios.get(`${API_URL}/teams`);
//     return response.data;
//   } catch (error) {
//     console.error("Ошибка при получении команд:", error);
//     throw error;
//   }
// };

// export const getTeamById = async (teamId: string): Promise<TTeam> => {
//   try {
//     const response = await axios.get(`${API_URL}/teams/${teamId}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Ошибка при получении информации о команде ${teamId}:`, error);
//     throw error;
//   }
// };

// export const getUsers = async (): Promise<TUser[]> => {
//   try {
//     const response = await axios.get(`${API_URL}/users`);
//     return response.data;
//   } catch (error) {
//     console.error("Ошибка при получении пользователей:", error);
//     throw error;
//   }
// };

export const getUserTasks = async (userId: string): Promise<TTask[]> => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}/tasks`);
    return response.data;
  } catch (error) {
    console.error(`Ошибка при получении задач пользователя ${userId}:`, error);
    throw error;
  }
};
