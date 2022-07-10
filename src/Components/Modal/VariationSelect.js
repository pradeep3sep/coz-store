export default function VariationSelect(props) {
    let variations = props.passvariations;
  return (
    <div>
      {variations.map((variation) => {
        return (
          <label className="variation"  key={variation}>
            {variation} <input type="text" className="d-none"/>
          </label>
        );
      })}
    </div>
  );
}
