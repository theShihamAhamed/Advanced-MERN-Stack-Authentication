export default function Input({
  icon: Icon,
  secondIcon: SecondIcon,
  onSecondIconClick,
  type,
  ...props
}) {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-sky-500"></Icon>
      </div>
      <input
        type={type}
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-sky-500 focus:ring-sky-500 text-white placeholder-gray-400 transition duration-200"
      />
      {SecondIcon && (
        <button
          type="button"
          onClick={onSecondIconClick}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-sky-500"
        >
          <SecondIcon className="size-5" />
        </button>
      )}
    </div>
  );
}
