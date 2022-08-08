import { useNavigate } from 'react-router-dom'

const useRedirect = (path: string) => {
    const navigate = useNavigate()
    const redirectHandler = () => navigate(path)
    return redirectHandler
}

export default useRedirect
