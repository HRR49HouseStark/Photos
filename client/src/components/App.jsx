import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {FiHeart, FiShare} from 'react-icons/fi';
import {FaRegImage} from 'react-icons/fa';
import FirstModal from './Modal1.jsx';
import ImageCarousel from './Modal2.jsx';
import NavBar from './NavBar.jsx';
import * as Styled from '../styles/styles.js';
import s from '../styles/styles.css';

// ********** App Component ********** //

const App = () => {
  const [listing, setListing] = useState({});
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    fetchListing()
  }, []);

  var fetchListing = () => {
    var id = Math.floor(Math.random() * 100);
    axios.get(`/api/listings/${id}`)
      .then(newListing => {
        setListing(newListing.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const keyPress = useCallback(e => {
    if (e.key === 'Escape' && modal1IsOpen) {
      setModal1IsOpen(false);
      setSelectedImg(null);
    }
  }, [setModal1IsOpen, modal1IsOpen, setSelectedImg]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>

    <NavBar listing={listing}/>

    <Styled.Container>
      <Styled.Grid onClick={() => setModal1IsOpen(true)}>
        <Styled.Image1Style photo={listing.photos ? listing.photos[0] : null}>
        </Styled.Image1Style>
        <Styled.Image2Style photo={listing.photos ? listing.photos[2] : null}>
        </Styled.Image2Style>
        <Styled.Image3Style photo={listing.photos ? listing.photos[listing.photos.length -1] : null}>
        </Styled.Image3Style>
      </Styled.Grid>

      <Styled.ForSale>FOR SALE</Styled.ForSale>

      <Styled.ButtonsLayout>
        <Styled.Save><FiHeart className={`${s.icon}`}/>Save</Styled.Save>
        <Styled.Share><FiShare className={`${s.icon}`}/>Share</Styled.Share>
      </Styled.ButtonsLayout>

      <Styled.NumberOfPhotos onClick={() => setModal1IsOpen(true)}><FaRegImage className={`${s.imageIcon}`}/>{listing.photos ? listing.photos.length :null}</Styled.NumberOfPhotos>

    </Styled.Container>

    <FirstModal open={modal1IsOpen} onClose={() => setModal1IsOpen(false)} listing={listing} setSelectedImg={setSelectedImg}/>

    <ImageCarousel selectedImg={selectedImg} onClose={() => setSelectedImg(false)} listing={listing} setSelectedImg={setSelectedImg}/>

    </>
  )
}

export default App;