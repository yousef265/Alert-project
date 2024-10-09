import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { alertTypes } from "../Types/alertTypes";

interface IProps {
    type: alertTypes;
    content?: string;
    children?: ReactNode;
    icon: ReactNode;
    title: string;
}

function Alert({ icon, type, title, content, children }: IProps) {
    return (
        <>
            <div className={type}>
                <div className="alert-header">
                    <div className="left-side">
                        <div className="icon">{icon}</div>
                        <p className="title">{title}</p>
                    </div>
                    <div className="right-side">
                        <div className="icon">
                            <X size={18} />
                        </div>
                    </div>
                </div>

                {children ? children : <p className="alert-body">{content}</p>}
            </div>
        </>
    );
}

export default Alert;
