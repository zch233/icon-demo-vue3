<script lang="tsx">
import { defineComponent, h, HTMLAttributes } from 'vue';
import { IconDefinition } from '@ant-design/icons-svg/lib/types';
import { AbstractNode } from '@ant-design/icons-svg/es/types';

export interface IconProps extends HTMLAttributes {
    spin?: boolean;
    rotate?: number;
    size?: number;
}

export default defineComponent({
    props: {
        spin: Boolean as PropType<boolean>,
        rotate: Number as PropType<number>,
        size: Number as PropType<number>,
        name: String as PropType<string>,
        icon: Object as PropType<IconDefinition>,
    },
    setup(props, context) {
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
        return () =>
            icon ? (
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
    },
});
</script>

<style lang="less">
.gupoIcon {
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    line-height: 0;
    color: inherit;
    text-align: center;
    text-rendering: optimizeLegibility;
    text-transform: none;
    vertical-align: -0.125em;
}

.gupoIcon > * {
    line-height: 1;
}

.gupoIcon svg {
    display: inline-block;
}

.gupoIcon::before {
    display: none;
}

.gupoIcon .gupoIcon-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
    vertical-align: -0.15em;
}

.gupoIcon[tabindex] {
    cursor: pointer;
}

.gupoIcon-spin::before,
.gupoIcon-spin {
    display: inline-block;
    -webkit-animation: loadingCircle 1s infinite linear;
    animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes loadingCircle {
    100% {
        transform: rotate(360deg);
    }
}
</style>
