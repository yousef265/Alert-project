import { AlertTriangle, Ban, BellRing, CheckCheck, Info } from "lucide-react";
import Alert from "../Alert/Alert";
import "./index.scss";

function App() {
    return (
        <>
            <div className="container">
                <div className="header-content">
                    <h3>Dynamic Alert Project</h3>
                    <p>by Using Sass & typescript</p>
                </div>
                <Alert
                    type={"alert-default"}
                    title="Upgrade your plan"
                    icon={<BellRing size={18} />}
                    content={
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil consequatur quasi debitis modi blanditiis quam at eos in voluptates maiores aliquid dicta assumenda, eius quae porro est laudantium corporis?"
                    }
                />
                <Alert type={"alert-info"} title="Note" icon={<Info size={18} />}>
                    <div>
                        Lorem ipsum dolor sit amet, <a href="/">consectetur</a> adipisicing elit. Libero omnis illum perferendis quidem, esse ea sint? Ea ipsam perferendis dignissimos.
                    </div>
                </Alert>
                <Alert
                    type="alert-success"
                    title="Your order has been processed"
                    icon={<CheckCheck size={18} />}
                    content={
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil consequatur quasi debitis modi blanditiis quam at eos in voluptates maiores aliquid dicta assumenda, eius quae porro est laudantium corporis?"
                    }
                />
                <Alert
                    type="alert-error"
                    title="Something went wrong"
                    icon={<Ban size={18} />}
                    content={
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil consequatur quasi debitis modi blanditiis quam at eos in voluptates maiores aliquid dicta assumenda, eius quae porro est laudantium corporis?"
                    }
                />
                <Alert
                    type="alert-warning"
                    title="Tips & Tricks"
                    icon={<AlertTriangle size={18} />}
                    content={
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil consequatur quasi debitis modi blanditiis quam at eos in voluptates maiores aliquid dicta assumenda, eius quae porro est laudantium corporis?"
                    }
                />
            </div>
        </>
    );
}

export default App;
