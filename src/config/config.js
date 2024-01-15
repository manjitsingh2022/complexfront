// export const apiUrl = "http://127.0.0.1:8000";

// //export const apiUrl = process.env.API_ENDPOINT;

export const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "http://3.212.247.81";

export const calenderDays = 120;
