interface Inputfield {
  name: string;
}
function Inputfield({ name }: Inputfield) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className={`lock text-sm font-medium leading-6  capitalize`}
        >
          {name}
          <span className="text-red-600"> *</span>
        </label>
      </div>
      <div className="mt-2">
        {/* <input
          id={name}
          name={name}
          type={name}
          autoComplete={name}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#efd74e] sm:text-sm sm:leading-6"
        /> */}
      </div>
    </div>
  );
}

export default Inputfield;
