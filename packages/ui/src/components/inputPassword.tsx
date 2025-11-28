import {Input} from "@workspace/ui/components/input.js";
import {useState} from "react";
import {Eye, EyeClosed} from "lucide-react";
import * as React from "react";

export default function InputPassword() {
    const [viewPassword, setViewPassword] = useState<boolean>(false)
    return(
        <div>
            <button>
                {viewPassword ? (
                    <Eye size={16} />
                ) : (
                    <EyeClosed size={16} />
                )}
            </button>
            <Input type="password" />
        </div>

    )
}