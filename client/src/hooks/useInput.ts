import { ChangeEvent, useState } from 'react'
import useValidation from './useValidation'

export interface ValidationsType {
    isEmpty: boolean,
    minLength?: number,
    isEmail?: boolean,
}

const useInput = (initialValue: string, validations:ValidationsType) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const vaild = useValidation(value, validations)
    const onChange = (e : ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }
    return {
        value,
        onBlur,
        onChange,
        isDirty,
        setDirty,
        setValue,
        ...vaild,
    }
}

export default useInput
