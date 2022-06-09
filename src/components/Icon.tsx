import { FunctionalComponent, HTMLAttributes } from 'vue';
import { AbstractNode, IconDefinition } from '@ant-design/icons-svg/es/types';
import { generateSvgNode, useInsertStyles } from "../utils";

export interface IconProps extends HTMLAttributes {
    spin?: boolean;
    rotate?: number;
    size?: number;
    icon?: IconDefinition;
    name?: string;
}

const Icon: FunctionalComponent<IconProps> = (props, context) => {
    const { attrs, slots } = context;
    const { spin, rotate, size, icon, name, ...restProps } = { ...props, ...attrs };
    const children = slots.default && slots.default();
    const classResult = {
        gupoIcon: true,
        'gupoIcon-spin': spin,
        [`gupoIcon-svg-${name}`]: !!name,
    };

    const styleResult = {
        ...(rotate
            ? {
                  msTransform: `rotate(${rotate}deg)`,
                  transform: `rotate(${rotate}deg)`,
              }
            : undefined),
        ...(size
            ? {
                  fontSize: `${size}px`,
              }
            : undefined),
    };
    useInsertStyles();
    return icon ? (
        <span role='img' aria-label={name} {...restProps} class={classResult} style={styleResult}>
            {generateSvgNode(icon.icon as AbstractNode, `gupoIcon-svg-${icon.name}`, {
                class: 'gupoIcon-icon',
                'data-icon': icon.name,
            })}
        </span>
    ) : (
        <span role='img' aria-label={name} {...restProps} class={classResult} style={styleResult}>
            {children}
        </span>
    );
};

export default Icon;
