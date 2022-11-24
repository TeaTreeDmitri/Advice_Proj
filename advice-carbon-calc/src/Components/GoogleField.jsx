function GoogleField(props) {
  return (
    <label htmlFor="storage1">
      Google storage size in GB
      <input
        type="number"
        name="google-storage"
        id="google-storage"
        step=".01"
        required
        autoFocus
        placeholder="Enter a number"
        onKeyUp={props.handleGoogleChange}
      />
    </label>
  );
}

export default GoogleField;
