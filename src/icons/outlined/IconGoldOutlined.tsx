// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoldOutlinedSvg from '@ant-design/icons-svg/es/asn/GoldOutlined';

export interface GoldOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGoldOutlined: GoldOutlinedIconType = (props, context) => (
    <Icon name='GoldOutlined' {...{ ...props, ...context.attrs }} icon={GoldOutlinedSvg} />
);

IconGoldOutlined.displayName = 'IconGoldOutlined';

export default IconGoldOutlined;