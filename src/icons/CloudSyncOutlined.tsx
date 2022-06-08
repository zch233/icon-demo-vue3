// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CloudSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudSyncOutlined';

export interface CloudSyncOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CloudSyncOutlined: CloudSyncOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CloudSyncOutlinedSvg} />;

CloudSyncOutlined.displayName = 'CloudSyncOutlined';

export default CloudSyncOutlined;