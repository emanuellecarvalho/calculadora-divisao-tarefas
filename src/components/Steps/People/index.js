import { Input, InputNumber, Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import styles from "../../../app/page.module.css";


export default function People() {
    return (
        <div className={styles.main}>
            <span>Informe o seu nome: </span>
            <Input placeholder="Ana Silva"/>    
            <span>Informe o seu salário: </span>
            <InputNumber
                placeholder={'R$ 2.000'}
                style={{width: '100%'}}
                min={1}
                max={9999}
            />
            <div className="plus-btn">
            <Button type="primary" shape="circle" icon={<PlusOutlined />} size="small" onClick={() => console.log('onClick')} />
            </div>
        </div>
    );
}