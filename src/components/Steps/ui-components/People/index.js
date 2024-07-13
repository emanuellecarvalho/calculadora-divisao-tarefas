import { Button, Input, InputNumber, message } from "antd";
import { PlusOutlined, CloseCircleFilled } from "@ant-design/icons";
import styles from "../../../../app/page.module.css";
import { useState } from "react";

export default function People({ form, setForm }) {
    const [person, setPerson] = useState({
        name: "",
        salary: null,
    });

    const onChangeName = (value) => {
        setPerson({ ...person, name: value });
    };

    const onChangeSalary = (value) => {
        setPerson({ ...person, salary: value });
    };

    const handleClick = () => {
        let fieldIsEmpty = false;

        if (!person.name.trim()) {
            message.error("Por favor, informe o nome.");
            fieldIsEmpty = true;
        }

        if (person.salary === null || person.salary <= 0) {
            message.error("Por favor, informe um salário válido.");
            fieldIsEmpty = true;
        }

        if (!fieldIsEmpty) {
            setForm({
                ...form,
                people: [...form.people, person],
            });

            setPerson({ name: "", salary: null });
        }
    };

    const handleRemoveItem = (indexItem) => {
        const newPeople = form?.people.filter((_, i) => i !== indexItem);

        setForm({
            ...form,
            people: newPeople,
        });
    };

    return (
        <div>
            <h3>Seleção de Pessoas</h3>
            <span>Informe o seu nome* </span>
            <Input value={person?.name} placeholder="Ana Silva" onChange={(e) => onChangeName(e.target.value)} />
            <span>Informe o seu salário* </span>
            <InputNumber
                value={person?.salary}
                placeholder={"R$ 2.000"}
                style={{ width: "100%" }}
                min={1}
                max={9999}
                onChange={(e) => onChangeSalary(e)}
            />
            <div className={styles.plus}>
                <Button type="primary" shape="circle" icon={<PlusOutlined />} size="small" onClick={handleClick} />
            </div>
            <div>
                {form?.people.map((p, index) => (
                    <div key={index}>
                        {p.name} - R$ {p.salary}{" "}
                        <CloseCircleFilled
                            onClick={() => handleRemoveItem(index)}
                            style={{ fontSize: "12px", color: "#FF1818" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
