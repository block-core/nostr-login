import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.esm.js',
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            typescript({
                tsconfig: 'tsconfig.json',
            }),
            resolve({
                browser: true
            }),
            commonjs(),
            terser({
                compress: {
                    toplevel: true,
                }
            })
        ],
    },
    {
        input: 'src/iife-module.ts',
        output: [
            {
                file: 'dist/unpkg.js',
                format: 'iife',
            }
        ],
        plugins: [
            typescript({
                tsconfig: 'tsconfig.json',
            }),
            resolve({
                browser: true
            }),
            commonjs(),
            terser({
                compress: {
                    toplevel: true,
                },
            })
        ],
    }
];

