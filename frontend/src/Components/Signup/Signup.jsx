import Form from "../Form";
import Loading from "../Loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const createNewClient = (client) => {
  return fetch("/client", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client),
  });
};

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [signupError, setSignupError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const client = {};

    for (let [key, value] of formData.entries()) {
      client[key] = value;
    }
    handleCreateNewClient(client);
  };

  const getCurrentUser = (client) => {
    return fetch(`/client/${client.username}`).then((res) => res.json());
  };

  const isUserNameUnique = async (client) => {
    const currentUser = await getCurrentUser(client);
    return currentUser.password === client.password ? true : false;
  };

  const handleCreateNewClient = (client) => {
    setLoading(true);
    if (isUserNameUnique) {
      createNewClient(client)
        .then(() => {
          navigate("/table");
        })
        .catch((err) => {
          throw err;
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setSignupError(true);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div form-container>
      <Form onSubmit={onSubmit} mode={"Sign up"} message={"Already have an account? Login!"}/>
      {signupError && (
        <div><p className="p-container">This username is not available, please choose something else!</p></div>
      )}
    </div>
  );
};
export default Signup;
