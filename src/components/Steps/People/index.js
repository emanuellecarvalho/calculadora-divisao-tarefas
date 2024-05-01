import {Button, Input, InputNumber} from "antd";
import {PlusOutlined} from '@ant-design/icons';
import styles from "../../../app/page.module.css";
import {useState} from "react";


export default function People({form, setForm}) {
    const [people, setPeople] = useState({
        name: '', salary: 0
    });

    const onChangeName = (value) => {
        setPeople({...people, name: value});
    }

    const onChangeSalary = (value) => {
        setPeople({...people, salary: value});
    }

    const handleClick = () => {
        // form.people.push(people)
        setForm(people);
    };

    return (
        <div>
            <span>Informe o seu nome: </span>
            <Input placeholder="Ana Silva" onChange={e => onChangeName(e.target.value)}/>
            <span>Informe o seu salário: </span>
            <InputNumber
                placeholder={'R$ 2.000'}
                style={{width: '100%'}}
                min={1}
                max={9999}
                onChange={e => onChangeSalary(e)}
            />
            <div className={styles.plus}>
                <Button type="primary" shape="circle" icon={<PlusOutlined/>} size="small" onClick={handleClick}/>
            </div>
            {form.people.map(p => {
                {console.log('test', p)}
            <div>{p?.name}</div>
        })}
        </div>
    );
}