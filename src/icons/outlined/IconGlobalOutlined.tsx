// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GlobalOutlinedSvg from '@ant-design/icons-svg/es/asn/GlobalOutlined';

export interface GlobalOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGlobalOutlined: GlobalOutlinedIconType = (props, context) => (
    <Icon name='GlobalOutlined' {...{ ...props, ...context.attrs }} icon={GlobalOutlinedSvg} />
);

IconGlobalOutlined.displayName = 'IconGlobalOutlined';

export default IconGlobalOutlined;