const Card = ({ title, content, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`transform duration-500 ${isActive ? 'scale-110 z-10' : 'scale-100 z-0'} flex flex-col justify-center items-center p-8 rounded-lg ${isActive ? 'bg-blue-100 text-gray-700' : 'bg-blue-200 text-gray-700'} transition-all ease-in-out shadow-lg border-4 border-gray-500`}
    >
      <h1 className="text-lg font-bold whitespace-normal break-words">{title}</h1>
      {isActive && <p className="leading-relaxed whitespace-normal break-words max-w-xs">{content}</p>}</div>
  );
};

export default Card;
