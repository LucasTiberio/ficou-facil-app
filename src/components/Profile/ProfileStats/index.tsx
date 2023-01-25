import { MiddleWaveTop, MiddleWaveBottom, StatsItem, StatsItemLabel, StatsItemValue, Wrapper } from "./styles"
import { Props } from "./types"

const ProfileStats = ({ questionsMade, questionsMadeWithImage }: Props) => {
    return (
        <Wrapper>
            <MiddleWaveTop />
            <MiddleWaveBottom />

            <StatsItem>
                <StatsItemLabel>Perguntas feitas</StatsItemLabel>
                <StatsItemValue>{questionsMade}</StatsItemValue>
            </StatsItem>

            <StatsItem>
                <StatsItemLabel>Perguntas com imagem</StatsItemLabel>
                <StatsItemValue>{questionsMadeWithImage}</StatsItemValue>
            </StatsItem>
        </Wrapper>
    )
}

export default ProfileStats