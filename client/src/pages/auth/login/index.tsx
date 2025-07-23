import { Link } from "react-router-dom";
import WelcomeContent from "../common/welcome-content";

import { Button, Form, Input } from "antd";

function LoginPage() {
    const onFinish = (values: never) => {
        console.log("Received values:", values);
        // Aquí puedes manejar el registro del usuario
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1 lg:flex hidden">
                <WelcomeContent />
            </div>
            <div className="h-screen flex item-center justify-center">
                <Form
                    className="flex flex-col gap-5 w-96"
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <h1 className="text-2xl font-bold text-gray-600 mt-20 mb-12">
                        Inicia sesión aquí
                    </h1>

                    <Form.Item
                        name="email"
                        required
                        label="Correo"
                        rules={[
                            {
                                required: true,
                                message: "Por favor ingresa tu correo electrónico",
                            },
                        ]}
                    >
                        <Input placeholder="Escriba su correo electrónico" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        required
                        label="Contraseña"
                        rules={[
                            { required: true, message: "Por favor ingresa tu contraseña" },
                        ]}
                    >
                        <Input.Password placeholder="Escriba su contraseña" />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block>
                        Registrate
                    </Button>

                    <Link to="/register">Todavía no tienes una cuenta? Registrate</Link>
                </Form>
            </div>
        </div>
    );
}

export default LoginPage;
