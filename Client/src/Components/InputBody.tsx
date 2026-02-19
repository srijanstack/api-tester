import { useAppDispatch, useAppSelector } from "../App/hooks";
import { setBody } from "../Features/ReqSlice";

function InputBody() {
  const dispatch = useAppDispatch();
  const body = useAppSelector((state) => state.request.body);
  return (
    <>
      <div className="flex flex-col h-4/5 bg-base-200 ">
        <span className="m-3">JSON</span>
        <textarea
          className="textarea w-full min-h-4/5 focus:outline-none"
          placeholder={`  {
            "name": "John",
            "age": 25,
            "profession": "Doctor"
        }`}
          value={body}
          onChange={(e) => dispatch(setBody(e.target.value))}
        ></textarea>
      </div>
    </>
  );
}
export default InputBody;
