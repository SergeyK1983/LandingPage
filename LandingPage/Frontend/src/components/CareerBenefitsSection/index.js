import { useCallback, useState, forwardRef } from "react";
import ChatAssistant from "../ChatAssistant";
import "./style.css";

function CareerBenefitsSection() {
  return (
    <div className={`chat-assistant-container`}>
      <div className={`chat-assistant-container3`}>
        <div className={`chat-assistant-container2`}>
          <ChatAssistant />
          <p className={`chat-assistant-text`}>
            Точный расчет заработка
            <br />
            Информированные решения о карьере
            <br />
            Мотивация и уверенность
            <br />
            20% меняют карьеру, 90% понимают свой потенциал
          </p>
        </div>
        <div className={`chat-helper`}>
          <img className={`image-container1 img-content-3efc2541`} />
        </div>
      </div>
      <div className={`chat-assistant-container1`}>
        <div className={`time-value-calculation-container`}>
          <div className={`time-value-container`}>
            <p className={`time-value-text`}>Хочешь узнать, насколько ценно твоё время?Давай рассчитаем, сколько ты получаешь в час!</p>
          </div>
        </div>
        <div className={`time-value-container1`}>
          <div className={`rounded-container`}>
            <img className={`image-container img-content-d5af2ed8`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerBenefitsSection;
