import styles from "./userDetails.module.scss"

function UserDetails() {
  return (
    <table className={styles.customerTable}>
      <tbody>
        <tr>
          <th>order ID</th>
          <th>customer</th>
          <th>adress</th>
          <th>total</th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>129837819237</td>
          <td>ron mcelroy</td>
          <td>saint nicolas st. 212-33 LA</td>
          <td>$79.80</td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserDetails;
