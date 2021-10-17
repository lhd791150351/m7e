import React from 'react';
import PageTitle from '../page-title';
import SCHEDULE_LIST from '../schdule-list';
import styles from './index.module.less';

export default function Schedule() {
  function menuItemClick(index) {
    //
  }

  const renderSchedule = () => {
    return SCHEDULE_LIST.map((item, idx) => {
      return (
        <React.Fragment key={idx}>
          <div className={styles['menu-title']}>{item.date}</div>
          {item.eventList.map((event) => {
            return (
              <div
                key={event.name}
                className={styles['menu-item']}
                onClick={() => menuItemClick(0)}
              >
                {event.name}
              </div>
            );
          })}
        </React.Fragment>
      );
    });
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center w-screen h-screen bg-black"
      style={{ paddingBottom: 50 }}
    >
      <PageTitle title="Schedule" />
      <div className={styles.container}>{renderSchedule()}</div>
    </div>
  );
}
