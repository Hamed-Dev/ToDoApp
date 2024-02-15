
import { PayloadAction, createSlice } from "@reduxjs/toolkit"



interface RequestsState {
    data?: any,
}

const initialState: RequestsState = {
    data: [
        { id: 1, title: 'Request 1', description: 'description 1', status: 'completed', longitude: '', latitude: '' },
        { id: 2, title: 'Request 2', description: 'description 2', status: 'incomplete', longitude: '', latitude: '' }],
}

export const requestsSlice = createSlice({
    name: "requests",
    initialState,
    reducers: {
        initRequests: (state, action) => {
            return action?.payload
        },
        addNewRequest: (state, action: PayloadAction<any>) => { //////======= Add New Request
            const { request } = action.payload
            console.log('MAXIDdd', request)
          const request_data = JSON.parse(JSON.stringify(state))?.data;
         //   const request_data = state?.data;
            const maxId = Math.max(...request_data.map((itm: any) => itm.id))
            request.id = maxId + 1
            console.log('MAXID', request)
            request_data?.push(request)
            console.log({ request_data })
            // state.data = task_data
            return { ...request_data, data: request_data }
        },

        removeRequest: (state, action: PayloadAction<any>) => { //////======== Remove Request
            const { request } = action.payload
            const request_data = JSON.parse(JSON.stringify(state));
            const delete_task_data = request_data?.data?.filter((item: any) => item?.id !== request?.id)
            return { ...request_data, data: delete_task_data }
        },

        updateRequestStatus: (state, action: PayloadAction<any>) => { //////=========  Update Request Status
            const { request, newStatus } = action.payload
            const request_data = JSON.parse(JSON.stringify(state));
            const mark_task_data = request_data?.data?.filter((item: any) => item?.id == request?.id)
            mark_task_data[0]['status'] = 'completed'
            state.data = request_data.data
            // return { ...task_data, data: mark_task_data }
        }
    }
})



// Action creators are generated for each case reducer function
export const { initRequests, addNewRequest, removeRequest, updateRequestStatus } = requestsSlice.actions



export default requestsSlice.reducer