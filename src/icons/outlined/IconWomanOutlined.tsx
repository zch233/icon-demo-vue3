// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WomanOutlinedSvg from '@ant-design/icons-svg/es/asn/WomanOutlined';

export interface WomanOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconWomanOutlined: WomanOutlinedIconType = (props, context) => (
    <Icon name='WomanOutlined' {...{ ...props, ...context.attrs }} icon={WomanOutlinedSvg} />
);

IconWomanOutlined.displayName = 'IconWomanOutlined';

export default IconWomanOutlined;