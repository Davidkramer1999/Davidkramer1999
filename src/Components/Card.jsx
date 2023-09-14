import { motion, useAnimation } from 'framer-motion';

const Card = ({ title, content, isActive, onClick }) => {
  const controls = useAnimation();
  
  const hoverWaveEffect = async () => {
    await controls.start({
      scaleX: [1, 1.05, 1, 1.05, 1],
      scaleY: [1, 0.95, 1, 0.95, 1],
    });
  };

  return (
    <motion.div 
      animate={controls}
      onClick={onClick}
      onHoverStart={hoverWaveEffect}
      className={`transform duration-500 ${isActive ? 'scale-110 z-10' : 'scale-100 z-0'} flex flex-col justify-center items-center p-8 rounded-lg ${isActive ? 'bg-blue-100 text-gray-700' : 'bg-blue-200 text-gray-700'} transition-all ease-in-out shadow-lg border-4 border-gray-500`}
    >
      <h1 className="text-lg font-bold">{title}</h1>
      {isActive && <p className="leading-relaxed">{content}</p>}
    </motion.div>
  );
};

export default Card;
