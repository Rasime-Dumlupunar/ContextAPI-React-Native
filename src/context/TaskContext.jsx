import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

export const TaskContext = createContext();

export const MyTaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTasks(response.data.slice(0, 20));
        console.log(response.data);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  // Contextimizde tuttuğumuz değerleri güncelleyen veya değiştiren
  // fonksiyonları da yine contextimizde belirler ve göndeririz. Bunun sebebi projede kod tekrarına düşmemektir.

  //günderilen id'ye sahip task'ı sil
  const removeTask = id => {
    //gönderilen id'ye sahip olan elementleri ele
    const filtered = tasks.filter(task => task.id !== id);

    //istemediğimiz elemanın elenmiş olduğu diziyi state'e aktararak güncelle
    setTasks(filtered);
    Alert.alert('Task silindi');
  };
  const addTask = (title, userId) => {
    const newTask = {
      userId,
      id: tasks.length + 1,
      title,
    };
    setTasks([...tasks, newTask]);
    Alert.alert('Yeni task eklendi');
    setNewTaskTitle('');
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        addTask,
        removeTask,
        newTaskTitle,
        setNewTaskTitle,
      }}>
      {children}
    </TaskContext.Provider>
  );
};
