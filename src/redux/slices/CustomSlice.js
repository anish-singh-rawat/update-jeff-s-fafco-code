import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";
import cookie from 'react-cookies'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const CustomSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
      state.isError = false;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.data = { ...action.payload };
    },
    hasError(state, action) {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.data = { ...action.payload };
    },
    resetReducer(state) {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.data = {};
    },
  },
});

export function customApiFunc(payload) {
  console.log("payload in customSlice=====", payload)
  const apiUrl = 'api/auth/login/';
  return async (dispatch) => {
    dispatch(CustomSlice.actions.startLoading());
    try {
      const res = await axiosInstance.post(apiUrl, payload);
      if (res.data.status == "Successfull") {
        cookie.save('token', res?.data?.data?.access)
        cookie.save('role', res?.data?.data?.customer_type)
      }
      dispatch(CustomSlice.actions.loginSuccess(res.data));
    } catch (e) {
      console.log('error in catch====', e);
      dispatch(CustomSlice.actions.hasError(e));
    }
  };
}

export const { startLoading, hasError, loginSuccess, resetReducer } = CustomSlice.actions;
export default CustomSlice.reducer;