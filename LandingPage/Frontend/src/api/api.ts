import ky from "ky";

export const api = ky.create({
    prefixUrl: "http://127.0.0.1:8000",
});
