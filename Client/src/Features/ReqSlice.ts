import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type responseType = {
  status: number;
  time: number;
  data: string;
};

interface RequestState {
  method: HttpMethod;
  body?: string;
  url: string;
  response: responseType;
  loading: boolean;
}

const initialState: RequestState = {
  method: "GET",
  body: "",
  url: "",
  response: { status: 0, time: 0, data: "" },
  loading: false,
};

export const reqSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    setMethod: (state, action: PayloadAction<HttpMethod>) => {
      state.method = action.payload;
    },
    setBody: (state, action: PayloadAction<string>) => {
      state.body = action.payload;
    },
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setResponse: (state, action: PayloadAction<responseType>) => {
      state.response = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setMethod, setBody, setUrl, setResponse, setLoading } =
  reqSlice.actions;

export default reqSlice.reducer;
