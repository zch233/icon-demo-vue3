// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import LinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkOutlined';

export interface LinkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const LinkOutlined: LinkOutlinedIconType = (props, context) => <Icon name='LinkOutlined' {...{ ...props, ...context.attrs }} icon={LinkOutlinedSvg} />;

LinkOutlined.displayName = 'LinkOutlined';

export default LinkOutlined;