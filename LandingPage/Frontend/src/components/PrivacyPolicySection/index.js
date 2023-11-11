import { useCallback, useState, forwardRef } from "react";
import WebsiteNavigation from "../WebsiteNavigation";
import "./style.css";

function PrivacyPolicySection() {
  return (
    <div className={`main-container`}>
      <div className={`main-container1`}>
        <WebsiteNavigation />
        <p className={`privacy-policy-title`}>Политика конфиденциальности</p>
      </div>
      <div className={`career-section`}>
        <p className={`services-title`}>Карьера c нами</p>
      </div>
    </div>
  );
}

export default PrivacyPolicySection;
