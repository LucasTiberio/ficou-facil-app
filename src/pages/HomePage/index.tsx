import Historic from "../../components/Historic";
import Logo from "../../components/Logo";
import MakeQuestionComponent from "../../components/MakeQuestionComponent";

import NavigationBar from "../../components/NavigationBar";
import useFetchHistory from "../../hooks/useFetchHistoryIntegration";
import { Container, VerticalOffsetWrapper } from "./styles";

const HomePage = () => {
    useFetchHistory();

    return (
        <Container>
            <Logo
                type="inline-logo"
                height={25}
                useBackground
            />

            <VerticalOffsetWrapper>
                <MakeQuestionComponent />
            </VerticalOffsetWrapper>

            <Historic />

            <NavigationBar />
        </Container>
    )
}

export default HomePage;