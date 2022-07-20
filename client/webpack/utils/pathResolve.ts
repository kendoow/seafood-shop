import path  from 'path';

export const pathResolve = (myPath: string) => {
    return path.resolve(__dirname, '../../', myPath)
}