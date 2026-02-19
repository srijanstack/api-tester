import { useAppSelector } from "../App/hooks";

type StatusInfo = {
  description: string;
  category: string;
  color: string;
};

const statusCodes: Record<number, StatusInfo> = {
  200: { description: "OK", category: "Success", color: "#28a745" },
  201: { description: "Created", category: "Success", color: "#28a745" },
  202: { description: "Accepted", category: "Success", color: "#28a745" },
  204: { description: "No Content", category: "Success", color: "#28a745" },

  301: {
    description: "Moved Permanently",
    category: "Redirection",
    color: "#ffc107",
  },
  302: { description: "Found", category: "Redirection", color: "#ffc107" },
  304: {
    description: "Not Modified",
    category: "Redirection",
    color: "#ffc107",
  },

  400: {
    description: "Bad Request",
    category: "Client Error",
    color: "#dc3545",
  },
  401: {
    description: "Unauthorized",
    category: "Client Error",
    color: "#dc3545",
  },
  403: { description: "Forbidden", category: "Client Error", color: "#dc3545" },
  404: { description: "Not Found", category: "Client Error", color: "#dc3545" },
  409: { description: "Conflict", category: "Client Error", color: "#dc3545" },

  500: {
    description: "Internal Server Error",
    category: "Server Error",
    color: "#6f42c1",
  },
  502: {
    description: "Bad Gateway",
    category: "Server Error",
    color: "#6f42c1",
  },
  503: {
    description: "Service Unavailable",
    category: "Server Error",
    color: "#6f42c1",
  },
  504: {
    description: "Gateway Timeout",
    category: "Server Error",
    color: "#6f42c1",
  },
};

function Output() {
  const response = useAppSelector((state) => state.request.response);
  return (
    <>
      <div className=" bg-base-200  rounded-lg m-2 mb-5 min-h-80 h-3/5 flex flex-col gap-3 ">
        <span className="m-3">Response</span>
        <div>
          <span className="p-2 border rounded-xl">Time:{response.time}ms</span>{" "}
          <span
            className={`p-2 border rounded-xl mr-2`}
            style={{
              borderColor: statusCodes[response.status]?.color || "#6c757d",
              color: statusCodes[response.status]?.color || "#6c757d",
            }}
          >
            Status:{response.status}{" "}
            {statusCodes[response.status]?.description || "Unknown"}
          </span>{" "}
        </div>

        <textarea
          className="w-full  textarea textarea-bordered font-mono focus:outline-0 min-h-full max-h-full"
          readOnly
          value={response.data}
        />
      </div>
    </>
  );
}
export default Output;
