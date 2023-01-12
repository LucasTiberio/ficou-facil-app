import React from "react"

import Shadow from "../../Shadow"
import Spacer from "../../Spacer"
import { ButtonCTA, ButtonLabel, ButtonWrapper, Wrapper } from "./styles"
import { Props } from "./types"

const CTASection = ({ buttons }: Props) => {
    return (
        <Wrapper>
            {buttons.map((button, index) => (
                <Shadow key={`CTASection-button${index}`} type="medium">
                    <ButtonCTA onPress={button.onPress}>
                        <ButtonWrapper>
                            {button.icon && (
                                <React.Fragment>
                                    {button.icon}
                                    <Spacer spacingX={12} />
                                </React.Fragment>
                            )}
                            <ButtonLabel>{button.title}</ButtonLabel>
                        </ButtonWrapper>
                    </ButtonCTA>
                </Shadow>
            ))}
        </Wrapper>
    )
}

export default CTASection