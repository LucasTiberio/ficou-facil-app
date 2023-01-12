import { StyledText, Wrapper } from "./styles"
import { Props } from "./types"

const ShowDetailsSwipeableActionComponent = ({ onPress }: Props) => {
    return (
        <Wrapper onPress={onPress}>
            <StyledText style={{transform: [{ rotate: '270deg' }]}}>
                Ver detalhes
            </StyledText>
        </Wrapper>
    )
}

export default ShowDetailsSwipeableActionComponent