// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodepenOutlinedSvg from 'icon-base/es/asn/CodepenOutlined';

export interface CodepenOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCodepenOutlined: CodepenOutlinedIconType = (props, context) => (
    <Icon name='CodepenOutlined' {...{ ...props, ...context.attrs }} icon={CodepenOutlinedSvg} />
);

IconCodepenOutlined.displayName = 'IconCodepenOutlined';
IconCodepenOutlined.theme = 'outlined';
IconCodepenOutlined.originName = 'codepen';

export default IconCodepenOutlined;
