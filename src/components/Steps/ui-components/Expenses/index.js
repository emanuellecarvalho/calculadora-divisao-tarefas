import {Button, Input, InputNumber} from "antd";
import styles from "../../../../app/page.module.css";
import {PlusOutlined, CloseCircleFilled} from '@ant-design/icons';
import {useState} from "react";


export default function Expenses({form, setForm}) {
    console.log('Expenses form', form)
    const [expense, setExpense] = useState({
        expenseName: '', expenseValue: null
    });

    const onChangeExpenseName = (value) => {
        setExpense({...expense, expenseName: value});
    }

    const onChangeExpenseValue = (value) => {
        setExpense({...expense, expenseValue: value});
    }


    const handleClick = () => {
        console.log('Expenses form', form)

        setForm({
            ...form,
            expenses: [...form.expenses, expense]
        });

    };


    return (
        <div>
            <h3>Adição de Despesas em comum</h3>           
            <span>Informe o nome da despesa: </span>
            <Input value={expense.expenseName} placeholder="Aluguel"  onChange={e => onChangeExpenseName(e.target.value)}/>
            <span>Informe o valor da despesa: </span>
            <InputNumber
                placeholder={'R$ 2.000'}
                style={{width: '100%'}}
                min={1}
                max={9999}
                onChange={e => onChangeExpenseValue(e)}
            />
            <div className={styles.plus}>
                <Button type="primary" shape="circle" icon={<PlusOutlined/>} size="small" onClick={handleClick}/>
            </div>
            <div>
                {form?.expenses.map((p, index) => (
                <div key={index}>{p.expenseName} - R$ {p.expenseValue} <CloseCircleFilled style={{  fontSize: '12px', color: '#FF1818'}}/></div>
                ))}
            </div>
        </div>
    );
}