// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LinkOutlinedSvg from '@ant-design/icons-svg/es/asn/LinkOutlined';

export interface LinkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLinkOutlined: LinkOutlinedIconType = (props, context) => (
    <Icon name='LinkOutlined' {...{ ...props, ...context.attrs }} icon={LinkOutlinedSvg} />
);

IconLinkOutlined.displayName = 'IconLinkOutlined';

export default IconLinkOutlined;