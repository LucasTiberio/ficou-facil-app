import { useNavigation } from "@react-navigation/native"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import ProfileActions from "../../components/Profile/ProfileActions"
import ProfileHead from "../../components/Profile/ProfileHead"
import ProfileStats from "../../components/Profile/ProfileStats"
import { Props as ProfileStatsProps } from "../../components/Profile/ProfileStats/types"
import ReturnFloatingComponent from "../../components/ReturnFloatingComponent"
import useGetMeIntegration from "../../hooks/integrations/useGetMeIntegration"

import { PAGES } from "../../routes/pages"

import logoutResetStore from "../../store/utils/logoutResetStore"
import QuestionsSelector from "../../store/states/questions/selectors"
import SessionSelector from "../../store/states/session/selectors"

import { Container } from "./styles"

const ProfilePage = () => {
    useGetMeIntegration()
    const profile = useSelector(SessionSelector.getData)
    const questions = useSelector(QuestionsSelector.getHistoricQuestions)

    const navigation = useNavigation<any>()
    const dispatch = useDispatch()

    const questionsMadeValues: ProfileStatsProps = useMemo(() => ({
        questionsMade: questions.length,
        questionsMadeWithImage: questions.filter(question => !!question?.isPicture).length,
    }), [questions])

    const handlePressLogout = async () => {
        await logoutResetStore(dispatch)
        navigation.navigate(PAGES.LOGIN)
    }

    return (
        <Container>
            <ReturnFloatingComponent page={PAGES.HOME}/>

            <ProfileHead
                name={profile?.user?.name}
                email={profile?.user?.email}
                imageUri={profile?.user?.picture}
            />

            <ProfileStats {...questionsMadeValues} />

            <ProfileActions handleLogout={handlePressLogout} />
        </Container>
    )
}

export default ProfilePage

