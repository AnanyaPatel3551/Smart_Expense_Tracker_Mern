// LoginPage.js
import { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from "../../utils/ApiRequest";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });

  useEffect(() => {
    if(localStorage.getItem("user")){
      navigate("/");
    }
  }, [navigate]);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = values;

    try {
      const { data } = await axios.post(loginAPI, { email, password });
      if(data.success){
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success(data.message, toastOptions);
        navigate("/");
      } else {
        toast.error(data.message, toastOptions);
      }
    } catch (error) {
      console.error(error.response?.data || error);
      toast.error("Something went wrong!", toastOptions);
    } finally {
      setLoading(false);
    }
  };

  const particlesInit = useCallback(async (engine) => await loadFull(engine), []);
  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{ /* keep your particle options here */ }}
        style={{ position: "absolute", zIndex: -1, top:0, left:0, right:0, bottom:0 }}
      />
      <Container className="mt-5" style={{ position: "relative", zIndex: 2 }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1 className="text-center mt-5">
              <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "white" }} />
            </h1>
            <h2 className="text-white text-center">Login</h2>
            <Form>
              <Form.Group className="mt-3">
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} value={values.email} />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} value={values.password} />
              </Form.Group>
              <div className="mt-4" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Button type="submit" className="mt-3 btnStyle" onClick={!loading ? handleSubmit : null} disabled={loading}>
                  {loading ? "Signing in…" : "Login"}
                </Button>
                <p className="mt-3" style={{ color: "#9d9494" }}>
                  Don't have an account? <Link to="/register" className="text-white lnk">Register</Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default Login;
