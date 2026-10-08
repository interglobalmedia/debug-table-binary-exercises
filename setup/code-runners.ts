import { defineCodeRunnersSetup } from '@slidev/types'

const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.28.0/full/pyodide.mjs'

let pyodidePromise: Promise<any> | undefined

function getPyodide() {
    pyodidePromise ??= import(/* @vite-ignore */ PYODIDE_URL)
        .then(module => module.loadPyodide())
    return pyodidePromise
}

export default defineCodeRunnersSetup(() => {
    return {
        async python(code) {
            const pyodide = await getPyodide()
            const lines: string[] = []
            pyodide.setStdout({ batched: (line: string) => lines.push(line) })

            const output = () => lines.map(line => ({ text: line }))

            try {
                await pyodide.runPythonAsync(code)
            } catch (err: any) {
                const errorLines = String(err.message ?? err).split('\n')
                const start = errorLines.findIndex(line => line.includes('File "<exec>"'))
                const useful = start === -1 ? errorLines : errorLines.slice(start)
                return [
                    ...output(),
                    ...useful.filter(line => line.trim()).map(line => ({ error: line.replace(/ /g, '\u00a0') })),
                ]
            }

            return output()
        },
    }
})