import {Input, InputNumber} from "antd";

export default function People() {
    return (
        <div>
            <Input placeholder="Digite seu nome"/>
            <InputNumber
                placeholder={'Digite seu salário'}
                style={{width: '100%'}}
                min={1}
                max={9999}
            />
        </div>
    );
}