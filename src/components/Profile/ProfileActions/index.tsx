import { Text } from "react-native";
import { LogoutButton, Wrapper } from "./styles";
import { Props } from "./types";

const ProfileActions = ({
    handleLogout,
}: Props) => {
    return (
        <Wrapper>
            <LogoutButton onPress={handleLogout}>
                <Text style={{ color: "white" }}>Sair</Text>
            </LogoutButton>
        </Wrapper>
    )
}

export default ProfileActions;