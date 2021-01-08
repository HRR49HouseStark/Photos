import styled, {css, keyframes} from 'styled-components';

// ******************** Nav Bar & Search Path ******************** //

// ********** Nav Bar ********** //

export const NavBar = styled.div`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid rgb(232, 233, 234);
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const LeftSideNavContainer = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  height: 20px;
  width: 80px;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const SearchHouses = styled.input`
  width: 100px;
  height: 100%;
  width: 350px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: rgb(245, 246, 247);
  border: none;
  padding-left: 15px;
  font-size: 16px;
  font-family: TruliaSans;
  color: rgb(59, 65, 68);
`;

export const SearchHousesButton = styled.button`
  height: 105%;
  padding: 14px 12px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgb(217, 60, 35);
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgb(156, 17, 20);
  }
`;

export const BuyDropDown = styled.button`
  height: 105%;
  padding: 0 15px;
  border-radius: 8px;
  font-family: TruliaSansBold;
  background: white;
  font-size: 16px;
  margin-left: 4px;
  border: none;
  color: rgb(59, 65, 68);

  &: hover {
    background-color: rgb(0, 120, 130);
    color: white;
    cursor: pointer;
  }
`;

export const RentDropDown = styled(BuyDropDown)``;

export const MortgageDropDown = styled(BuyDropDown)``;

export const RightSideNavContainer = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
`;

export const SavedHomes = styled(BuyDropDown)`
  margin: 0 5px;
`;

export const SavedSearches = styled(SavedHomes)``;

export const SignUpOrLogin = styled(SavedHomes)`
border: 1px solid rgb(205, 209, 212);

&:hover {
  background-color: rgb(205, 209, 212);
}
`;

export const MainMenu = styled.button`
  padding: 5px 10px;
  background: white;
  margin: 0 10px 0 5px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

// ********** Search Path ********** //

export const SearchPathContainer = styled.div`
  width: 1000px;
  height: 35px;
  margin: 0 auto;
  display: flex;
`;

export const BackToSearch = styled.div`
  display: flex;
  align-items: center;
  font-family: TruliaSansBold;
  font-size: 14px;
  color: rgb(0, 120, 130);
  margin-right: 40px;
`;

export const PathContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgb(134, 144, 153);
`;

export const StatePath = styled.span`
  color: rgb(0, 120, 130);
`;

export const CityPath = styled(StatePath)``;
export const ZipPath = styled(StatePath)``;

// ******************** APP ******************** //

// ********** Containers ********** //

export const Container = styled.div`
  overflow: hidden;
  width: 1000px;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  font-family: TruliaSansBold;
`;

export const Grid = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr;
  gap: 7px;
  width: 100%;
  height: 100%;
  transition: all .5s ease;

  ${Container}:hover & {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

// ********** Buttons ********** //

export const ForSale = styled.span`
  padding: 3px 5px;
  margin: 10px;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  background: white;
  color: rgb(0, 178, 91);
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
`;

export const ButtonsLayout = styled.div`
  text-align: center;
  position: absolute:
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Save = styled.div`
  padding: 0px 15px 10px 15px;
  margin: 10px 7.5px 10px 10px;
  display: inline-block;
  background: white;
  border-radius: 5px;
  position: relative;
  font-weight: bold;

  &:hover {
    background: rgb(232, 233, 234);
    cursor: pointer;
  }
`;

export const Share = styled.div`
  padding: 0px 15px 10px 15px;
  margin: 10px 15px 10px 7.5px;
  display: inline-block;
  background: white;
  border-radius: 5px;
  position: relative;
  font-weight: bold;

  &:hover {
    background: rgb(232, 233, 234);
    cursor: pointer;
  }
`;

export const NumberOfPhotos = styled.div`
  padding: 0px 7px 7px 10px;
  margin: 10px;
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0;
  background: rgba(59, 65, 68, 0.8);
  color: white;
  font-size: 15px;
  border-radius: 5px;
  position: absolute;

  &:hover {
    background: rgba(134, 144, 153, 0.8);
    cursor: pointer;
  }
`;

// ********** Image 1 Photo ********** //

export const Image1Style = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 4;
  background-image: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

// ********** Image 2 Photo ********** //

export const Image2Style = styled.div`
  grid-row: 1;
  grid-column: 4;
  background-image: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

// ********** Image 3 Photo ********** //

export const Image3Style = styled.div`
  grid-row: 2;
  grid-column: 4;
  background-image: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

// ******************** FIRST MODAL ******************** //

// ********** Modal Structure and Overlay ********** //

const OpacityFrames = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
}
`;

const TransitionFrames = keyframes`
  from {
    opacity: 0;
    transform: scale(.5)
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Modal1 = styled.div`
  position: fixed;
  background: white;
  top: 5%;
  left: 5%;
  height: 90%;
  width: 90%;
  z-index: 999;
  border-radius: 10px;
  display: grid;
  grid-template: 60px 35px 1fr / 1fr 350px;
  font-family: TruliaSansBold;
  color: rgb(59, 65, 68);

  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: ${TransitionFrames};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
  z-index: 999;

  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: ${OpacityFrames};
`;

// ********** Tabs ********** //

export const Tabs = styled.div`
  grid-row: 1;
  grid-column: 1;
  height: 60px;
  white-space: nowrap;
  overflow-x: auto;
`;

export const PhotosTab = styled.div`
  border: 1px solid rgb(232, 233, 234);
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px 2px 0 10px;
  display: inline-block;
  color: rgb(0, 120, 130);
  box-shadow: rgba(59, 65, 68, 0.4) 0px 8px 20px -15px;

  &:hover {
    cursor: pointer;
  }
`;

export const OtherTab = styled.div`
  padding: 10px 20px;
  margin: 0 2px;
  display: inline-block;
  border-radius: 10px;

  &:hover {
    background: rgb(232, 233, 234);
    cursor: pointer;
  }
`;

// ********** Top Right Button Area ********** //

export const Modal1ButtonsArea = styled.div`
  grid-row: 1;
  grid-column: 2;
  text-align: right;
`;

export const ModalSave = styled(Save)`
  border: 1px solid rgb(232, 233, 234);
`;

export const ModalShare = styled(Share)`
  border: 1px solid rgb(232, 233, 234);
  margin-right: 0px;
`;

export const CloseButton = styled.div`
  padding: 5px;
  margin-left: 5px;
  margin-right: 10px;
  display: inline-block;

  &:hover {
    color: rgb(0, 120, 130);
    cursor: pointer;
  }
`;

// ********** House Information ********** //

export const HouseInfoArea = styled.div`
  border-top: 1px solid rgb(232, 233, 234);
  grid-row: 2;
  grid-column: 1 / 3;
  `;

export const HouseInfo = styled.div`
  position: relative;
  top: 7px;
  left: 8px;
  font-size: 15px;
`;

// ********** Gallery of House Photos ********** //

export const HousePictures = styled.div`
  border-radius: 12px;
  margin: 0px 7px 7px 7px;
  grid-row: 3;
  grid-column: 1;
  display: grid;
  grid-template: 60% 40% 100% 40% 100% / repeat(6, 1fr);
  overflow-y: auto;
  gap: 7px;
`;

export const HouseImage1 = styled.div`
  grid-row: 1;
  grid-column: 1 / 4;
  background: url(${props => props.photo});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &:hover {
    cursor: pointer;
  }
`;
export const HouseImage2 = styled(HouseImage1)`
  grid-row: 1;
  grid-column: 4 / 7;
`;
export const HouseImage3 = styled(HouseImage1)`
  grid-row: 2;
  grid-column: 1 / 3;
`;
export const HouseImage4 = styled(HouseImage1)`
  grid-row: 2;
  grid-column: 3 / 5;
`;
export const HouseImage5 = styled(HouseImage1)`
  grid-row: 2;
  grid-column: 5 / 7;
`;
export const HouseImage6 = styled(HouseImage1)`
  grid-row: 3;
  grid-column: 1 / 7;
`;
export const HouseImage7 = styled(HouseImage1)`
  grid-row: 4;
  grid-column: 1 / 3;
`;
export const HouseImage8 = styled(HouseImage1)`
  grid-row: 4;
  grid-column: 3 / 5;
`;
export const HouseImage9 = styled(HouseImage1)`
  grid-row: 4;
  grid-column: 5 / 7;
`;
export const HouseImage10 = styled(HouseImage1)`
  grid-row: 5;
  grid-column: 1 / 7;
`;

// ********** Schedule a Tour Area ********** //

export const Tours = styled.div`
  grid-row: 3;
  grid-column: 2;
  max-height: 100%;
  overflow-y: auto;
`;

export const ToursContainer = styled.div`
  border: 1px solid rgb(232, 233, 234);
  border-radius: 10px;
  height: 560px;
  width: 285px;
  box-shadow: rgba(59, 65, 68, 0.18) 0px 17px 21px -1px;
  padding: 20px;
  margin: 0px 0px 15px 5px;
`;

export const TourHeader = styled.div`
  font-family: TruliaSansBold;
  font-size: 20px;
  `;

export const TourType = styled.div`
  color: rgb(134, 144, 153);
  padding-top: 12px;
  padding-bottom: 7.5px;
  display: flex;
  align-items: center;
  font-family: TruliaSans;
`;

export const InPerson = styled.button`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: rgb(0, 120, 130);
  padding: 7px 16px;
  border-color: transparent;
  font-family: TruliaSansBold;
  font-size: 15px;
  color: white;
  width: 50%;
`;

export const VideoChat = styled.button`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: white;
  padding: 8px 16px;
  border: .5px solid rgb(205, 209, 212);;
  font-family: TruliaSansBold;
  font-size: 15px;
  color: rgb(59, 59, 59);
  width: 50%;
`;

export const CalendarContainer = styled.div`
  width: 100%;
  height: 90px;
  text-align: center;
  margin: 7px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CalendarDate = styled.div`
  border: .5px solid rgb(205, 209, 212);
  border-radius: 10px;
  width: 65px;
  height: 85px;
`;

export const CalendarDayOfWeek = styled.p`
  font-family: TruliaSans;
  margin: 11px 0 0 0;
  font-size: 13px;
`;
export const CalendarDayOfMonth = styled.p`
  font: TruliaSans;
  margin: 0;
  font-size: 20px;
`;
export const CalendarMonth = styled.p`
  font-family: TruliaSans;
  margin: 0;
  font-size: 13px;
`;

export const ChooseATime = styled.select`
  border: .5px solid rgb(205, 209, 212);
  border-radius: 10px;
  width: 100%;
  height: 40px;
  font-family: TruliaSansBold;
  font-size: 15px;
  padding: 5px;
`;

export const NamePhoneContainer = styled.div`
  height: 38px;
  width: 100%;
  margin-top: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TourNameInput = styled.input`
  border: .5px solid rgb(205, 209, 212);
  border-radius: 10px;
  width: 42%;
  height: 30px;
  font-family: TruliaSansBold;
  padding: 3px 10px;
  display: inline;
`;

export const TourPhoneInput = styled.input`
  border: .5px solid rgb(205, 209, 212);
  border-radius: 10px;
  width: 40%;
  height: 30px;
  font-family: TruliaSansBold;
  padding: 3px 10px;
  display: inline;
`;

export const TourEmailInput = styled.input`
  border: .5px solid rgb(205, 209, 212);
  border-radius: 10px;
  width: 261px;
  height: 30px;
  font-family: TruliaSansBold;
  padding: 3px 10px;
  margin-top: 7px;
`;

export const FinancingCheckBoxContainer = styled.div`
  width: 250px;
  height: 20px;
  display: flex;
  margin: 5px 0;
`;

export const FinancingCheckBoxInput = styled.input`
  margin-top: 5px;

  &:checked {
    filter: drop-shadow(rgba(0, 120, 130, 0.5) 0px 2px 3px);
  }

  &:hover {
    cursor: pointer
  }
`;

export const FinancingCheckMessageContainer = styled.div`
  display: inline-block;
`;

export const FinancingCheckMessage = styled.span`
  font-size: 10px;
  font-family: TruliaSans;
  color: rgb(134, 144, 153);
  margin-left: 5px;
`;

export const ScheduleATourButton = styled.button`
  border-radius: 10px;
  font-family: TruliaSansBold;
  background: rgb(217, 60, 35);
  color: white;
  width: 100%;
  height: 40px;
  margin-top: 5px;
  border: transparent;

  &:hover {
    background: white;
    color: rgb(217, 60, 35);
    border: 1px solid rgb(217, 60, 35);
    cursor: pointer;
  }
`;

export const PublicHealthContainer = styled.div`
  height: 30px;
  width: 100%;
  font-family: TruliaSans;
  font-size: 15px;
  color: rgb(0, 120, 130);
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const PublicHealthContainerText = styled.span`
  font-size: 16px;
  margin-left: 7px;
`;

export const TourDescription = styled.p`
  font-family: TruliaSans;
  font-size: 10px;
  color: rgb(134, 144, 153);
  line-height: 1.5;
`;

// ******************** SECOND MODAL ******************** //

// ********** Schedule a Tour Area ********** //

export const ImageDisplay = styled.div`

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .7);
  height: 100%;
  width: 100%;
  z-index: 1000;
  font-family: TruliaSansBold;
`;

export const CarouselHouseInfo = styled.div`
  color: white;
  margin: 23px;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 23px;
`;

export const Modal2Buttons = styled.div`
  text-align: right;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
`;

export const TourButton = styled.div`
  padding: 10px 15px;
  margin: 10px 7.5px 10px 10px;
  display: inline-block;
  background: rgb(217, 60, 35);
  color: white;
  border-radius: 5px;

  &:hover {
    background: white;
    color: rgb(217, 60, 35);
    border-color: rgb(217, 60, 35);
    cursor: pointer;
  }
`;

export const CloseButton2 = styled(CloseButton)`
  color: white;
`;

export const ImageSelected = styled.div`
  background: url(${props => props.photo});
  width: 800px;
  height: 500px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NextButton = styled.button`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background: rgb(59, 65, 68);
  position: fixed;
  top: 50%;
  right: 150px;
  display: inline-block;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;

  &:hover {
    background: rgb(133, 133, 133);
    cursor: pointer;
  }
`;

export const PrevButton = styled(NextButton)`
  left: 200px;
`;

export const pageCountContainer = styled.div`
  color: white;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 15px;
`;