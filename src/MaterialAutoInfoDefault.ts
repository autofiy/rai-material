import { Direction } from './Direction';
export interface IMaterialAutoInfoDefault {
    groupSpace: number;
    component: {
        card: {
            itemSpace: number,
            direction: Direction;
        },
        table: {},
        simple: {
            itemSpace: number,
            direction: Direction;
            gapPx: number;
        },
        sgc: {
            cardPaddingPx: number;
        }
    }
}


export const MATERIAL_AUTO_INFO_DEFAULTS: IMaterialAutoInfoDefault = {
    groupSpace: 2,
    component: {
        card: {
            itemSpace: 1,
            direction: Direction.HORIZONTAL
        },
        table: {},
        simple: {
            itemSpace: 1,
            direction: Direction.VERTICAL,
            gapPx: 2
        },
        sgc: {
            cardPaddingPx: 8
        }
    }
}

export function getMaterialAutoInfoDefaults(): IMaterialAutoInfoDefault {
    return MATERIAL_AUTO_INFO_DEFAULTS;
}