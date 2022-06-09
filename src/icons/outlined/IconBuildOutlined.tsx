// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BuildOutlinedSvg from '@ant-design/icons-svg/es/asn/BuildOutlined';

export interface BuildOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBuildOutlined: BuildOutlinedIconType = (props, context) => (
    <Icon name='BuildOutlined' {...{ ...props, ...context.attrs }} icon={BuildOutlinedSvg} />
);

IconBuildOutlined.displayName = 'IconBuildOutlined';

export default IconBuildOutlined;