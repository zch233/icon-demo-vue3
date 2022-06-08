// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownloadOutlined';

export interface DownloadOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DownloadOutlined: DownloadOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DownloadOutlinedSvg} />;

DownloadOutlined.displayName = 'DownloadOutlined';

export default FunctionalComponent;