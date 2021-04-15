import styles from '@components/Contact/Contact.module.scss';
// const params = [
//   {
//     labelText: 'Nombre',
//     name: 'nombre',
//     id: 'nombre',
//     type: 'text',
//   },
// ];

// const exemple = (
//   <>
//     {params.map((el) => (
//       <InputText
//         labelText={el.labelText}
//         name={el.name}
//         id={el.id}
//         type={el.type}
//       />
//     ))}
//   </>
// );
export default function InputText({ labelText, name, id, type }) {
  return (
    <div className={styles.InputText}>
      <div>
        <label htmlFor={name}>{labelText}</label>
      </div>
      <input name={name} id={id} type={type} />
    </div>
  );
}
