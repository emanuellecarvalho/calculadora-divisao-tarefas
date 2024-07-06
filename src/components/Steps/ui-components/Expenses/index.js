import { Button, Input, InputNumber, message } from "antd";
import styles from "../../../../app/page.module.css";
import { PlusOutlined, CloseCircleFilled } from "@ant-design/icons";
import { useState } from "react";

export default function Expenses({ form, setForm }) {
    const [expense, setExpense] = useState({
        expenseName: "",
        expenseValue: null,
    });

    const onChangeExpenseName = (value) => {
        setExpense({ ...expense, expenseName: value });
    };

    const onChangeExpenseValue = (value) => {
        setExpense({ ...expense, expenseValue: value });
    };

    const handleClick = () => {
        let fieldIsEmpty = false;

        if (!expense.expenseName.trim()) {
            message.error("Por favor, informe o nome da despesa.");
            fieldIsEmpty = true;
        }

        if (expense.expenseValue === null || expense.expenseValue <= 0) {
            message.error("Por favor, informe o valor da despesa.");
            fieldIsEmpty = true;
        }

        if (!fieldIsEmpty) {
            setForm({
                ...form,
                expenses: [...form.expenses, expense],
            });
            setExpense({ expenseName: "", expenseValue: null });
        }
    };

    return (
        <div>
            <h3>Adição de Despesas em comum</h3>
            <span>Informe o nome da despesa* </span>
            <Input
                value={expense.expenseName}
                placeholder="Aluguel"
                onChange={(e) => onChangeExpenseName(e.target.value)}
            />
            <span>Informe o valor da despesa* </span>
            <InputNumber
                placeholder={"R$ 2.000"}
                style={{ width: "100%" }}
                min={1}
                max={9999}
                onChange={(e) => onChangeExpenseValue(e)}
            />
            <div className={styles.plus}>
                <Button type="primary" shape="circle" icon={<PlusOutlined />} size="small" onClick={handleClick} />
            </div>
            <div>
                {form?.expenses.map((p, index) => (
                    <div key={index}>
                        {p.expenseName} - R$ {p.expenseValue}{" "}
                        <CloseCircleFilled style={{ fontSize: "12px", color: "#FF1818" }} />
                    </div>
                ))}
            </div>
        </div>
    );
}
