export default function AddressInputs({
  addressProps,
  setAddressProps,
  disabled = false,
}) {
  const { phone, streetAddress, postalCode, city, country } = addressProps;
  return (
    <>
      <label>Phone number</label>
      <input
        disabled={disabled}
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(evt) => setAddressProps('phone', evt.target.value)}
      />
      <label>Street address</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Street address"
        value={streetAddress}
        onChange={(evt) => setAddressProps('streetAddress', evt.target.value)}
      />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label>Postal code</label>
          <input
            disabled={disabled}
            type="text"
            placeholder="Postal code"
            value={postalCode}
            onChange={(evt) => setAddressProps('postalCode', evt.target.value)}
          />
        </div>
        <div>
          <label>City</label>
          <input
            disabled={disabled}
            type="text"
            placeholder="City"
            value={city}
            onChange={(evt) => setAddressProps('city', evt.target.value)}
          />
        </div>
      </div>
      <label>Country</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Country"
        value={country}
        onChange={(evt) => setAddressProps('country', evt.target.value)}
      />
    </>
  );
}
