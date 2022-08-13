import * as uuid from 'uuid'
import { UploadedFile } from 'express-fileupload'

import pathResolve from '@utils/pathResolve'

class FileService {
    createdFile(file: UploadedFile) {

        const expansion = `${file.name.split('.').pop()}`
        const fileName = `${uuid.v4()}.${expansion}`
        const filePath = pathResolve(`../static/${fileName}`)
        file.mv(filePath)
        return fileName
    }
}

export default new FileService()