
import { PayloadAction, createSlice } from "@reduxjs/toolkit"



interface TasksState {
    data?: any,
}

const initialState: TasksState = {
    data: [
        { id: 1, title: 'Task 1', description: 'description 1', status: 'completed' },
        { id: 2, title: 'Task 2', description: 'description 2', status: 'incompleted' }],
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        initTasks: (state, action) => {
            return action?.payload
        },
        addToTasks: (state, action: PayloadAction<any>) => { //////======= Add New Task
            const { task } = action.payload
            const task_data = JSON.parse(JSON.stringify(state))?.data;
            task_data?.push(task)
            console.log({ task_data })
            state.data = task_data
        },

        removeTask: (state, action: PayloadAction<any>) => { //////======== Remove Task
            const { task } = action.payload
            const task_data = JSON.parse(JSON.stringify(state));
            const delete_task_data = task_data?.data?.filter((item: any) => item?.id !== task?.id)
            return { ...task_data, data: delete_task_data }
        },

        updateTaskStatus: (state, action: PayloadAction<any>) => { //////=========  Update Task Status
            const { task, newStatus } = action.payload
            const task_data = JSON.parse(JSON.stringify(state));
            const mark_task_data = task_data?.data?.filter((item: any) => item?.id == task?.id)
            mark_task_data[0]['status'] = newStatus
            state.data = task_data.data
            //return { ...task_data, data: mark_task_data }
        }
    }
})



// Action creators are generated for each case reducer function
export const { initTasks, addToTasks, removeTask, updateTaskStatus } = tasksSlice.actions



export default tasksSlice.reducer