function General({ credentials }) {
  const { first, last, phone, email } = credentials;

  return (
    <fieldset>
      <legend>General information</legend>
      <label>
        First name:
        <input type="text" value={first} />
      </label>
      <label>
        Last name:
        <input type="text" value={last} />
      </label>
      <label>
        Phone number:
        <input type="tel" value={phone} />
      </label>
      <label>
        Email address:
        <input type="email" value={email} />
      </label>
    </fieldset>
  );
}

export default General;
