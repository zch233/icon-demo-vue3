// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/SyncOutlined';

export interface SyncOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SyncOutlined: SyncOutlinedIconType = (props, context) => <Icon name='SyncOutlined' {...{ ...props, ...context.attrs }} icon={SyncOutlinedSvg} />;

SyncOutlined.displayName = 'SyncOutlined';

export default SyncOutlined;