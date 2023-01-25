import { iGetMeIntegration } from "../../../integrations/api/getMeIntegration";
import { iUser } from "./types";

export const adaptDataIntoUser = ({
    _id,
    email,
    locale,
    maxDate,
    name,
    picture,
}: iGetMeIntegration): iUser => ({
    email,
    id: _id,
    locale,
    maxDate,
    name,
    picture,
})