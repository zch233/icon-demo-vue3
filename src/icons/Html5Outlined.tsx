// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import Html5OutlinedSvg from '@ant-design/icons-svg/lib/asn/Html5Outlined';

export interface Html5OutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const Html5Outlined: Html5OutlinedIconType = (props, context) => <Icon name='Html5Outlined' {...{ ...props, ...context.attrs }} icon={Html5OutlinedSvg} />;

Html5Outlined.displayName = 'Html5Outlined';

export default Html5Outlined;