import parseArgs from 'minimist';
import { argv } from 'process';

const options = {

    alias: {
        t: 'type'
    },

    default: {
        type: 'mongo'
    }
}

export const { type } = parseArgs(argv, options);