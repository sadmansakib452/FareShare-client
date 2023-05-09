import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const registerService = (data) => {

  return toast.promise(
    axios.post("http://localhost:5000/api/v1/auth/register", {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.password,
        roles: data.userRoll,
        phone: data.phoneNumber,
        nid: data.nid,
        address: data.address,
        type: data.type,
        model: data.model,
        licensePlate: data.licensePlate,
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

export default registerService;
