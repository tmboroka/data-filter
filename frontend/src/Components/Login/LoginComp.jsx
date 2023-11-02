import Loading from "../Loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form";

const LoginComp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userdata = {};

    for (let [key, value] of formData.entries()) {
      userdata[key] = value;
    }
    handleLoginUser(userdata);
  };

  const handleLoginUser = async (user) => {
    setLoading(true);
    const isValid = await validateUser(user);
    if (isValid) {
      navigate("/table");
    } else {
      setLoginError(true);
    }
    setLoading(false);
  };

  const getCurrentUser = (user) => {
    return fetch(`/client/${user.username}`).then((res) => res.json());
  };

  const validateUser = async (user) => {
    const currentUser = await getCurrentUser(user);
    return currentUser.password === user.password ? true : false;
  };



  if (loading) {
    return <Loading />;
  }

  return (
    <div className='form-container'>
      <Form onSubmit={onSubmit} mode={"Login"} message={"Don't have an account yet? Sign up!"} />
      {loginError && <div className="p-container"><p>Invalid username or password</p></div>}
    </div>
  );
};

export default LoginComp;
