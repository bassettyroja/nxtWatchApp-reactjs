import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  SavedContainer,
  SavedTitleIconContainer,
  SavedVideoTitle,
  NoSavedVideoImage,
  SavedVideoList,
  SavedText,
  NoSavedVideoHeading,
  NoSavedVideoViews,
  NoSavedVideoNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedTitleIconContainer>
                <CgPlayListAdd color="#ff0000" size={25} />
              </SavedTitleIconContainer>
              <SavedText color={noteColor}>Saved Video</SavedText>
            </SavedVideoTitle>

            {savedVideos.length > 0 ? (
              <SavedVideoList>
                {savedVideos.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </SavedVideoList>
            ) : (
              <NoSavedVideoViews>
                <NoSavedVideoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideoHeading color={headingColor}>
                  No saved videos found
                </NoSavedVideoHeading>
                <NoSavedVideoNote color={noteColor}>
                  You can save your videos while watching them
                </NoSavedVideoNote>
              </NoSavedVideoViews>
            )}
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
