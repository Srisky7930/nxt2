import {
  VideosList,
  ThumbnailImage,
  VideoDetailsCard,
  VideoTitle,
  ViewsCount,
  PublishedText,
  CountsCard,
  ProfileContainer,
  ProfileImage,
  DetailContainer,
  ChannelName,
} from './styledComponents'

const NxtVideos = props => {
  const {eachVideo} = props
  const {publishedAt, thumbnailUrl, title, viewCount, channel} = eachVideo

  return (
    <VideosList>
      <ThumbnailImage src={thumbnailUrl} alt="a" />
      <DetailContainer>
        <ProfileContainer>
          <ProfileImage src={channel.profile_image_url} />
        </ProfileContainer>
        <VideoDetailsCard>
          <VideoTitle>{title}</VideoTitle>
          <ChannelName> {channel.name} </ChannelName>
          <CountsCard>
            <ViewsCount> {viewCount} views</ViewsCount>

            <PublishedText> {publishedAt} </PublishedText>
          </CountsCard>
        </VideoDetailsCard>
      </DetailContainer>
    </VideosList>
  )
}

export default NxtVideos
