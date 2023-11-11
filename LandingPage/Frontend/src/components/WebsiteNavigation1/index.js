import { useCallback, useState, forwardRef } from "react";
import CareerBenefitsSection from "../CareerBenefitsSection";
import PrivacyPolicySection from "../PrivacyPolicySection";
import "./style.css";

function WebsiteNavigation1() {
  return (
    <div className={`main-container2`}>
      <div className={`main-header-container`}>
        <p className={`desor-orientation`}>Дезориентация</p>
        <div className={`navigation-links`}>
          <p className={`desor-orientation`}>О нас</p>
          <p className={`desor-orientation`}>Услуги</p>
          <p className={`desor-orientation`}>Блог</p>
          <p className={`desor-orientation`}>Отзывы</p>
        </div>
      </div>
      <CareerBenefitsSection />
      <PrivacyPolicySection />
    </div>
  );
}

export default WebsiteNavigation1;
