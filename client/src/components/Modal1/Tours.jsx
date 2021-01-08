import React, {useState} from 'react';
import * as Styled from '../../styles/styles.js';
import {getDates} from '../../utils/Logic.js';
import TourDates from './TourDatesCarousel.jsx';
import {MdWarning} from 'react-icons/md'
import {caution, tourTypeIcon} from '../../utils/SVG.jsx';
import s from '../../styles/styles.css';

const TourSection = () => {
  const [financingCheck, setFinancingCheck] = useState(false);

  var dates = getDates();
  var times = ['Choose a time', '12:30pm', '1:00pm', '1:30pm', '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm', '4:30pm', '5:00pm']

  return (
    <Styled.Tours>
      <Styled.ToursContainer>
        <Styled.TourHeader>Schedule a Tour</Styled.TourHeader>
        <Styled.TourType>Tour Type{tourTypeIcon}</Styled.TourType>
        <Styled.InPerson>In-Person</Styled.InPerson><Styled.VideoChat>Video Chat</Styled.VideoChat>

        <Styled.CalendarContainer>
          {dates.map((date, index) => <TourDates date={date} key={index}/>)}
        </Styled.CalendarContainer>

        <Styled.ChooseATime>
          {times.map((time, index) => <option key={index}>{time}</option>)}
        </Styled.ChooseATime>

        <Styled.NamePhoneContainer>
          <Styled.TourNameInput placeholder="Name"></Styled.TourNameInput>
          <Styled.TourPhoneInput placeholder="Phone"></Styled.TourPhoneInput>
        </Styled.NamePhoneContainer>

        <Styled.TourEmailInput placeholder="Email"></Styled.TourEmailInput>

        <Styled.FinancingCheckBoxContainer >
          <Styled.FinancingCheckBoxInput type="checkbox" onClick={() => setFinancingCheck(!financingCheck)}/>
          <Styled.FinancingCheckMessageContainer>
            <Styled.FinancingCheckMessage>{financingCheck ? 'A licensed lender will call you soon' : 'I want to talk about financing'}</Styled.FinancingCheckMessage>
          </Styled.FinancingCheckMessageContainer>
        </Styled.FinancingCheckBoxContainer>

        <Styled.ScheduleATourButton>Schedule a Tour</Styled.ScheduleATourButton>

        <Styled.PublicHealthContainer>
          <MdWarning className={`${s.iconWarning}`}/>
          <Styled.PublicHealthContainerText>Public Health Advisory</Styled.PublicHealthContainerText>
        </Styled.PublicHealthContainer>

        <Styled.TourDescription>By pressing Schedule A Tour, you agree that Homents and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our <span style={{color: "rgb(0, 120, 130)"}}>Terms of Use</span> Homents does not endorse any <span style={{color: "rgb(0, 120, 130)"}}>real estate professionals</span></Styled.TourDescription>

      </Styled.ToursContainer>
    </Styled.Tours>
  )
}

export default TourSection;