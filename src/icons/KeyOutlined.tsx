// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import KeyOutlinedSvg from '@ant-design/icons-svg/lib/asn/KeyOutlined';

export interface KeyOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const KeyOutlined: KeyOutlinedIconType = (props, context) => <Icon name='KeyOutlined' {...{ ...props, ...context.attrs }} icon={KeyOutlinedSvg} />;

KeyOutlined.displayName = 'KeyOutlined';

export default KeyOutlined;