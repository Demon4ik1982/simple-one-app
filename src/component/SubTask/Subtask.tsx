import React, { useState, useRef, useEffect } from "react";
import SubMenu from "../SubMenu/SubMenu";
import SubTaskInfo from "../SubTaskInfo/SubTaskInfo";
import './SubTask.module.scss';

const SubTask: React.FC = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const subTaskInfoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (subTaskInfoRef.current && subTaskInfoRef.current.scrollTop > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    const subTaskInfoEl = subTaskInfoRef.current;
    if (subTaskInfoEl) {
      subTaskInfoEl.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (subTaskInfoEl) {
        subTaskInfoEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="sub-task-wrapper">
      <div className={`sub-menu-wrapper ${hasShadow ? 'shadow' : ''}`}>
        <SubMenu />
      </div>
      <div ref={subTaskInfoRef} className="sub-task-info-wrapper">
        <SubTaskInfo />
      </div>
    </div>
  );
};

export default SubTask;
