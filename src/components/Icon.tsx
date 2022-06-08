import { FunctionalComponent, h, HTMLAttributes } from 'vue';
import { AbstractNode, IconDefinition } from '@ant-design/icons-svg/es/types';
import './style.less';

export interface IconProps extends HTMLAttributes {
    spin?: boolean;
    rotate?: number;
    size?: number;
    icon?: IconDefinition;
    name: string;
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
    const generate = (node: AbstractNode, key: string, rootProps?: { [key: string]: any } | false): any => {
        if (!rootProps) {
            return h(
                node.tag,
                { key, ...node.attrs },
                (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`))
            );
        }
        return h(
            node.tag,
            {
                key,
                ...rootProps,
                ...node.attrs,
            },
            (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`))
        );
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
    return icon ? (
        <span role='img' aria-label={name} {...restProps} class={classResult} style={styleResult}>
            {generate(icon.icon as AbstractNode, `gupoIcon-svg-${icon.name}`, {
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
