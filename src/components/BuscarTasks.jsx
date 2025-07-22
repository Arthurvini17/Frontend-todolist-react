import React, { useState, useEffect } from "react";

export default function BuscarTasks() {
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/tasks")
            .then(res => res.json())
            .then(data => {
                console.log("Resposta da API:", data);
                setTasks(data.task);
            })
            .catch(err => console.error("Erro ao buscar tasks:", err));
    }, []);

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col gap-2 p-10  ">
            {tasks.map(task => (
                <div key={task.id} className="  bg-gray-800/50 border-gray-700 backdrop-blur-sm border  flex flex-col  rounded-lg p-2 ">
                    <div className="flex flex-row text-center items-center  gap-2">
                        <li className="text-white text-3xl list-none">{task.Task_name}</li>
                        {task.Iscompleted ? (
                            <p className="text-blue-300 px-1.5 bg-[#003c64] rounded-xl"> Completada</p>
                        )
                            :
                            (
                                <p className="text-red-500">Em andamento</p>
                            )}
                    </div>
                    <div className="flex flex-col">
                        <li className="text-gray-500 text-xl list-none">{task.Task_desc}</li>
                        <p className="text-white">Criado em: {task.createdAt}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}