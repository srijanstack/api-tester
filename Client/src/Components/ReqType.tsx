import { setMethod, type HttpMethod} from "../Features/ReqSlice";
import { useAppDispatch, useAppSelector } from "../App/hooks";

const btnColor: Record<HttpMethod, string> = {
    "GET": "text-orange-500",
    "POST": "text-green-500",
    "PUT": "text-blue-500",
    "DELETE": "text-red-500"
}

function ReqType() {
  const dispatch = useAppDispatch();
  const method = useAppSelector((state) => state.request.method);



  return (
    <>
      <button
        className="btn w-26"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" }}
      >
        <span className={`${btnColor[method]}`}>{method}</span>
      </button>

      <ul
        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" }}
      >
        <li>
          <a
            className="text-orange-500"
            onClick={() => dispatch(setMethod("GET"))}
          >
            GET
          </a>
        </li>
        <li>
          <a
            className="text-green-500"
            onClick={() => dispatch(setMethod("POST"))}
          >
            POST
          </a>
        </li>
        <li>
          <a
            className="text-blue-500"
            onClick={() => dispatch(setMethod("PUT"))}
          >
            PUT
          </a>
        </li>
        <li>
          <a
            className="text-red-500"
            onClick={() => dispatch(setMethod("DELETE"))}
          >
            DELETE
          </a>
        </li>
      </ul>
    </>
  );
}

export default ReqType;
