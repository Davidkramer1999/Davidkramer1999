

import React, { useState} from 'react'
import Card from "./Card";
import { useTranslation } from 'react-i18next';
import CircleImage from "./CircleImage";
import gitHub from '../images/github.jpg'
import linkedin  from '../images/likined.png' 
import cv  from '../images/cv.jpg' 


export default function AboutMe() {
     const { t} = useTranslation();

  const [activeCard, setActiveCard] = useState(null);



  const handleCardClick = (cardId) => {
    if (activeCard === cardId) {
      setActiveCard(null);
    } else {
      setActiveCard(cardId);
    }
  };

  const cardsData = [
  { id: 1, title: t('introduction'), content:t('introductionDescription')},
  { id: 2, title: t('education'), content: t('educationDescription')},
  { id: 3, title:  t('knowledge'), content:  t('knowledgeDescription')},
  { id: 4, title:t('myExperiences'), content: t('myExperiencesDescription') },
];

const sortedCards = cardsData.sort((a, b) => (a.id === activeCard ? -1 : b.id === activeCard ? 1 : 0));


return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-6 mb-8">
        {sortedCards.map((card) => (
          <div key={card.id} className="w-64 min-w-[300px]">
            <Card
              title={card.title}
              content={card.content}
              isActive={activeCard === card.id}
              onClick={() => handleCardClick(card.id)}
            />
          </div>
        ))}
      </div>
      <div className='flex items-center gap-4'>
        <CircleImage imgSrc={cv} cvPath="/path/to/your_cv.pdf" />
        <CircleImage imgSrc={gitHub} link="https://github.com/Davidkramer1999" />
        <CircleImage imgSrc={linkedin} link="https://linkedin.com/in/yourusername" />
      </div>
    </div>
  );
}

