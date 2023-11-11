import { useCallback, useState, forwardRef } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function WebsiteNavigation() {
  return (
    <div className={`chat-helper1`}>
      <div className={`main-navigation`}>
        <div className={`header-container`}>
          <SvgIcon1 className="svg-container" />
          <p className={`email-text`}>support@dezorientaciya.ru</p>
        </div>
        <div className={`service-links`}>
          <p className={`services-title`}>Услуги</p>
          <p className={`services-blog`}>Блог</p>
        </div>
      </div>
      <div className={`testimonial-section1`}>
        <div className={`testimonial-section`}>
          <div className={`image-container4`}>
            <img className={`image-container2 img-content-ca60bf0c`} />
          </div>
          <div className={`image-container3`}>
            <img className={`image-container2 img-content-38a7c7eb`} />
          </div>
        </div>
        <div className={`testimonials-section`}>
          <p className={`testimonials-title`}>Отзывы</p>
          <p className={`personnel-selection-text`}>Подбор персонала</p>
        </div>
      </div>
    </div>
  );
}

export default WebsiteNavigation;
