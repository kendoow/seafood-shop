import { ValidationsType } from './useInput'
import { useEffect, useState } from 'react'

const useValidation = (value: string, validations: ValidationsType) => {
    const [isEmpty, setEmpty] = useState<boolean>(true)
    const [minLengthError, setMinLengthError] = useState<boolean>(true)
    const [inputVaild, setInputVaild] = useState<boolean>(false)
    const [isEmail, setEmail] = useState<boolean>(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
            case 'minLength':
                if (validations.minLength) {
                    value.length < validations.minLength
                        ? setMinLengthError(true)
                        : setMinLengthError(false)
                }
                break
            case 'isEmpty':
                value ? setEmpty(false) : setEmpty(true)
                break
            case 'isEmail':
                const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                re.test(value.toLowerCase()) ? setEmail(false) : setEmail(true)
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError || isEmail) {
            setInputVaild(false)
        } else {
            setInputVaild(true)
        }
    }, [isEmpty, minLengthError, isEmail])
    return {
        isEmpty,
        minLengthError,
        inputVaild,
        isEmail,
    }
}

export default useValidation
