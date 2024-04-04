import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";


//create action
export const createUser = createAsyncThunk(
    "createUser",
    async (data, { rejectWithValue }) => {
      console.log("data", data);
      const response = await fetch(
        "https://660e40a76ddfa2943b36302f.mockapi.io/thunk/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
export const showUser= createAsyncThunk("showCase",async (args,{rejectWithValue})=>{
    const response=await fetch('https://660e40a76ddfa2943b36302f.mockapi.io/thunk/user')
    try{
        const result=await response.json();
        return result;
    }catch(error){
        return rejectWithValue(error)
    }
})
export const userDetails=createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    // extraReducers: (builder) => {
    //     builder.addCase(serviceName.fulfilled, (state, action) => {
    //       state.data = action.payload;
    //     });
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending,(state)=>{
            state.loading=true
        }),
         builder.addCase(createUser.fulfilled,(state,action)=>{
            state.loading=false,
            state.users.push(action.payload)
        }),
         builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          }) ,   
        builder.addCase(showUser.pending,(state)=>{
            state.loading=true
        }),
         builder.addCase(showUser.fulfilled,(state,action)=>{
            state.loading=false,
            state.users=(action.payload)
        }),
         builder.addCase(showUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })        
        
    }
});
export default userDetails.reducer;