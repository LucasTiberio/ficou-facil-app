type iData = {
    token: string;
    user?: any;
}

interface iStateSession {
    hasSession: boolean;
    data?: iData;
    setData: (data: iData) => void;
}