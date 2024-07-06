import StepsComponent from "@/components/Steps";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Calculadora Divisão de Despesas</h1>
            <StepsComponent />
        </main>
    );
}
