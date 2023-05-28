import axios from "axios";

export var api = axios.create({
	baseURL: `http://localhost:80/server`,
});
