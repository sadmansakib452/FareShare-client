import axios from "axios";
import { toast } from "react-toastify";

const loginService = ({ email, password }) => {
  return toast.promise(
    axios
      .post("http://localhost:5000/api/v1/auth/login", {
        email,
        password,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      }),
    {
      pending: {
        render() {
          return "Creating user...";
        },
        icon: "🚀",
      },
    }
  );
};

export default loginService;
