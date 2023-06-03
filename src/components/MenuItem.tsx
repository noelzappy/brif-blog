export default function MenuItem({ text, active, onClick }) {
  return (
    <div
      className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3"
      onClick={onClick}
    >
      <span className={`${active && "font-bold"} hidden xl:inline`}>
        # {text}
      </span>
    </div>
  );
}
