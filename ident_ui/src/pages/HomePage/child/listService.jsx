import React from 'react';

import SkillCard from './serviceCard';

function ServiceList() {
  return (
    <div className="skill">
      <SkillCard
        skillName="Teeth whitening"
        skillImg="/img/tay_rang.png"
        description="Whitening is among the most popular dental procedures because it can greatly improve how your teeth look."
      />
      <SkillCard
        skillName="Teeth cleaning"
        skillImg="/img/cao_voi.png"
        description="Teeth cleaning is part of oral hygiene and involves the removal of dental plaque from teeth (dental caries)."
      />
      <SkillCard
        skillName="Dental anesthesia"
        skillImg="/img/kiem_tra.png"
        description="Dental anesthesia is a field of anesthesia that includes not only local but sedation and general anesthesia."
      />
      <SkillCard
        skillName="Orthodontics"
        skillImg="/img/chinh_nha.png"
        description="Orthodontics is the branch of dentistry that corrects teeth and jaws that are positioned improperly."
      />
    </div>
  )
}

export default ServiceList