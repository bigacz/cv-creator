function GeneralPreview({ credentials }) {
  const { first, last, email, phone } = credentials;

  return (
    <div>
      <p>
        {first} {last}
      </p>
      <p>
        {email} {phone}
      </p>
    </div>
  );
}

export default GeneralPreview;
