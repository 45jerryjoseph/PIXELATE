/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './profileCard.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const ProfileCard = () => {
  return (
    <div class="card__collection clear-fix">
        <div class="cards cards--two">
            <img src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80" className="img-responsive" alt="Cards Image"/>
            <span class="cards--two__rect"></span>
            <span class="cards--two__tri"></span>
            <p>Jerry Obora</p>
            <ul class="cards__list">
            <li><FacebookOutlinedIcon /></li>
            <li><TwitterIcon /></li>
            <li><InstagramIcon /></li>
            <li><LinkedInIcon /></li>
            </ul>
        </div>
    </div>

  )
}

export default ProfileCard