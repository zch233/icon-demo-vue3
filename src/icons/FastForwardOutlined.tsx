// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FastForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/FastForwardOutlined';

export interface FastForwardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FastForwardOutlined: FastForwardOutlinedIconType = (props, context) => <Icon name='FastForwardOutlined' {...{ ...props, ...context.attrs }} icon={FastForwardOutlinedSvg} />;

FastForwardOutlined.displayName = 'FastForwardOutlined';

export default FastForwardOutlined;