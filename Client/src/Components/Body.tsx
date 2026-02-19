import ReqType from "./ReqType";
import InputBody from "./InputBody";
import { setUrl, setResponse } from "../Features/ReqSlice";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import axios from "axios";


function Body() {
  const dispatch = useAppDispatch();
  const url = useAppSelector((state) => state.request.url);
  const method = useAppSelector((state) => state.request.method);
  const body = useAppSelector((state) => state.request.body);

  const handleClick = async () => {
    if (!url) {
      dispatch(
        setResponse({
          status: 500,
          time: 0,
          data: "Enter URL and select method",
        }),
      );
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/api/request", {
        url,
        method,
        body: body ? JSON.parse(body) : undefined,
      });

      dispatch(
        setResponse({
          status: res.data.status,
          time: res.data.time,
          data: JSON.stringify(res.data.data, null, 2),
        }),
      );
    } catch (err: any) {
      dispatch(
        setResponse({
          status: err.response?.status || 0,
          time: 0,
          data: err.response?.data || err.message,
        }),
      );
    }
    console.log("running");
  };

  return (
    <>
      <main className="h-1/2 flex flex-col gap-2 p-4  border-b">
        <div className="h-14 w-1/2 rounded-3xl border-2 flex items-center px-4 justify-around">
          <ReqType />
          <input
            type="url"
            required
            className="h-4/5 w-2/3 rounded-3xl border focus:outline-0 pl-2"
            placeholder="Enter URL or paste text"
            onChange={(e) => dispatch(setUrl(e.target.value))}
            value={url}
          />
          <button
            className="bg-blue-600 text-white p-2 w-28 rounded-md"
            onClick={handleClick}
          >
            Send
          </button>
        </div>
        <InputBody />
      </main>
    </>
  );
}
export default Body;
