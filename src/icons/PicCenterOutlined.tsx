// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PicCenterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicCenterOutlined';

export interface PicCenterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PicCenterOutlined: PicCenterOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PicCenterOutlinedSvg} />;

PicCenterOutlined.displayName = 'PicCenterOutlined';

export default PicCenterOutlined;