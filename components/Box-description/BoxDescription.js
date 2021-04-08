import styles from "@components/Box-description/Box.module.scss";

export default function BoxDescription() {
  const Box = () => {
    <div className={styles.box}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="28"
        viewBox="0 0 24 28"
      >
        <title>Database</title>
        <path d="M12 12c4.703 0 9.422-0.844 12-2.656v2.656c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2.656c2.578 1.813 7.297 2.656 12 2.656zM12 24c4.703 0 9.422-0.844 12-2.656v2.656c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2.656c2.578 1.813 7.297 2.656 12 2.656zM12 18c4.703 0 9.422-0.844 12-2.656v2.656c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2.656c2.578 1.813 7.297 2.656 12 2.656zM12 0c6.625 0 12 1.797 12 4v2c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2c0-2.203 5.375-4 12-4z"></path>
      </svg>
      <h3>Crea tu sistema de información</h3>
      <p>
        Crear tu sistema de gestión a medida, generando tablas e indicando los
        campos de información que requiere tu proceso de negocio.
      </p>
    </div>;
  };

  return <Box />;
}
