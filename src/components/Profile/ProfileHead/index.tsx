import { StyledImage, NameStyledText, EmailStyledText, Wrapper } from "./styles"
import { Props } from "./types"

const ProfileHead = ({ imageUri, name, email }: Props) => {
    return (
        <Wrapper>
            <StyledImage
                source={{
                    uri: imageUri,
                    height: 124,
                    width: 124
                }} 
            />
            <NameStyledText>{name}</NameStyledText>

            <EmailStyledText>{email}</EmailStyledText>
        </Wrapper>
    )
}

export default ProfileHead