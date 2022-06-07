import {HTMLAttributes} from "vue";

export interface IconProps extends HTMLAttributes {
    spin?: boolean;
    rotate?: number;
    size?: number;
}
