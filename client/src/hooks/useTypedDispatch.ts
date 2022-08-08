import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/index'

const useTypedDispatch = () => useDispatch<AppDispatch>()

export default useTypedDispatch
