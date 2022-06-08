// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BgColorsOutlinedSvg from '@ant-design/icons-svg/lib/asn/BgColorsOutlined';

export interface BgColorsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BgColorsOutlined: BgColorsOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BgColorsOutlinedSvg} />;

BgColorsOutlined.displayName = 'BgColorsOutlined';

export default BgColorsOutlined;