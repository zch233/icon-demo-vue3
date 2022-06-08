// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PercentageOutlinedSvg from '@ant-design/icons-svg/lib/asn/PercentageOutlined';

export interface PercentageOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PercentageOutlined: PercentageOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PercentageOutlinedSvg} />;

PercentageOutlined.displayName = 'PercentageOutlined';

export default PercentageOutlined;